export const toRegister = (fieldName, validation, values, t) => {
    let register = {};

    if (validation?.sameAs) {
        register.validate = {}
    }

    if (validation?.required) {
        register.required = (validation?.requiredError) ?
            t(validation?.requiredError) : t(`Webform: Le champ "${fieldName}" est requis.`)
    }

    if (validation?.pattern) {
        const match = validation.pattern.match(new RegExp('^/(.*?)/([gimy]*)$'));
        const regex = new RegExp(match[1], match[2]);
        register.pattern = {
            value: regex,
            message: (validation?.patternError) ?
                t(validation.patternError) : t(`Webform: Le champ "${fieldName}" est invalid.`)
        }
    }

    if (validation?.sameAs && values[validation?.sameAs]) {
        const message = (validation?.sameAsError) ?
            t(validation.sameAsError) : t(`Webform: Le champ "${fieldName}" est invalid.`);
        register.validate.sameAs = value => value === values[validation?.sameAs] || message
    }

    return register
};
