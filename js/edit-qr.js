let qrUrl = 'https://www.floridamemory.com/'
let qrImg;

const updateRangeSetting = (id, value) => {
    const root = document.documentElement;

    if (id === 'qr-size') {
        qrImage.style.width = `${value}px`;
        qrImage.style.height = `${value}px`;
        const mode1Btn = document.querySelector('#mode-1')
        if (mode1Btn.classList.contains('active')) {
            console.log('it is active')
            root.style.setProperty('--cropAmount', (value * -.071) + 'px');
        }
    } else if (id === 'border-size-input') {
        qrImage.style.borderWidth = `${value}px`;
    } else {
        qrImage.style.borderRadius = `${value}px`;
    }
}

// listener for main settings range inputs
const qrImage = document.getElementById('qr-image');
const rangeInputs = document.querySelectorAll('.main-settings-range')
rangeInputs.forEach(input => {
    input.addEventListener('input', () => {
        updateRangeSetting(input.id, input.value)
        updateRangeText(input, input.value)
    })
})

const updateRangeText = (item, value) => {
    const textValLocation = item.previousElementSibling.children[1];
    const sizeType = document.querySelector('#size-type')

    if (item.id === 'qr-size' && sizeType.value !== 'px') {
        if (sizeType.value === 'inches') {
            textValLocation.innerText = `${pxToInch(parseInt(value))}"`;
        } else {
            textValLocation.innerText = `${pxToCM(parseInt(value))}cm`;
        }
    } else {
        textValLocation.innerText = `${parseInt(value)}px`;
    }
}

document.querySelector('#size-type').addEventListener('change', () => {
    const sizeRange = document.querySelector('#qr-size');
    const currSize = sizeRange.value;
    updateRangeText(sizeRange, currSize);
});

const resetMainRangeBtns = document.querySelectorAll('.reset-main-item');
resetMainRangeBtns.forEach(item => {
    item.addEventListener('click', () => {
        const input = item.closest('.main-range-input').children[1];
        input.value = input.defaultValue;
        const defaultVal = input.defaultValue;
        updateRangeSetting(input.id, defaultVal);
        updateRangeText(input, defaultVal);
    })
})

// listener for url input
const qrUrlInput = document.querySelector('#qr-url-input');
qrUrlInput.addEventListener('input', async (e) => {
    let url = e.target.value;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url; // Prepend default protocol if missing
    }
    let errorIcon = document.querySelector('#url-error-icon')
    if (url.length < 119) {
        errorIcon.style.display = 'none'
        qrUrlInput.classList.remove('error-shadow')
        makeQArt(url, qrImg);
    } else {
        errorIcon.style.display = 'inline'
        qrUrlInput.classList.add('error-shadow')
    }
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
    const color = this.value;
    this.style.setProperty('--preview-color', color);
});

//border style select
const borderStyleSelect = document.querySelector('#border-style');
borderStyleSelect.addEventListener('change', (e) => {
    qrImage.style.borderStyle = e.target.value;
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

//reset all main section items
const resetAllRangeItems = () => {
    resetMainRangeBtns.forEach(item => {
        item.click()
    })
}

const resetColorInputs = (itemId) => {
    const colorInputItem = document.querySelector(itemId);
    colorInputItem.value = colorInputItem.defaultValue;
    if (itemId === '#qr-color-input') {
        qrImage.style.backgroundColor = colorInputItem.defaultValue;
    } else {
        qrImage.style.borderColor = colorInputItem.defaultValue;
    }
}

const triggerToggle = (buttonId, value) => {
    const item = document.getElementById(buttonId);
    if (value === 'true') {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
    item.setAttribute('aria-pressed', value);
    item.dispatchEvent(new Event('change'));
    const borderItems = document.querySelectorAll('.border-item')
    borderItems.forEach(item => item.classList.remove('disable'))
}

const resetMainEditSection = () => {
    resetAllRangeItems()
    document.querySelector('#mode-1').click()
    resetColorInputs('#qr-color-input');
    resetColorInputs('#qr-border-input');
    triggerEventFunc('#border-style', 'solid')
    triggerToggle('border-toggle', 'true')
}

document.querySelector('#reset-main-settings').addEventListener('click', () => {
    resetMainEditSection()
})
