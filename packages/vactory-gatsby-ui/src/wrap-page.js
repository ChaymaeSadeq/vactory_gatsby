import React from 'react';
import get from 'lodash.get';
import {Head} from 'vactory-gatsby-core'
import Layout from './layouts/DefaultLayout'

export const wrapPageElement = ({element, props}) => {
    const node = get(props, 'pageContext.node');
    const pageInfo = get(props, 'pageContext.pageInfo');
    const location = get(props, 'location');

    console.log(location)
    console.log(pageInfo)

    if (node) {
        return (
            <>
                <Head lang={node.langcode} meta={node.field_vactory_meta_tags}/>
                <Layout {...props}>{element}</Layout>
            </>
        )
    } else {
        return null
    }
};
