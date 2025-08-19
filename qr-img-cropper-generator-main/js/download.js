const downloadButton = document.querySelector("#download-qr");
downloadButton.addEventListener("click", () => {
	const options = {
	  backgroundColor: "transparent",
	};
	html2canvas(qrImage, options).then((canvas) => {
	  const dataUrl = canvas.toDataURL("image/png");
	  const img = new Image();
	  img.src = dataUrl;
	  img.onload = () => {
		const tempCanvas = document.createElement("canvas");
		tempCanvas.width = img.width;
		tempCanvas.height = img.height;
		const context = tempCanvas.getContext("2d");
		context.filter = getComputedStyle(qrImage).filter;
		context.drawImage(img, 0, 0);
		const filteredDataUrl = tempCanvas.toDataURL("image/png");
		saveAs(filteredDataUrl, "qr-image.png");
	  };
	});
  });