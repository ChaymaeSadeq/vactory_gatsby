import React from 'react';
import Api from "vactory-gatsby-api"

Api.init(
    "https://dam-new.lapreprod.com/backend/",
    {
        Authorization: 'Basic YXdiOmF3YnZvaWQyMDIw'
    },
    ['fr', 'ar']
);

export const wrapRootElement = ({element}) => (
    <div>{element}</div>
);
