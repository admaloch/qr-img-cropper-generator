// settings options
document.querySelectorAll(".settings-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".settings-btn")
      .forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
    const mainSection = document.querySelector("#main-settings-section");
    const filterSection = document.querySelector("#filter-settings-section");
    if (btn.id === "main-settings-btn") {
      mainSection.style.display = "block";
      filterSection.style.display = "none";
    } else {
      mainSection.style.display = "none";
      filterSection.style.display = "block";
    }
  });
});

//mode options
document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".mode-btn")
      .forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
    const root = document.documentElement;
    const sizeRangeValue = document.querySelector("#qr-size").value;
    if (btn.id === "mode-1") {
      root.style.setProperty("--cropAmount", "0px");
    } else {
      root.style.setProperty("--cropAmount", sizeRangeValue * -0.071 + "px");
    }
  });
});

//default qr set to mode 1 on page load
document.querySelector("#mode-1").click();

//reset all qr settings
const resetAllQrSettings = () => {
  resetMainEditSection();
  resetAllQrFilters();
  document.querySelector("#main-settings-btn").click();
  document.querySelector("#reset-crop-btn").click();
  document.querySelector("#qr-url-input").value = "";
  qrUrl = "https://www.floridamemory.com/";
  makeQArt(qrUrl, qrImg);
};

document.querySelector("#reset-all-qr").addEventListener("click", () => {
  resetAllQrSettings();
});

const updateImageCropOnWidthChange = () =>
  document.querySelector("#reset-crop-btn").click();

const updateQrSizeOnWidthChange = () => {
  const rangeInput = document.getElementById("qr-size");

  if (window.innerWidth > 400) {
    rangeInput.value = 325;
  } else {
    rangeInput.value = 215;
  }
  rangeInput.dispatchEvent(new Event("input"));
};

// Listen for width resize 
window.addEventListener("resize", updateImageCropOnWidthChange);
window.addEventListener("resize", updateQrSizeOnWidthChange);

// run on page load
updateImageCropOnWidthChange();
updateQrSizeOnWidthChange();
