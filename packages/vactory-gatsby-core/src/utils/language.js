export const getLanguageByPathname = (pathname) => {
    let found = 'fr'; // @todo: get default value from config.
    const language = pathname.match(/^\/[a-z]{2}\//g);
    if (language instanceof Array) {
        if (typeof language[0] !== 'string') {
            return undefined;
        }
        found = language[0].split('/').join('');
    }

    return found;
}
