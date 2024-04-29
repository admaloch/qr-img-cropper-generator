
// const triggerEventFunc = (input, value) => {
// 	const e = new Event("change");
// 	const element = document.querySelector(input)
// 	element.value = value;
// 	element.dispatchEvent(e);
// }

// listener for size
const qrImage = document.getElementById('qr-image');
const qrSizeInput = document.querySelector('#qr-size')
qrSizeInput.addEventListener('change', (e) => {
	qrImage.style.width = `${qrSizeInput.value}px`
	qrImage.style.height = `${qrSizeInput.value}px`
});

	qrImage.style.width = '280px'
	qrImage.style.height = '280px'


let qrUrl;
// listener for url input
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

//border size input
const borderSizeInput = document.querySelector('#border-size-input')
borderSizeInput.addEventListener('change', (e) => {
	qrImage.style.borderWidth = `${borderSizeInput.value}px`
});

//border radius input
const borderRadiusInput = document.querySelector('#border-radius-input')
borderRadiusInput.addEventListener('change', (e) => {
	qrImage.style.borderRadius = `${borderRadiusInput.value}px`
});

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




const makeQArt = (link, img_) => {
	new QArt({
		value: link,
		imagePath: img_,
		filter: 'color',
		version: 10,
		fillType: 'fill',
	}).make(document.getElementById('qr-image'));
}



