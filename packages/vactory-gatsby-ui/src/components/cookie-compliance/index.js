import React, {useEffect, useState} from "react"
import { SingleActionModal as Modal } from "vactory-gatsby-ui";
import {useTranslation} from "react-i18next"
import Cookies from "js-cookie"
import isClient from "is-client"

export const CookieComplianceLayer = () => {
    const {t} = useTranslation();
    const cookieName = "hasConsent";
    const expires = 150;

    const [showCookie, setShowCookie] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onAccept = () => {
        Cookies.set(cookieName, true, {expires: expires});
        setShowCookie(false);
        setShowModal(false);
    };

    const onDecline = () => {
        Cookies.set(cookieName, false, {expires: expires})
        setShowCookie(false);
        setShowModal(false);
    };

    // Check cookie on load.
    useEffect(() => {
        if (Cookies.get(cookieName) === undefined) {
            setShowCookie(true);
            // Cookies.set('foo', 'bar')
        }
    }, []);

    // No cookie layer on SSR.
    if (!isClient()) {
        return null;
    }

    return (
        <>
            {showCookie && (
                <div className="fixed inset-x-0 bottom-0 z-1">
                    <div className="bg-indigo-600">
                        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 relative">
                            <div className="font-medium text-white">
                                {t("Nous utilisons des cookies afin d’améliorer votre expérience de navigation sur notre site. Vous pouvez obtenir des informations sur ces cookies ou modifier les réglages d’acceptation en cliquant")}{" "}
                                <button className="underline" onClick={() => setShowModal(true)}><strong>{t('ici')}</strong></button>.{" "}
                                {t('En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de ces cookies.')}
                            </div>
                            <div className="absolute top-0 ltr:right-0 rtl:left-0 transform -translate-x-1/2 -translate-y-1/2 sm:order-3 sm:ltr:ml-3 sm:rtl:mr-3">
                                <button
                                    onClick={onDecline}
                                    type="button"
                                    className="ltr:-mr-1 rtl:-ml-1 flex p-2 rounded-full shadow transition bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white sm:ltr:-mr-2 sm:rtl:-ml-2"
                                >
                                    <span className="sr-only">Dismiss</span>
                                    {/* <!-- Heroicon name: x --> */}
                                    <svg
                                        className="h-6 w-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <Modal
                    actionHandler={onAccept}
                    actionLabel={t('Accepter')}
                    isOpen={showModal}
                    body={
                        <div className="text-center">
                            <h4 className="text-3xl font-bold mb-3">{t('Les cookies Google Analytics')}</h4>
                            <p>
                                {t(
                                    "Nous utilisons des cookies de Google Analytics, ces cookies nous aident à identifier "+
                                    "le contenu qui vous interesse le plus ainsi qu'à repérer certains dysfonctionnements. "+
                                    "Vos données de navigations sur ce site sont envoyées à Google Inc"
                                )}
                            </p>
                        </div>
                    }
                />
            )}
        </>
    )
};
