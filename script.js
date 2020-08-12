chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  const [tab] = tabs;
  // show title
  document.querySelector(".site-title").innerHTML = tab.title;
  
	// Show QR code
	const qr = document.querySelector(".qr");

	new QRCode(qr, {
		text: tab.url,
		width: 250,
		height: 250,
		colorDark: "#000",
		colorLight: "#ffffff",
	});
});
