import React, {useState, useEffect} from "react"
import axios from "axios"
import {useLoadScript, GoogleMap, InfoWindow} from "@react-google-maps/api"
import {MapContainer} from "./styles"
import {MapSearch} from "./map-search"
import isClient from "is-client"
import Markers from "./markers"
import {mapOptions} from './options'
import {SearchResult} from "./searchComponents";
import {LoadingOverlay} from 'vactory-gatsby-ui'
import placeholder_image from "./images/placeholder.jpg";


export const GmapA = (props) => {
    const {mapKey} = props
    const [isBrowser, setIsBrowser] = useState(false);
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: mapKey,
        // preventGoogleFontsLoading: true,
        region: "MA",
        id: "gmap-script-loader",
    })

    const center = {lat: 30.420431, lng: -9.560905}
    const zoom = 5
    const [mapRef, setMapRef] = useState(null)
    const [items, setItems] = useState([])
    const [infoOpen, setInfoOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const [markerMap, setMarkerMap] = useState({})

    // We have to create a mapping of our places to actual Marker objects
    const markerLoadHandler = (marker, place) => {
        return setMarkerMap(prevState => {
            return {...prevState, [place.id]: marker}
        })
    }

    const markerHandler = (event, item) => {
        // Remember which place was clicked
        setSelected(item)

        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
            setInfoOpen(false)
        }

        // Open it.
        setInfoOpen(true)

        // Center map.
        mapRef.setCenter(new window.google.maps.LatLng(item.field_locator_info.lat, item.field_locator_info.lon))

        // Zoom to marker.
        if (mapRef.getZoom() < 16) {
            mapRef.setZoom(16)
        }
    }

    // Store a reference to the google map instance.
    const loadHandler = map => {
        setMapRef(map)
    }

    // Load data.
    useEffect(() => {
        axios.get(`/locator-map.json`)
            .then(res => {
                setItems(res.data.items)
            })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Check SSR
    useEffect(() => {
        setIsBrowser(isClient())
    }, [isClient]) // eslint-disable-line react-hooks/exhaustive-deps

    // SSR.
    if (!isBrowser) {
        return null
    }

    return (
        <MapContainer>
            <div className="map-input-wrapper">
                {isLoaded && items.length > 0 ?
                    <>
                        <MapSearch items={items} onSelect={(event, item) => markerHandler(event, item)}/>
                        <GoogleMap
                            id='map-container-a'
                            onLoad={loadHandler}
                            options={mapOptions}
                            zoom={zoom}
                            center={center}
                        >
                            {mapRef &&
                            <>
                                <Markers
                                    items={items}
                                    onClick={(event, item) => markerHandler(event, item)}
                                    onLoad={(marker, item) => markerLoadHandler(marker, item)}
                                />

                                {infoOpen && selected && (
                                    <InfoWindow
                                        disableAutoPan={true}
                                        anchor={markerMap[selected.id]}
                                        position={{
                                            lat: parseFloat(selected.field_locator_info.lat),
                                            lng: parseFloat(selected.field_locator_info.lon),
                                        }}
                                        onCloseClick={() => setInfoOpen(false)}
                                    >
                                        <SearchResult
                                            name={selected.name}
                                            addressLine1={selected.field_locator_adress?.address_line1}
                                            addressLine2={selected.field_locator_adress?.address_line2}
                                            phone={selected.field_locator_phone}
                                            phone2={selected.field_locator_phone2}
                                            fax={selected.field_locator_fax}
                                        />
                                    </InfoWindow>
                                )}
                            </>
                            }
                        </GoogleMap>
                    </>
                    :
                    <LoadingOverlay
                        active={true}
                        text="taking care of stuff.."
                        styles={{
                            wrapper: base => ({
                                ...base,
                                height: '100%',
                            }),
                            overlay: base => ({
                                ...base,
                                background: `linear-gradient(rgba(0,0,0,.4) 100%, #000), rgba(0,0,0, .7) url(${placeholder_image}) center / cover`,
                            }),
                        }}
                    />
                    }
            </div>
        </MapContainer>
    )

};
