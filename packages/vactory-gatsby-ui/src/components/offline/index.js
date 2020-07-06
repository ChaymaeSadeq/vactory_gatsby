import React, {useEffect} from 'react'
import {Detector} from "react-detect-offline";
import {Toast} from '../../../index';
import {useTranslation} from "react-i18next"

let hideToast = () => {
};
let wasOffline = false;

const Offline = () => {
    const {t} = useTranslation();
    useEffect(() => {
        const {hide} = Toast.warn(t('Aucune connexion Internet !'), {
            position: 'bottom-center',
            hideAfter: 0,
            onClick: () => {
                hide();
            },
        });
        hideToast = hide;
        wasOffline = true;
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return null
};

const Online = () => {
    const {t} = useTranslation();
    useEffect(() => {
        hideToast();

        if (wasOffline) {
            wasOffline = false;
            setTimeout(() => {
                Toast.success(t('De nouveau connecté à Internet !'), {
                    position: 'bottom-center',
                });
            }, 1000);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return null;
};

export const OfflineDetector = () => {
    return (
        <Detector
            render={({online}) => !online ? <Offline/> : <Online/>}
        />)
};
