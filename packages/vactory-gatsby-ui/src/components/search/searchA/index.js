import React from "react"
// import {Box, SearchOverlay, Button} from "vactory-ui";
import {Box, SearchOverlay, Icon} from "vactory-ui";
import {navigate} from "gatsby"

export const SearchA = () => {
    const [show, setShow] = React.useState(false);
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
            <SearchOverlay onSubmit={q => {
                navigate('/fr/recherche?q=' + q);
                setShow(false)
            }}
                           onClose={() => setShow(false)}
                           open={show}/>
        </Box>
    )
};
