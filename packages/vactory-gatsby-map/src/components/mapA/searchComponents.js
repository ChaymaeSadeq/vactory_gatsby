import React from "react"
import {useTranslation} from "react-i18next"
import {Icon} from "vactory-gatsby-ui"
import default_image from "./images/building.jpg"

export const SearchResult = ({image = 'default', name, locality, addressLine1, addressLine2, phone, phone2, fax, ...rest}) => {
    const {t} = useTranslation();
    let image_url, image_style;

    if (image === 'default') {
        image_url = default_image;
        let hueHash = (name+' '+addressLine1).split('').reduce( (acc, cur) => acc + cur.charCodeAt(0), 0) % 360;
        image_style = {
            filter: `sepia(50%) hue-rotate(${hueHash}deg)`
        };
    }
    else
        image_url = image;

    return (
        <div
            className="card items-center max-w-sm"
            __css={{
                alignItems: 'center',
                maxWidth: 395,
                '.map-search-result &.card': {
                    padding: 10,
                    borderTop: '.5px solid #eee',
                    borderBottom: '.5px solid #eee',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#fafafa',
                    },
                }
            }}
            {...rest}
        >
            <div className="mr-2.5 flex-shrink-0">
                <img className="object-cover" src={image_url} alt={name} width={78} height={78} style={image_style} />
            </div>
            <div>
                <h5 className="font-medium text-sm">{name}</h5>
                <p className="text-gray-400 text-xs">
                    {locality}
                    ​​{ addressLine1 && <><br/> {addressLine1}</> }
                    ​​{ addressLine2 && <><br/> {addressLine2}</> }
                    ​​{ phone        && <><br/> {t('Phone')}: {phone}</> }
                    ​​{ phone2       && <><br/> {t('Phone')}: {phone2}</> }
                    ​​{ fax          && <><br/> {t('Fax')}: {fax}</> }
                </p>
            </div>
        </div>
    )
}

export const SearchButton = ({icon, ...rest}) => {
    return (
        <button
            className="ml-2.5"
            {...rest}
        >
            <Icon icon={icon} size={22} />
        </button>
    )
}

export const SearchInput = props => (
    <input
        type="text"
        placeholder="Search"
        className="form-control border-0 flex-grow p-0"
        {...props}
    />
)

export const SearchBox = props => (
    <div className="flex items-center justify-between bg-white p-2.5 border border-gray-100 mb-1 shadow"
        {...props}
    />
)