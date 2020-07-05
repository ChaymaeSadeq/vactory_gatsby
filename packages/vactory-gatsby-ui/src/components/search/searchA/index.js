import React, {useState, useEffect} from "react"
import {Box, SearchOverlay, Icon} from "vactory-ui";
import {navigate} from "gatsby"
import isClient from "is-client"
import {useViewsAlias} from "vactory-gatsby-nodes";

export const SearchA = () => {
    const [show, setShow] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);
    const searchUrl = useViewsAlias('search');

    // Check SSR
    useEffect(() => {
        setIsBrowser(isClient())
    }, [isClient]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box>
            <Box onClick={() => setShow(true)}
                 sx={{
                     cursor: 'pointer'
                 }}>
                <Icon
                    name="recherche"
                    color="primary"
                    size="large"
                />
            </Box>
            {isBrowser &&
            <SearchOverlay onSubmit={q => {
                navigate(`${searchUrl}?q=${q}`);
                setShow(false)
            }}
                           onClose={() => setShow(false)}
                           open={show}/>
            }
        </Box>
    )
};
