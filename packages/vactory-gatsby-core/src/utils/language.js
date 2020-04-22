export const getLanguageByPathname = (pathname) => {
    let found;
    const language = pathname.match(/\/([a-zA-Z-]*)/g);
    if (language instanceof Array) {
        if (typeof language[0] !== 'string') {
            return undefined;
        }
        found = language[0].replace('/', '');
    }

    return found;
}
