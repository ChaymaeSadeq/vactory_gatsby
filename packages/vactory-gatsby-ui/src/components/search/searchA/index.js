import React, {useState, useEffect} from "react"
import {Box, SearchOverlay, Icon} from "vactory-ui";
import {navigate} from "gatsby"
import isClient from "is-client"

export const SearchA = () => {
    const [show, setShow] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);

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
                navigate('/fr/recherche?q=' + q);
                setShow(false)
            }}
                           onClose={() => setShow(false)}
                           open={show}/>
            }
        </Box>
    )
};
