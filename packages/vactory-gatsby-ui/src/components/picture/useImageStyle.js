import {AppSettings, ImageStyles} from "vactory-gatsby-core"

export const useImageStyle = (fakeImageStyleName) => {
	const backendURL = AppSettings.api.url;

	const imageStyle = ImageStyles.find(style => style.name === fakeImageStyleName);
	const imageStyleName = `decoupled_image_${imageStyle.width}_${imageStyle.height}`;

	return (imageFile) => {
		const {uri} = imageFile;
		return `${backendURL}sites/default/files/styles/${imageStyleName}/public/${encodeURI(uri)}`
	}
}