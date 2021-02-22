import React, {useState} from "react";
import {Picture, Icon} from "vactory-gatsby-ui";
import Youtube from "react-youtube";
import { Transition } from "@headlessui/react";

export const VideoYoutube = ({ videoId, image, image_alt, hideImage, isPopUp, imageStyles }) => {
    const [isShowVideo, handleShowVideo] = useState((hideImage) ? true : false)
    const youtubeOption = {
        width: "100%",
        playerVars: {
            autoplay: 1,
            controls: 0,
        },
    }

	return (
        <div className="relative mx-auto w-full h-full rounded-lg shadow-lg max-w-sm lg:max-w-lg overflow-hidden">
            {((!isShowVideo && !isPopUp) || isPopUp) &&
            <button
                onClick={() => !isShowVideo ? handleShowVideo(true) : null}    
				type="button"
				className="aspect-h-3 aspect-w-4 relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none"
			>
				<span className="sr-only">Watch our video to learn more</span>
                    <Picture
                        file={image}
                        alt={image_alt}
                        sizes={imageStyles.sizes}
                        width={imageStyles.width}
                        height={imageStyles.height}
                        ratio={imageStyles.ratio}
                    />
				<div
					className="absolute inset-0 w-full h-full flex items-center justify-center"
					aria-hidden="true"
				>
					<svg
						className="h-20 w-20 text-indigo-500"
						fill="currentColor"
						viewBox="0 0 84 84"
					>
						<circle
							opacity="0.9"
							cx={42}
							cy={42}
							r={42}
							fill="white"
						/>
						<path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
					</svg>
				</div>
			</button>
            }
            
            {(isShowVideo && !isPopUp) &&
            <Youtube {...youtubeOption} videoId={videoId}/>
            }

            {(isShowVideo && isPopUp) &&
                <div className={`${isShowVideo && isPopUp ? "fixed" : "hidden"} z-10 inset-0 overflow-y-auto flex justify-center items-center`}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition
                            show={isShowVideo && isPopUp}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </Transition>

                        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
				</span>
                        <Transition
                            show={isShowVideo && isPopUp}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6`}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div>

                            
                                <div>
                                    <Icon onClick={() => handleShowVideo(false)} name="add-simple" size="30px" color="white" />
                                    <Youtube {...youtubeOption} videoId={videoId} />
                                </div>

                            </div>
                            <button
                                onClick={() => handleShowVideo(false)}
                                type="button"
                                className="absolute top-0 ltr:right-0 rtl:left-0 mt-4 ltr:mr-4 rtl:ml-4 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="h-6 w-6"
                                    x-description="Heroicon name: outline/x"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </Transition>
                    </div>
                </div>
            }
		</div>
	);
};