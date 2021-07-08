(function doPopup() {
    function generateQrCode(tabs) {
        const url = tabs[0].url;
        const size = Math.max(100, Math.min(1024, url.length))
        const padding = Math.max(10, Math.min(50, .08 * size));
        let canvas = document.getElementById('qrcode');
        canvas.style.padding = `${padding}px`;
        canvas.style.margin = 'auto';
        const qr = new QRious({
            element: canvas,
            size: size,
            value: url,
          });
    }

    browser.tabs.query({ active: true, currentWindow: true })
        .then(generateQrCode)
        .catch(console.error);
})();
