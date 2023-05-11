const luas = document.querySelector('section');
const btn = document.querySelector('.button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {
    const r = Math.round(Math.random()*255 + 1);
    const g = Math.round(Math.random()*255 + 1);
    const b = Math.round(Math.random()*255 + 1);
    luas.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
    btn.classList.toggle('click');
})