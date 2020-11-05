import React from "react"
import {Helmet} from "react-helmet";

export const StructuredDataSchema = ({data}) => {
    return <Helmet>
        <script type="application/ld+json">
            {`
        ${JSON.stringify(data)}
      `}
        </script>
    </Helmet>
};
