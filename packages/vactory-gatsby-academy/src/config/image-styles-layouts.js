/**
 * imageLayoutStyles
 * @type {{threeColumns: {sizes: *[], width: number, height: number, ratio: number}, twoColumns: {sizes: *[], width: number, height: number, ratio: number}, {Avatar: {sizes: *[], width: number, height: number, ratio: number}}, {Thumbnail: {sizes: *[], width: number, height: number, ratio: number}}}
 */
export const imageLayoutStyles = {
    threeColumns: {
        sizes: [
            {
                name: "academy_image_768_503",
                media: "(max-width: 767px)",
            },
            {
                name: "academy_image_768_503",
                media: "(min-width: 768px)",
            },
            {
                name: "academy_image_675_442",
                media: "(min-width: 992px)",
            },
            {
                name: "academy_image_359_235",
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
                name: "academy_image_480_314",
                media: "(max-width: 767px)",
            },
            {
                name: "academy_image_768_503",
                media: "(min-width: 768px)",
            },
            {
                name: "academy_image_675_442",
                media: "(min-width: 992px)",
            },
            {
                name: "academy_image_546_358",
                media: "(min-width: 1200px)",
            },
        ],
        width: 546,
        height: 358,
        ratio: 546 / 358
    },
    avatar: {
        sizes: [
            {
                name: "academy_image_100_100",
                media: "(min-width: 0)",
            },
        ],
        width: 100,
        height: 100,
        ratio: 1,
    },
    thumbnail: {
        sizes: [
            {
                name: "academy_image_384_288",
                media: "(max-width: 767px)",
            },
            {
                name: "academy_image_282_212",
                media: "(min-width: 768px)",
            },
        ],
        width: 400,
        height: 300,
        ratio: 4/3
    }
};
