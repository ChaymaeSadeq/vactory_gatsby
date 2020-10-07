import React from "react"
import {Box, Footer, Text} from "vactory-ui";
import { FooterMenu } from "../../menus";

export const FooterA = () => {
    return (
        <Box>
            <Footer mt='medium' p="medium" justifyContent='flex-end'>
                <FooterMenu />
            </Footer>
            <Footer p="medium" bg="black800" justifyContent='center'>
                <Text textAlign="center" fontSize="14px" color="white">Footer - void</Text>
            </Footer>
        </Box>);
};
