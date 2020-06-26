/**
 * imageLayoutStyles
 * @type {{threeColumns: {sizes: *[], width: number, height: number, ratio: number}, twoColumns: {sizes: *[], width: number, height: number, ratio: number}}}
 */
export const imageLayoutStyles = {
    threeColumns: {
        sizes: [
            {
                name: "press_kit_image_768_503",
                media: "(max-width: 767px)",
            },
            {
                name: "press_kit_image_768_503",
                media: "(min-width: 768px)",
            },
            {
                name: "press_kit_image_675_442",
                media: "(min-width: 992px)",
            },
            {
                name: "press_kit_image_359_235",
                media: "(min-width: 1200px)",
            },
        ],
        width: 359,
        height: 235,
        ratio: 359 / 235
    },
    twoColumns: {
        sizes: [
            {
                name: "press_kit_image_480_314",
                media: "(max-width: 767px)",
            },
            {
                name: "press_kit_image_768_503",
                media: "(min-width: 768px)",
            },
            {
                name: "press_kit_image_675_442",
                media: "(min-width: 992px)",
            },
            {
                name: "press_kit_image_546_358",
                media: "(min-width: 1200px)",
            },
        ],
        width: 546,
        height: 358,
        ratio: 546 / 358
    }
};
