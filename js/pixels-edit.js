// const qrFilters = ['horizontal_lines', 'extreme_offset_blue', 'extreme_offset_green', 'offset_green', 'extra_offset_blue', 'extra_offset_red', 'extra_offset_green', 'extreme_offset_red', 'specks_redscale', 'eclectic', 'pane', 'diagonal_lines', 'green_specks', 'casino', 'yellow_casino', 'green_diagonal_lines', 'offset', 'offset_blue', 'neue', 'sunset', 'specks', 'wood', 'lix', 'ryo', 'bluescale', 'solange', 'evening', 'crimson', 'teal_min_noise', 'phase', 'dark_purple_min_noise', 'coral', , 'incbrightness2', 'invert', 'sat_adj', 'lemon', 'pink_min_noise', 'frontward', 'vintage', 'perfume', 'serenity', 'pink_aura', 'haze', 'cool_twilight', 'blues', 'horizon', 'mellow', 'solange_dark', 'solange_grey', 'zapt', 'eon', 'aeon', 'matrix', 'cosmic', 'min_noise', 'red_min_noise', 'matrix2', 'purplescale', 'radio', 'twenties', 'ocean', 'a', 'pixel_blue', 'greyscale', 'grime', 'redgreyscale', 'retroviolet', 'greengreyscale', 'warmth', 'green_med_noise', 'green_min_noise', 'blue_min_noise', 'rosetint', 'purple_min_noise']

const qrFilters = ['eclectic', 'sunset', 'wood', 'crimson', 'phase', 'coral', 'darkify', 'incbrightness', 'lemon', 'vintage', 'perfume', 'serenity', 'pink_aura', 'haze', 'mellow', 'solange_grey', 'purplescale', 'radio', 'twenties', 'ocean', 'a', 'pixel_blue', 'greyscale', 'grime', 'redgreyscale', 'retroviolet', 'greengreyscale', 'warmth', 'rosetint']

// // Select the image you wish to filter
var img = document.getElementById("img")




// document.querySelector('#trigger-filter-preset').addEventListener('click', () => {
//     const canvas = qrImage.children[0]
//     pixelsJS.filterImg(canvas, "twenties");
// })

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