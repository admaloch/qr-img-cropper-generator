const qrFilters = ['eclectic', 'sunset', 'wood', 'crimson', 'phase', 'coral', 'darkify', 'incbrightness', 'lemon', 'vintage', 'perfume', 'serenity', 'pink_aura', 'haze', 'mellow', 'solange_grey', 'purplescale', 'radio', 'twenties', 'ocean', 'a', 'pixel_blue', 'greyscale', 'grime', 'redgreyscale', 'retroviolet', 'greengreyscale', 'warmth', 'rosetint']

// // Select the image you wish to filter
const img = document.getElementById("img")

const pixelSelect = document.querySelector('#pixel-js-select')

const createPixelsJsSelect = () => {
    for (let item of qrFilters) {
        const option = document.createElement('option')
        option.value = item;
        option.innerText = item;
        pixelSelect.append(option)
    }
}
createPixelsJsSelect();

pixelSelect.addEventListener('change', (e) => {
    // const canvas = qrImage.children[0]
    pixelsJS.filterImg(qrImage, e.target.value);
})