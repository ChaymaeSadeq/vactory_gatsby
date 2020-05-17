import React from "react"
import {Marker, MarkerClusterer} from '@react-google-maps/api'
import ClusterIcon from './images/cluster.png'
import MarkerIcon from './images/marker.png'

const options = {
    styles: [{
        url: ClusterIcon,
        height: 64,
        width: 64,
        anchor: [64, 64],
        textColor: '#ffffff',
        textSize: 10
    }]
};

const MarkerPoint = ({item, clusterer, onClick, onLoad}) => {
    return (
        <Marker
            position={{
                lat: parseFloat(item.field_locator_info.lat),
                lng: parseFloat(item.field_locator_info.lon)
            }}
            clusterer={clusterer}
            onClick={(event) => onClick(event, item)}
            onLoad={marker => onLoad(marker, item)}
            icon={{
                url: MarkerIcon,
                scaledSize: new window.google.maps.Size(64, 64),
            }}
        />
    )
};

class Markers extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {items, onClick, onLoad} = this.props;
        return (
            <MarkerClusterer
                averageCenter
                gridSize={60}
                options={options}
            >
                {
                    (clusterer) => items.map((item) => (
                        <MarkerPoint
                            key={item.id}
                            item={item}
                            clusterer={clusterer}
                            onClick={onClick}
                            onLoad={onLoad}
                        />
                    ))
                }
            </MarkerClusterer>

        );
    }
}

export default Markers
