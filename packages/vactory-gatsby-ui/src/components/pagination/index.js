import React from "react"
import {Flex, Pagination as BasePagination} from "vactory-ui";

export const Pagination = (props) => {
    return (
        <Flex my="medium" alignItems="center" justifyContent="center">
            <BasePagination {...props}/>
        </Flex>
    )
};
