// settings options
const settingsBtns = document.querySelectorAll('.settings-btn')
settingsBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		settingsBtns.forEach(button => button.classList.remove('active'))
		btn.classList.add('active')
		const mainSection = document.querySelector('#main-settings-section')
		const filterSection = document.querySelector('#filter-settings-section')
		if (btn.id === 'main-settings-btn') {
			mainSection.style.display = 'block'
			filterSection.style.display = 'none'
		} else {
			mainSection.style.display = 'none'
			filterSection.style.display = 'block'
		}
	})
})

//mode options
const modeBtns = document.querySelectorAll('.mode-btn')
modeBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		modeBtns.forEach(button => button.classList.remove('active'))
		btn.classList.add('active')
		const root = document.documentElement;
		const sizeRangeValue = document.querySelector('#qr-size').value
		if (btn.id === 'mode-1') {
			root.style.setProperty('--cropAmount', (sizeRangeValue * -.071) + 'px');
		} else {
			root.style.setProperty('--cropAmount', '0px');
		}
	})
})

//reset all qr settings
const resetAllQrSettings = () => {
	resetMainEditSection()
	resetAllQrFilters()
	document.querySelector('#main-settings-btn').click()
	document.querySelector('#reset-crop-btn').click()
	document.querySelector('#qr-url-input').value = ''
	qrUrl = 'https://www.floridamemory.com/'
	makeQArt(qrUrl, qrImg)
}

document.querySelector('#reset-all-qr').addEventListener('click', () => {
	resetAllQrSettings()
})


