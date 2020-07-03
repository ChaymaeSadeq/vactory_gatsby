import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next"
import {Box, Label, Input, Button, Text, Layer, Flex} from 'vactory-ui'
import {AppSettings, useWebformSubmit} from "vactory-gatsby-core";
import ReCaptcha from "react-google-recaptcha"

const RequiredAsterisk = () => <Text mx={'5px'} as="span" fontWeight="bold" color="#ef3d25">(*)</Text>;
const ErrorMessage = ({children}) => <Text color="danger500" mt="xxsmall" fontSize="13px">{children}</Text>;
const SuccessMessageLayer = () => {
    const [showModal, setShowModal] = useState(true);

    if (!showModal) {
        return null
    }

    return (
        <Layer onClickOutside={() => setShowModal(false)}>
            <Flex p="medium" boxShadow={4} flexDirection="column" bg="white" borderRadius="small" maxWidth="400px">
                <Flex mb="medium"><Text level="1" fontSize="18px">Modal title</Text></Flex>
                <Flex>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta finibus maximus. Mauris
                        diam velit, venenatis sed tincidunt nec, convallis ac tortor. Phasellus imperdiet facilisis
                        placerat.</Text>
                </Flex>
                <Flex mt="medium" justifyContent="flex-end">
                    <Button borderRadius="rounded" mx="small" variant="danger"
                            onClick={() => setShowModal(false)}>close</Button>
                </Flex>
            </Flex>
        </Layer>
    )
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

                    <Box my="xsmall" px="xsmall">
                        <Label mb="xsmall" htmlFor={'first_name'}>{t('Prénom')} <RequiredAsterisk/></Label>
                        <Input
                            type='text'
                            name="first_name"
                            id='first_name'
                            status={errors.first_name ? 'danger' : null}
                            ref={register({required: t("Le champs 'Prénom' est requis")})}
                        />
                        {errors.first_name && <ErrorMessage>{errors.first_name.message}</ErrorMessage>}
                    </Box>

                    <Box my="xsmall" px="xsmall">
                        <Label mb="xsmall" htmlFor="last_name">{t('Nom')} <RequiredAsterisk/></Label>
                        <Input
                            name="last_name"
                            id="last_name"
                            status={errors.last_name ? 'danger' : null}
                            ref={register({required: t("Le champs 'Nom' est requis")})}
                        />
                        {errors.last_name && <ErrorMessage>{errors.last_name.message}</ErrorMessage>}
                    </Box>

                    <Box my="xsmall" px="xsmall">
                        <Label mb="xsmall" htmlFor="email">{t('Adresse mail')} <RequiredAsterisk/></Label>
                        <Input
                            name="email"
                            id="email"
                            status={errors.email ? 'danger' : null}
                            ref={register({
                                required: t("Le champs 'Adresse mail' est requis"),
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: t("Le champs 'Adresse mail' est invalide"),
                                },
                            })}
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </Box>

                    <Box my="xsmall" px="xsmall">
                        <Label mb="xsmall" htmlFor="email_confirmation">{t('Confirmation adresse mail')}
                            <RequiredAsterisk/></Label>
                        <Input
                            name="email_confirmation"
                            id="email_confirmation"
                            status={errors.email_confirmation ? 'danger' : null}
                            ref={register({
                                validate: (value) => {
                                    return value === watch("email")
                                },
                            })}
                        />
                        {errors.email_confirmation && <ErrorMessage>{t("L'adresse mail est incorrecte")}</ErrorMessage>}
                    </Box>

                    <Box my="xsmall" px="xsmall">
                        <Label mb="xsmall" htmlFor="message">{t('Message')}</Label>
                        <Input
                            as={'textarea'}
                            name="message"
                            id="message"
                            ref={register}
                        />
                    </Box>

                    <Box my="xsmall" px="xsmall">
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
                    </Box>

                    <Box my="small" px="xsmall">
                        {webformFetch.status && webformFetch.status === "loading" &&
                        <h4>Sending data.</h4>
                        }
                        <Button type={'submit'}>{t('Envoyer')}</Button>
                    </Box>

                </form>
                {webformFetch.status === "resolved" && <SuccessMessageLayer/>}
            </main>
        </div>
    )
};

export default PostApplyForm
