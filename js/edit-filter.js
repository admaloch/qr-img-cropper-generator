
const filterInputs = document.querySelectorAll('.filter-item-input')

const filterVals = {
    "brightness": "100%",
    "saturate": "100%",
    "contrast": "100%",
    "invert": "0%",
    "grayscale": "0%",
    "sepia": "0%",
    "hue-rotate": "0deg",
    "blur": "0px",
}

//helper func to determine what css is being changed and how to define the val based on the id of hte item
const genCurrFilterCssVal = (id) => {
    let textValType;
    if (id === 'hue-rotate') {
        textValType = 'deg'
    } else if (id === 'blur') {
        textValType = 'px'
    } else {
        textValType = '%'
    }
    return textValType;
}


//listener for css filter input changes
filterInputs.forEach(filterInput => {
    filterInput.addEventListener('input', () => {
        const textVal = filterInput.previousElementSibling.children[1];
        let textValType = genCurrFilterCssVal(filterInput.id);
        const newVal = `${filterInput.value}${textValType}`;
        textVal.innerText = newVal;
        filterVals[filterInput.id] = newVal;
        qrImage.style.filter = updateFilterObj();
    })
})

//helper func to update teh filterVals obj of css filter values... loop is easier than a giant str template literal and allows for more seamless addeition of new css vals
const updateFilterObj = () => {
    let filterValStr = '';
    for (const filterVal in filterVals) {
        let newFilterVal = `${filterVal}(${filterVals[filterVal]}) `
        filterValStr += newFilterVal;
    }
    return filterValStr;
}



//listener when user clicks to reset individual
const resetFilterItems = document.querySelectorAll('.reset-filter-item')
resetFilterItems.forEach(item => {
    item.addEventListener('click', () => {
        const currInput = item.closest('.filter-info').nextElementSibling;
        const textValItem = item.closest('.filter-info').children[1];
        let textValType = genCurrFilterCssVal(currInput.id);
        let newCssVal = `${currInput.defaultValue}${textValType}`;
        currInput.value = currInput.defaultValue;
        textValItem.innerText = newCssVal;
        filterVals[currInput.id] = newCssVal;
        qrImage.style.filter = updateFilterObj();
    })
})

const resetAllQrFilters = () => {
    resetFilterItems.forEach(item => {
        item.click()
    })
}

const resetAllFilters = document.querySelector('#reset-all-filters')
resetAllFilters.addEventListener('click', () => {
    resetAllQrFilters()
})



