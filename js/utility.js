// trigger change with js
const triggerEventFunc = (input, value) => {
	const e = new Event("change");
	const element = document.querySelector(input)
	element.value = value;
	element.dispatchEvent(e);
}

const makeQArt = (urlAddress, img_) => {
	new QArt({
		value: urlAddress,
		imagePath: img_,
		filter: 'color',
		version: 10,
		fillType: 'fill',
	}).make(document.getElementById('qr-image'));
}

// function pxToCM(sizeInPX) {
// 	const cmRes = sizeInPX * 2.54 / (96 * window.devicePixelRatio)
// 	const roundedRes = Math.round(cmRes * 100) / 100;
// 	return roundedRes
// };

// function pxToInch(sizeInPX) {
// 	const inchRes = (pxToCM(sizeInPX) * 0.393701)
// 	const roundedRes = Math.round(inchRes * 100) / 100;
// 	return roundedRes
// }


function pxToInch(sizeInPX) {
	const inchRes = sizeInPX / 96
	const roundedRes = Math.round(inchRes * 100) / 100;
	return roundedRes
}

function pxToCM(sizeInPX) {
	const cmRes = pxToInch(sizeInPX) * 2.54
	const roundedRes = Math.round(cmRes * 100) / 100;
	return roundedRes
};