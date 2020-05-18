import React, {useCallback} from "react"
import Api from "vactory-gatsby-api"
import get from 'lodash.get';
import qs from "qs"

export const useWebformSubmit = () => {
    const [webformFetch, setWebformFetch] = React.useState({
        status: "idle",
        response: null,
        error: null,
    });

    const handleWebformRemoteSubmit = useCallback(
        (data) => {
            if (typeof data === "undefined") {
                throw new Error("handleWebformRemoteSubmit missing data param")
            }

            setWebformFetch({
                status: "loading",
                response: null,
                error: null,
            });

            Api.postRest(
                '_webform',
                qs.stringify(data),
                false,
                {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                }
            )
                .then(function (response) {
                    setWebformFetch({
                        status: "resolved",
                        response: response.data,
                        error: webformFetch.error,
                    })
                })
                .catch(function (error) {
                    const apiErrorMessage = get("response.data.error", error);
                    const errorMessage = apiErrorMessage ? apiErrorMessage : error.message;

                    setWebformFetch({
                        status: "rejected",
                        response: webformFetch.response,
                        error: errorMessage,
                    })
                })
        },
        [webformFetch.error, webformFetch.response],
    );

    return {
        handleWebformRemoteSubmit,
        webformFetch,
    }
};
