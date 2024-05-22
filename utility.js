// trigger change with js
const triggerEventFunc = (input, value) => {
    const e = new Event("change");
    const element = document.querySelector(input)
    element.value = value;
    element.dispatchEvent(e);
}

