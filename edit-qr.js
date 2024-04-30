



// listener for size
const qrImage = document.getElementById('qr-image');
// const qrSizeInput = document.querySelector('#qr-size')
// const borderSizeInput = document.querySelector('#border-size-input')
// const borderRadiusInput = document.querySelector('#border-radius-input')
const rangeInputs = document.querySelectorAll('.main-settings-range')

rangeInputs.forEach(input => {
    input.addEventListener('input', () => {

        const newVal = `${input.value}px`
        updateRangeSetting(input.id, newVal)
        updateRangeText(input, newVal)
    })
})

const updateRangeSetting = (id, value) => {
    if (id === 'qr-size') {
        qrImage.style.width = value;
        qrImage.style.height = value;
    } else if (id === 'border-size-input') {
        qrImage.style.borderWidth = value;
    } else {
        qrImage.style.borderRadius = value;
    }
}

const updateRangeText = (item, value) => {
    const textValLocation = item.previousElementSibling.children[1]
    textValLocation.innerText = value;
}

const resetRangeItems = document.querySelectorAll('.reset-main-item');
resetRangeItems.forEach(item => {
    item.addEventListener('click', () => {
        const input = item.closest('.main-range-input').children[1];
        input.value = input.defaultValue;
        const defaultVal = `${input.defaultValue}px`;
        updateRangeSetting(input.id, defaultVal);
        updateRangeText(input, defaultVal);
    })
})







// qrSizeInput.addEventListener('input', () => {
//     setQrSize(qrSizeInput.value)
// });

// const setQrSize = (value) => {
//     qrImage.style.width = `${value}px`
//     qrImage.style.height = `${value}px`
//     updateRangeInputText(qrSizeInput, value)
// }

// const restoreDefaultQrSize = () => {
//     setQrSize(qrSizeInput.defaultValue)
//     qrSizeInput.value = qrSizeInput.defaultValue;
// }

// document.querySelector('#reset-size').addEventListener('click', () => restoreDefaultQrSize())

// restoreDefaultQrSize()

// //border size input

// borderSizeInput.addEventListener('change', (e) => {
//     qrImage.style.borderWidth = `${borderSizeInput.value}px`
// });

// //border radius input

// borderRadiusInput.addEventListener('change', (e) => {
//     qrImage.style.borderRadius = `${borderRadiusInput.value}px`
// });





















// listener for url input
let qrUrl;
const qrUrlInput = document.querySelector('#qr-url-input');
qrUrlInput.addEventListener('input', (e) => {
    qrUrl = e.target.value;
});

//qr color input
const qrColorVal = document.querySelector('#qr-color-input');
qrColorVal.addEventListener('input', (e) => {
    qrColor = e.target.value;
    qrImage.style.backgroundColor = e.target.value;

});

//add border
const borderToggle = document.querySelector('#border-toggle')
const borderItems = document.querySelectorAll('.border-item')
borderToggle.addEventListener('click', (e) => {
    if (borderToggle.classList.contains('active')) {
        qrImage.style.borderStyle = 'none';
        borderItems.forEach(item => item.classList.add('disable'))
        document.querySelector('.link-border').classList.add('disable')
    } else {
        qrImage.style.borderStyle = 'solid';
        borderItems.forEach(item => item.classList.remove('disable'))
        document.querySelector('.link-border').classList.remove('disable')
    }
});

//qr border color
const qrBorderColor = document.querySelector('#qr-border-input');
qrBorderColor.addEventListener('input', (e) => {
    qrColor = e.target.value;
    qrImage.style.borderColor = e.target.value;
});

//border style select
const borderStyleSelect = document.querySelector('#border-style');
borderStyleSelect.addEventListener('change', (e) => {
    qrImage.style.borderStyle = e.target.value;
    console.log(e.target.value)
})



//link background to border color
const linkBgToBorderIcon = document.querySelector('.link-border')
linkBgToBorderIcon.addEventListener('click', (e) => {
    const borderColor = document.querySelector('#qr-border-input').value
    document.querySelector('#qr-color-input').value = borderColor
    qrImage.style.backgroundColor = borderColor;
});

//link border to bg color
const linkborderToBgIcon = document.querySelector('.link-background')
linkborderToBgIcon.addEventListener('click', (e) => {
    const bgColor = document.querySelector('#qr-color-input').value
    document.querySelector('#qr-border-input').value = bgColor
    qrImage.style.borderColor = bgColor;
});

