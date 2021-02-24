import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next"
import {SingleActionModal as Modal} from 'vactory-gatsby-ui'
import {AppSettings, useWebformSubmit} from "vactory-gatsby-core";
import ReCaptcha from "react-google-recaptcha"

const RequiredAsterisk = () => <span className="mx-2 text-red-600 font-bold">(*)</span>;
const ErrorMessage = ({children}) => <p className="mt-1 text-red-600">{children}</p>;
const SuccessMessageLayer = () => {
    const [showModal, setShowModal] = useState(true);

    return (
        <Modal
            body={<div className="text-3xl text-green-500 font-bold">
                Done!
            </div>}
            actionLabel={"close"}
            actionHandler={() => {
                setShowModal(false);
            }}
            isOpen={showModal}
        />
	);
};

const PostApplyForm = ({post}) => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const {handleWebformRemoteSubmit, webformFetch} = useWebformSubmit();
    const {register, handleSubmit, watch, errors, setValue, reset} = useForm();
    const formId = 'job_application';
    const recaptchaRef = React.createRef();

    const onSubmit = data => {
        handleWebformRemoteSubmit(data);
    };

    useEffect(() => {
        if (webformFetch.status === "resolved") {
            reset();
            recaptchaRef.current.reset();
        }
    }, [reset, webformFetch.status, recaptchaRef]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <main>
                <h2>Apply form</h2>
                <h1>{post.title}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="webform_id" ref={register} value={formId}/>
                    <input type="hidden" name="captcha_response" ref={register} value='Google no captcha'/>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor={'first_name'}
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            {t('Prénom')}<RequiredAsterisk/>
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                ref={register({required: t("Le champs 'Prénom' est requis")})}
                            />
                            {errors.first_name && <ErrorMessage>{errors.first_name.message}</ErrorMessage>}
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor={'last_name'}
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            {t('Nom')}<RequiredAsterisk/>
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                ref={register({required: t("Le champs 'Nom' est requis")})}
                            />
                            {errors.last_name && <ErrorMessage>{errors.last_name.message}</ErrorMessage>}
                        </div>
                    </div>

                    
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor={'email'}
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            {t('Adresse mail')}<RequiredAsterisk/>
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                ref={register({
                                    required: t("Le champs 'Adresse mail' est requis"),
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: t("Le champs 'Adresse mail' est invalide"),
                                    },
                                })}
                            />
                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        </div>
                    </div>
                    
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor={'email_confirmation'}
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            {t('Adresse mail comfimation')}<RequiredAsterisk/>
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                type="text"
                                name="email_confirmation"
                                id="email_confirmation"
                                className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                ref={register({
                                    required: t("Le champs 'Adresse mail' est requis"),
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: t("Le champs 'Adresse mail' est invalide"),
                                    },
                                })}
                            />
                            {errors.email_confirmation && <ErrorMessage>{errors.email_confirmation.message}</ErrorMessage>}
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor={'message'}
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            {t('Message')}<RequiredAsterisk/>
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                ref={register}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <ReCaptcha
                            sitekey={AppSettings.keys.reCaptcha}
                            hl={currentLanguage}
                            ref={(e) => {
                                recaptchaRef.current = e;
                                register(e, {
                                    name: "g-recaptcha-response",
                                }, {
                                    required: "Captcha required",
                                })
                            }}
                            onChange={val => {
                                setValue("g-recaptcha-response", val)
                            }}
                            onExpired={() => {
                                setValue("g-recaptcha-response", null)
                            }}
                            onErrored={() => {
                                setValue("g-recaptcha-response", null)
                            }}
                        />

                        {errors["g-recaptcha-response"] &&
                        <ErrorMessage>{errors["g-recaptcha-response"].message}</ErrorMessage>}
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        {webformFetch.status && webformFetch.status === "loading" &&
                        <h4>Sending data.</h4>
                        }
                        <button className="btn px-3 py-2 text-sm leading-4" type={'submit'}>{t('Envoyer')}</button>
                    </div>

                </form>
                {webformFetch.status === "resolved" && <SuccessMessageLayer/>}
            </main>
        </div>
    )
};

export default PostApplyForm
