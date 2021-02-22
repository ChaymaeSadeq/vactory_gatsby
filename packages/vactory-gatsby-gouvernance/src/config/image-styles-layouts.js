/**
 * imageLayoutStyles
 * @type {{threeColumns: {sizes: *[], width: number, height: number, ratio: number}, twoColumns: {sizes: *[], width: number, height: number, ratio: number}}}
 */
export const imageLayoutStyles = {
    avatar: {
        sizes: [
            {
                name: "gouvernance_avatar_200_200",
                media: "(min-width: 0px)",
            },
        ],
        width: 200,
        height: 200,
        ratio: 1
    },
    slider: {
        sizes: [
            {
                name: "gouvernance_image_768_503",
                media: "(max-width: 767px)",
            },
            {
                name: "gouvernance_image_768_503",
                media: "(min-width: 768px)",
            },
            {
                name: "gouvernance_image_675_442",
                media: "(min-width: 992px)",
            },
            {
                name: "gouvernance_image_359_235",
                media: "(min-width: 1200px)",
            },
        ],
        width: 359,
        height: 235,
        ratio: 359 / 235
    },
    tabs: {
        sizes: [
            {
                name: "gouvernance_image_480_314",
                media: "(max-width: 767px)",
            },
            {
                name: "gouvernance_image_768_503",
                media: "(min-width: 768px)",
            },
            {
                name: "gouvernance_image_675_442",
                media: "(min-width: 992px)",
            },
            {
                name: "gouvernance_image_546_358",
                media: "(min-width: 1200px)",
            },
        ],
        width: 546,
        height: 358,
        ratio: 546 / 358
    }
};
