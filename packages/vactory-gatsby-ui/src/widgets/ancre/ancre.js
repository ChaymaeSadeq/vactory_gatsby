import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import {useTranslation} from "react-i18next"
import { Waypoint } from 'react-waypoint'
import Scrollspy from 'react-scrollspy'

export const Ancre = ({items}) => {
    const [shouldStick, setShouldStick] = React.useState(false);
    const [navsMinHeight, setNavsMinHeight] = React.useState();
    const desktopRef = React.createRef();
    const mobileRef = React.createRef();
    const {t} = useTranslation();

    const jumpTo = (id) => {
        const $anchor = document.getElementById(id);
        $anchor.click();
    };

    React.useEffect(
        () => setNavsMinHeight(desktopRef.current.clientHeight || mobileRef.current.clientHeight),
        [desktopRef, mobileRef]
    )

    return <div style={{minHeight:  shouldStick ? navsMinHeight : null }}>
        <Waypoint onLeave={() => setShouldStick(true)} onEnter={() => setShouldStick(false)} />
        <div className={`bg-white shadow-md mb-2 py-4 ${shouldStick ? 'fixed top-0 inset-x-0 mt-0 z-1' : ''}`} >

            {/* For Desktop */}
            <div className="hidden sm:block" ref={desktopRef} variant="navs.ancre.layout">
                <div className="flex justify-center">
                    <span className="mr-5">{t("Sur cette page")}:</span>

                    <Scrollspy
                        as="ul"
                        items={ items.map( i => i.id ) }
                        currentClassName="underline"
                        offset={0}
                        className="flex space-x-4 rtl:space-x-reverse"
                    >
                        {items.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <AnchorLink
                                        href={`#${item.id}`}
                                        id={`ancre-${item.id}`}
                                        className="text-gray-500 font-bold"
                                    >
                                        {item.title}
                                    </AnchorLink>
                                </li>
                            )
                        })}
                    </Scrollspy>
                </div>

            </div>

            {/* For Mobile */}
			<div className="sm:hidden">
				<label htmlFor="factory-ancre" className="sr-only">
					Select a tab:
				</label>
				<select
					onBlur={null}
					onChange={(e) => jumpTo(e.currentTarget.value)}
					id="factory-ancre"
					name="factory-ancre"
					className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
				>
					{items.map((item, i) => (
                        <option key={i} value={`ancre-${item.id}`}>{item.title}</option>
					))}
				</select>
			</div>
        </div>
    </div>
};
