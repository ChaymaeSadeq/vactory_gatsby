import React from "react"
import {useForm} from "react-hook-form"
import ReCaptcha from "react-google-recaptcha"
import {useTranslation} from "react-i18next"
import Api from "vactory-gatsby-api"
import {AppSettings} from "vactory-gatsby-core"
import {Box, Label, Input, Button, Text} from "vactory-ui"
import {Toast} from 'vactory-gatsby-ui';

export const CommentForm = ({entity_uid, cid = null, type_content}) => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const {handleSubmit, register, clearError, errors, setValue, reset} = useForm();
    const url = `${Api.baseURL}${currentLanguage}/api/comment/comment`;
    const recaptchaRef = React.useRef();

    const CreateData = (params) => {
        let parent = null;
        if (params.parent) {
            parent = {
                "type": `comment--comment`,
                "id": params.parent,
            };
        }

        return {
            "data": {
                "type": `comment--comment`,
                "attributes": {
                    // "status": true,
                    "subject": params.body,
                    "name": params.name,
                    // "mail": this.state.email,
                    "entity_type": "node",
                    "field_name": "field_comments",
                    "g-recaptcha-response": params.captcha,
                    "comment_body": {
                        "value": params.body,
                        "format": "plain_text",
                    },
                },
                "relationships": {
                    "entity_id": {
                        "data": {
                            "type": `node--${type_content}`,
                            "id": params.entity_id,
                        },
                    },
                    "pid": {
                        "data": parent,
                    },
                },
            },
        }
    };

    const onSubmit = values => {
        const {hide} = Toast.loading("Loading...", {hideAfter: 0});
        const headers = {
            "Content-Type": "application/vnd.api+json",
            "Accept": "application/vnd.api+json",
        };

        const comment = CreateData({
            // name: isAuthenticated ? null : values.nom,
            name: values.nom,
            body: values.body,
            captcha: values.captcha_response,
            entity_id: entity_uid,
            parent: cid
        });

        //POST Query to save comment
        Api.kitsu.axios({
            method: "POST",
            url: url,
            headers: headers,
            data: comment,
        })
            .then(res => {
                reset();
                recaptchaRef.current.reset();
                hide();
                Toast.success(t("Votre commentaire à été ajouter."));
            })
            .catch(err => {
                recaptchaRef.current.reset();
                hide();
                Toast.error(t("Une erreur s'est produite"));
            })
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="captcha_response"
                       ref={register({required: t("Le champs Captcha est requis")})}/>
                <Box display="flex" flexDirection="column">
                    <Box my="xsmall" px="xsmall">
                        <Label>{t('Votre nom')} <Text as="span" color="#ef3d25">*</Text></Label>
                        <Input
                            name="name"
                            type="text"
                            placeholder={t("Votre nom")}
                            status={errors.name ? 'danger' : null}
                            ref={register({required: t("Le champs 'Votre nom' est requis")})}/>
                        {errors.name &&
                        <Text color="danger500" mt="xxsmall" fontSize="13px">
                            {errors.name.message}
                        </Text>
                        }
                    </Box>
                    <Box my="xsmall" px="xsmall">
                        <Label>{t('Votre commentaire')} <Text as="span" color="#ef3d25">*</Text></Label>
                        <Input as="textarea" name="body" placeholder={t("Votre commentaire")}
                               status={errors.body ? 'danger' : null}
                               ref={register({required: t("Le champs 'Votre commentaire' est requis")})}
                        />
                        {errors.body &&
                        <Text color="danger500" mt="xxsmall" fontSize="13px">
                            {errors.body.message}
                        </Text>
                        }
                    </Box>

                    <Box my="xsmall" px="xsmall">
                        <ReCaptcha
                            sitekey={AppSettings.keys.reCaptcha}
                            hl={currentLanguage}
                            ref={recaptchaRef}
                            onChange={val => {
                                setValue("captcha_response", val);
                                clearError("captcha_response");
                            }}
                            onExpired={() => {
                                setValue("captcha_response", null)
                            }}
                            onErrored={() => {
                                setValue("captcha_response", null)
                            }}
                        />
                        {errors.captcha_response &&
                        <Text color="danger500" mt="xxsmall"
                              fontSize="13px">{errors.captcha_response.message}</Text>
                        }
                    </Box>

                    <Box my="xsmall" px="xsmall">
                        <Button type="submit" variant="primary" size="medium">{t('Envoyer')}</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    )
};

