import React, {useState} from "react"
// import ReactPaginate from "react-paginate"
import Fuse from "fuse.js"
import {useTranslation} from "react-i18next"
import {Icon} from "vactory-ui"
import {MapSearchForm} from "./styles"
import ImgSearchReslt from "./images/building.jpg"

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
    const [pageNumber, setPageNumber] = useState(0)
    const pageLimit = 10
    const currentResults = paginator(results, pageLimit)(pageNumber)
    const [openSearchLayer, setOpenSearchLayer] = useState(false)

    const onSearch = (e) => {
        const value = e.target.value
        let suggestions = []

        if (value.length > 0) {
            suggestions = new Fuse(items, FuzeOptions).search(value)
            setPageCount(Math.ceil(suggestions.length / pageLimit))
            if (!openSearchLayer) {
                setOpenSearchLayer(true)
            }
        }
        setResults(suggestions)
    }
    const onSearchClick = () => {
        if (!openSearchLayer) {
            setOpenSearchLayer(true)
        }
    }

    const onCloseSearchLayer = (event) => {
        event.preventDefault()
        setOpenSearchLayer(false)
    }

    const onSelectItem = (value) => {
        onSelect(null, value)
    }

    const handlePageClick = (data) => { // eslint-disable-line no-unused-vars
        const selected = data.selected
        setPageNumber(selected)
    }

    return (
        <MapSearchForm>
            <div className="input-map-search-wrapper">
                <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    onChange={onSearch}
                    onClick={onSearchClick}
                />
                <div className="d-flex align-items-center justify-content-center">
                    {(currentResults.length > 0 && openSearchLayer) &&
                    <a href="#." onClick={(e) => onCloseSearchLayer(e)} className="close-search-wrapper">
                        <Icon icon="close-thin"/>
                    </a>
                    }
                    <div className="icon-wrapper">
                        <Icon icon="recherche"/>
                    </div>
                </div>
            </div>
            <div className="map-search-result-wrapper">
                {(currentResults.length > 0 && openSearchLayer) &&
                <div className="map-search-result">
                    <div className="map-search-result--list">
                        {
                            currentResults.map(({item}, index) => {
                                return (
                                    <div role="button" tabIndex="0" key={index} onKeyPress={() => onSelectItem(item)}>
                                        <div
                                            className="map-search-result-item d-flex align-items-center justify-content-between">
                                            <div>
                                                <h5>{item.name}</h5>
                                                <p>
                                                    {item.field_locator_adress.locality} <br/>
                                                    {item.field_locator_adress.address_line1}
                                                    ​​{item.field_locator_adress.address_line2}
                                                </p>
                                            </div>
                                            <div>
                                                <img src={ImgSearchReslt} alt={item.name}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                }
                {(pageCount > 0 && currentResults.length > 0 && openSearchLayer) &&
                <div className="map-search-pagination d-flex align-items-center justify-content-end">
                    <p>
                        {results.length} {t("Résultat (s)")} {pageNumber + 1} {t("Of")} {pageCount}
                    </p>
                    {/*<ReactPaginate*/}
                    {/*    forcePage={pageNumber}*/}
                    {/*    previousLabel={"<"}*/}
                    {/*    nextLabel={">"}*/}
                    {/*    breakLabel={"..."}*/}
                    {/*    breakClassName={"break-me"}*/}
                    {/*    pageCount={pageCount}*/}
                    {/*    marginPagesDisplayed={5}*/}
                    {/*    pageRangeDisplayed={5}*/}
                    {/*    onPageChange={handlePageClick}*/}
                    {/*    containerClassName={"pagination"}*/}
                    {/*    pageClassName={"page-item"}*/}
                    {/*    previousClassName={"page-item"}*/}
                    {/*    previousLinkClassName={"page-link"}*/}
                    {/*    nextClassName={"page-item"}*/}
                    {/*    nextLinkClassName={"page-link"}*/}
                    {/*    pageLinkClassName={"page-link"}*/}
                    {/*    subContainerClassName={"pages pagination"}*/}
                    {/*    activeClassName={"active"}*/}
                    {/*/>*/}
                </div>
                }
            </div>
        </MapSearchForm>
    )
};
