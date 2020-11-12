import React, {useCallback, useReducer} from "react"
import Api from "vactory-gatsby-api"
import get from 'lodash.get';
import qs from "qs"
import {useTranslation} from "react-i18next"
import reducer, {initialState} from './reducer';
import {fetching, success, error} from './actionCreators';

export const useWebformRequest = () => {
    const {i18n} = useTranslation();
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitWebform = useCallback(async (data) => {
        dispatch(fetching());
        try {
            const response = await Api.postRest(
                '_webform',
                qs.stringify(data),
                i18n.language,
                {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                }
            );
            dispatch(success(response));
        } catch (e) {
            const apiErrorMessage = get(e,"response.data.error");
            const errorMessage = apiErrorMessage ? apiErrorMessage : e.message;
            dispatch(error(errorMessage));
        }
    }, [i18n.language]);

    return [state, submitWebform];
};
