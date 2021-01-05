import React from "react"
import {Box, Icon, Header, Text, Flex} from 'vactory-ui'
import {StatePageSection} from "../state";

const HeaderAMP = () => {
    return <Header p="xlarge" bg="white" boxShadow={1}>
        <Flex alignItems="center" width={"100%"}>
            <Flex alignItems="center" flexGrow={1}>
                <Icon name={"pacman"} color="primary" size="large"/>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary">AMP HEADER</Text>
            </Flex>
        </Flex>
    </Header>;
};

const FooterAMP = () => {
    return <Box p="large" mt="xlarge" bg="darkBlue">
        <Text textAlign="center" fontWeight="black" fontSize="14px" color="white">AMP Powered by Factory</Text>
    </Box>
};

export const DefaultLayoutAmp = ({children, location, pageContext: {node, pageInfo, breadcrumb}, nodeSettings}) => {
    return (
        <>
            <StatePageSection.Provider>
            <HeaderAMP/>
            <main>
                {children}
            </main>
            </StatePageSection.Provider>
            <FooterAMP/>
        </>
    )
};
