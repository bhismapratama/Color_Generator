const all = document.querySelector('section');
const slide = document.querySelector('.slider');

const merah = document.querySelector('input[name = merah]')
merah.addEventListener('input', () => {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    all.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

const hijau = document.querySelector('input[name = hijau]')
hijau.addEventListener('input', () => {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    all.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

const biru = document.querySelector('input[name = biru]')
biru.addEventListener('input', () => {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    all.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})