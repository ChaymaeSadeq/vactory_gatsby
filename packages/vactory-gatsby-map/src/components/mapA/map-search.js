import React, {useState} from "react"
import Fuse from "fuse.js"
import {useTranslation} from "react-i18next"
import {Flex} from "vactory-ui"
import {MapSearchForm} from "./styles"
import {SearchResult, SearchButton, SearchBox, SearchInput} from "./searchComponents";


function paginator(arr, perPage) {
    if (perPage < 1 || !arr) return () => []

    return function (page) {
        const basePage = page * perPage

        return page < 0 || basePage >= arr.length
            ? []
            : arr.slice(basePage, basePage + perPage)
    }
}

const FuzeOptions = {
    shouldSort: true,
    threshold: 0.1, // perfect match.
    // location: 0,
    // distance: 100,
    minMatchCharLength: 3,
    keys: [
        {
            name: "field_locator_adress.locality",
            weight: 0.3,
        },
        {
            name: "field_locator_adress.address_line1",
            weight: 0.2,
        },
        {
            name: "name",
            weight: 0.1,
        },
    ],
}

export const MapSearch = ({items, onSelect}) => {
    const {t} = useTranslation()
    const [results, setResults] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [pageNumber, setPageNumber] = useState(0) // eslint-disable-line no-unused-vars
    const pageLimit = 10
    const currentResults = paginator(results, pageLimit)(pageNumber)
    const [openSearchLayer, setOpenSearchLayer] = useState(false)

    const onSearch = (e) => {
        const value = e.target.value
        let suggestions = []

        if (value.length > 0) {
            suggestions = new Fuse(items, FuzeOptions).search(value)
            setPageCount(Math.ceil(suggestions.length / pageLimit))

            setOpenSearchLayer(true)
        }
        setResults(suggestions)
    }
    const onSearchClick = () => {
        setOpenSearchLayer(true)
    }

    const onCloseSearchLayer = (event) => {
        event.preventDefault()
        setOpenSearchLayer(false)
    }

    return (
        <MapSearchForm>
            <SearchBox>
                <SearchInput
                    onChange={onSearch}
                    onClick={onSearchClick}
                />
                <Flex borderLeft="1px solid #adadad">
                    { currentResults.length > 0 &&
                        <SearchButton icon="close-thin" onClick={(e) => onCloseSearchLayer(e)} />
                    }
                    <SearchButton icon="recherche" />
                </Flex>
            </SearchBox>

            <div className="map-search-result-wrapper">
                {(currentResults.length > 0 && openSearchLayer) &&
                <div className="map-search-result">
                    { currentResults.map(({item}, index) => (
                            <SearchResult
                                key={index+item.name}
                                name={item.name}
                                locality={item?.field_locator_adress?.locality}
                                addressLine1={item?.field_locator_adress?.address_line1}
                                addressLine2={item?.field_locator_adress?.address_line2}
                                onClick={() => onSelect(null, item)}
                            />
                    )) }
                </div>
                }
                { (pageCount > 0 && currentResults.length > 0 && openSearchLayer) &&
                    <Flex className="map-search-pagination" alignItems="center" justifyContent="space-between" p={10}>
                        <span> {results.length} {t("Résultat (s)")} </span>
                        <span> {pageNumber + 1} {t("of")} {pageCount} </span>
                    </Flex>
                }
            </div>
        </MapSearchForm>
    )
};
