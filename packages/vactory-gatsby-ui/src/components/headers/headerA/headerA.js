import React from "react"
import {
    MenuA as MenuNavigation,
    SearchA as SearchBox,
    LanguageSelectorA as LanguageSelector,
    Link,
    HeaderALayerMenu as LayerMenu,
    StatePageSection
} from 'vactory-gatsby-ui'
import {AuthUserProfile, AppSettings} from "vactory-gatsby-core";
import { motion, useAnimation } from 'framer-motion';

const MotionHeader = motion.header;

export const HeaderA = ({pageInfo, currentLanguage, location}) => {
    const headerRef = React.useRef({
        location: null,
    });
    let pageSection = StatePageSection.useContainer();
    const headerAnimationCtrls = useAnimation();
    let variants = {
        initial: { backgroundColor: '#ffffff' },
        state2: { backgroundColor: '#333333' },
        state3: { backgroundColor: '#ff6347' },
    };
	const [showMenu, setShowMenu] = React.useState(false);

    React.useEffect(() => {
        if (!headerRef.current.location) {
            headerRef.current.location = location;
        }
        else if (headerRef.current.location !== location) {
            pageSection.setCurrentSection('initial');
            headerRef.current.location = location
        }
        else {
            headerAnimationCtrls.start(pageSection.section)
        }
    }, [pageSection]);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
            <MotionHeader
                variants={variants}
                className="p-8 sticky shadow-lg flex justify-between"
                animate={headerAnimationCtrls}
                initial="initial"
                transition={{ ease: "easeOut", duration: 0.5 }}
            >
                <div className="flex-grow-0">
                    <div className="flex border-4 border-indigo-500 p-1">
                        <svg
                            className="h-6 w-6 text-blue-500 ltr:mr-1 rtl:ml-1"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={48}
                            height={48}
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M482.365 89.402c-46.951-54.725-116.605-89.402-194.365-89.402-141.385 0-256 114.615-256 256s114.615 256 256 256c77.76 0 147.414-34.678 194.364-89.402l-162.364-166.598 162.365-166.598zM352 60.301c19.716 0 35.699 15.982 35.699 35.699s-15.983 35.699-35.699 35.699-35.699-15.983-35.699-35.699c0-19.716 15.983-35.699 35.699-35.699z" />
                        </svg>
                        <Link className="font-black tracking-widest text-indigo-500" to={`/${currentLanguage}`}>VACTORY</Link>
                    </div>
                </div>
                
                <div className="flex-grow justify-center hidden md:flex">
                    <MenuNavigation/>
                </div>
                
                <div className="mx-2.5"><SearchBox/></div>
                
                <LanguageSelector currentLanguage={currentLanguage} pageInfo={pageInfo}/>
                
                {AppSettings.enableAuth &&
                <AuthUserProfile />
                }

                <div className="md:hidden text-gray-900">
                    <button type="button" onClick={() => setShowMenu(true)}>
                        <svg
                            className="w-5 h-5"
                            width={24}
                            height={24}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                <LayerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </MotionHeader>
    );
};
