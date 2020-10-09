import React from "react"
import {
    BannersTemplate,
    StatePageSection
} from 'vactory-gatsby-ui'
import {Box, Icon, Header, Heading, Text, Flex, Button} from 'vactory-ui'

const HeaderExample = () => {
    return <Header fixed={true} p="xlarge" bg="white" boxShadow={1}>
        <Flex alignItems="center" width={"100%"}>
            <Flex alignItems="center" flexGrow={1}>
                <Icon name={"pacman"} color="primary" size="large"/>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary">FACTORY</Text>
            </Flex>
            <Button outline="primary" borderRadius="rounded">I'm a button</Button>
        </Flex>
    </Header>;
};

const FooterExample = () => {
    return <Box p="large" mt="xlarge" bg="darkBlue">
        <Text textAlign="center" fontWeight="black" fontSize="14px" color="white">Powered by Factory</Text>
    </Box>
};

const MainContentExample = () => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p="0 0.5rem"
            minHeight="100vh"
        >
            <Box __css={{
                padding: "5rem 0",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Heading level={1} sx={{
                    margin: 0,
                    lineHeight: "1.15",
                    fontSize: "4rem",
                    textAlign: "center",
                    fontWeight: "bold"
                }}>Welcome to <Text as={'span'} sx={{
                    color: "#0070f3"
                }}>Factory</Text></Heading>

                <Text my="medium" sx={{
                    textAlign: "center",
                    lineHeight: "1.5",
                    fontSize: "1.5rem"
                }}>
                    Get started by editing{' '}
                    <Box as={"code"} __css={{
                        background: "#fafafa",
                        borderRadius: "5px",
                        padding: "0.75rem",
                        fontSize: "1.1rem",
                        fontFamily: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace"
                    }}>projects/project/src/vactory-gatsby-ui/layout.js</Box>
                </Text>
            </Box>
        </Flex>
    )
};

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {

    return (
        <>
            <StatePageSection.Provider>

                <HeaderExample/>

                {node.internal_node_banner &&
                <BannersTemplate
                    widget={node.internal_node_banner}
                    node={node}
                    breadcrumbItems={(breadcrumb && breadcrumb.length > 0) ? breadcrumb : []}/>
                }
                <main>
                    <MainContentExample/>
                    {children}
                </main>
            </StatePageSection.Provider>

            <FooterExample/>
        </>
    )
}
