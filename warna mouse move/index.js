const warna = document.querySelector('.warna');
warna.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    warna.style.backgroundColor = 'rgb('+ xPos +','+ yPos +','+ 255 +')';
    warna.style.cursor = 'pointer';
});