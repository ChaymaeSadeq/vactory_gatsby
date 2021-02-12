import React from 'react'
import isClient from "is-client"
import {useTranslation} from "react-i18next"

export const InternalWebShare = ({title = '', text = '', url = ''}) => {
    const {t} = useTranslation();
    const [internalUrl, setInternalUrl] = React.useState(url);
    const [internalTitle, setInternalTitle] = React.useState(title);

    // Share URL.
    React.useEffect(() => {
        if (url.length <= 0 && typeof window !== 'undefined') {
            setInternalUrl(window.location.href);
            const canonicalElement = document.querySelector('link[rel=canonical]');
            if (canonicalElement !== null) {
                setInternalUrl(canonicalElement.href);
            }
        }

        if (typeof window !== 'undefined') {
            setInternalTitle(document.title)
        }

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const share = () => {
        navigator.share({
            title: internalTitle,
            text: text,
            url: internalUrl,
        })
    };

    return (
		<div className="flex flex-wrap items-center">
			<p className="text-base font-bold">
				{t("Vous avez aimé cette page ? Partagez la !")}
			</p>
			<button onClick={share} className="flex p-4 justify-center">
                <svg
                    className="h-8 w-8"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={10}
                    height={10}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
					/>
				</svg>
			</button>
		</div>
	);
};

export const WebShare = (props) => {
    // Disable on SSR.
    if (!isClient()) {
        return null
    }

    // Check for support.
    if (typeof navigator.share === 'undefined') {
        return null;
    }

    return <InternalWebShare {...props} />
}
