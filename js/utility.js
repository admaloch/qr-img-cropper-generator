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