$(function () {

	'use strict';

	var console = window.console || { log: function () { } };
	var $image = $('#image');
	var $download = $('#download');
	var $dataX = $('#dataX');
	var $dataY = $('#dataY');
	var $dataHeight = $('#dataHeight');
	var $dataWidth = $('#dataWidth');
	var $dataRotate = $('#dataRotate');
	var $dataScaleX = $('#dataScaleX');
	var $dataScaleY = $('#dataScaleY');
	var options = {
		aspectRatio: 1 / 1,
		preview: '.img-preview',
		crop: function (e) {
			$dataX.val(Math.round(e.x));
			$dataY.val(Math.round(e.y));
			$dataHeight.val(Math.round(e.height));
			$dataWidth.val(Math.round(e.width));
			$dataRotate.val(e.rotate);
			$dataScaleX.val(e.scaleX);
			$dataScaleY.val(e.scaleY);
		}
	};
	let qrDelay;

	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Cropper
	$image.on({
		'build.cropper': function (e) {
			// console.log(e.type);
		},
		'built.cropper': function (e) {
			// console.log(e.type);
		},
		'cropstart.cropper': function (e) {
			// console.log(e.type, e.action);
		},
		'cropmove.cropper': function (e) {
			// console.log(e.type, e.action);
		},
		'cropend.cropper': function (e) {
			// console.log(e.type, e.action);
		},
		'crop.cropper': function (e) {
			const genQrBtn = document.getElementById('gen-cropped-img');
			let clickOccurred = false;
			clearTimeout(qrDelay)
			qrDelay = setTimeout(() => {
				if (!clickOccurred) {
					console.log('qr click happened');
					genQrBtn.click();
					clickOccurred = true;
				}
			}, 100);
		},
		'zoom.cropper': function (e) {
			// console.log(e.type, e.ratio);
		}


	}).cropper(options);

	// Buttons
	if (!$.isFunction(document.createElement('canvas').getContext)) {
		$('button[data-method="getCroppedCanvas"]').prop('disabled', true);
	}

	if (typeof document.createElement('cropper').style.transition === 'undefined') {
		$('button[data-method="rotate"]').prop('disabled', true);
		$('button[data-method="scale"]').prop('disabled', true);
	}


	// // Download
	// if (typeof $download[0].download === 'undefined') {
	// 	$download.addClass('disabled');
	// }


	// Options
	$('.docs-toggles').on('change', 'input', function () {
		var $this = $(this);

		var name = $this.attr('name');
		var type = $this.prop('type');
		var cropBoxData;
		var canvasData;

		if (!$image.data('cropper')) {
			return;
		}

		if (type === 'checkbox') {
			options[name] = $this.prop('checked');
			cropBoxData = $image.cropper('getCropBoxData');
			canvasData = $image.cropper('getCanvasData');

			options.built = function () {
				$image.cropper('setCropBoxData', cropBoxData);
				$image.cropper('setCanvasData', canvasData);
			};
		} else if (type === 'radio') {
			options[name] = $this.val();
		}

		$image.cropper('destroy').cropper(options);







	});


	// Methods
	$('.docs-buttons').on('click', '[data-method]', function () {
		var $this = $(this);
		var data = $this.data();
		var $target;
		var result;

		if ($this.prop('disabled') || $this.hasClass('disabled')) {
			return;
		}

		if ($image.data('cropper') && data.method) {
			data = $.extend({}, data); // Clone a new one

			if (typeof data.target !== 'undefined') {
				$target = $(data.target);

				if (typeof data.option === 'undefined') {
					try {
						data.option = JSON.parse($target.val());
					} catch (e) {
						console.log(e.message);
					}
				}
			}

			if (data.method === 'rotate') {
				$image.cropper('clear');
			}

			result = $image.cropper(data.method, data.option, data.secondOption);



			if (data.method === 'rotate') {
				$image.cropper('crop');
			}

			switch (data.method) {
				case 'scaleX':
				case 'scaleY':
					$(this).data('option', -data.option);
					break;

				case 'getCroppedCanvas':
					if (result) {




						if (!$download.hasClass('disabled')) {
							$download.attr('href', result.toDataURL('image/jpeg'));
							const url = result.toDataURL('image/jpeg')
							// console.log(url)
							let newUrl = !qrUrl ? 'www.google.com' : qrUrl
							makeQArt(newUrl, url)
						}

					}

					break;
			}

			if ($.isPlainObject(result) && $target) {
				try {
					$target.val(JSON.stringify(result));
				} catch (e) {
					console.log(e.message);
				}
			}

		}
	});


	// Keyboard
	$(document.body).on('keydown', function (e) {

		if (!$image.data('cropper') || this.scrollTop > 300) {
			return;
		}

		switch (e.which) {
			case 37:
				e.preventDefault();
				$image.cropper('move', -1, 0);
				break;

			case 38:
				e.preventDefault();
				$image.cropper('move', 0, -1);
				break;

			case 39:
				e.preventDefault();
				$image.cropper('move', 1, 0);
				break;

			case 40:
				e.preventDefault();
				$image.cropper('move', 0, 1);
				break;
		}

	});


	// Import image
	var $inputImage = $('#inputImage');
	var URL = window.URL || window.webkitURL;
	var blobURL;

	if (URL) {
		$inputImage.change(function () {
			var files = this.files;
			var file;

			if (!$image.data('cropper')) {
				return;
			}

			if (files && files.length) {
				file = files[0];

				if (/^image\/\w+$/.test(file.type)) {
					blobURL = URL.createObjectURL(file);
					$image.one('built.cropper', function () {

						// Revoke when load complete
						URL.revokeObjectURL(blobURL);
					}).cropper('reset').cropper('replace', blobURL);
					$inputImage.val('');
				} else {
					window.alert('Please choose an image file.');
				}
			}
		});
	} else {
		$inputImage.prop('disabled', true).parent().addClass('disabled');
	}

	// let imgSrc = cropper.getCroppedCanvas({
	// 	width: img_w.value // input value
	// }).toDataURL();

	// console.log(options)

});




// save on click
// document.querySelector('.save').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	// get result to data uri
// 	let imgSrc = cropper.getCroppedCanvas({
// 		width: img_w.value // input value
// 	}).toDataURL();
// 	// remove hide class of img
// 	cropped.classList.remove('hide');
// 	img_result.classList.remove('hide');
// 	// show image cropped
// 	cropped.src = imgSrc;
// 	dwn.classList.remove('hide');
// 	dwn.download = 'imagename.png';
// 	dwn.setAttribute('href', imgSrc);
// 	console.log(dwn)
// });