import React from "react"
import {HeaderA as Header} from '../components/headers/headerA'
import {FooterA as Footer} from "../components/footers/footerA";
import {Breadcrumb} from "../components/breadcrumb";

export default ({children, location, pageContext: {node, pageInfo, breadcrumb}}) => {
    return (
        <>
            <Header pageInfo={pageInfo} currentLanguage={node.langcode}/>
            {breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
