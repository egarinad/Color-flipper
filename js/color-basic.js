const colors = ["green", "red", "blue", "rgba(133,122,200)", "#f15025"];


const button = document.querySelector('.bg__button');
const col = document.querySelector('.bg__name');

button.addEventListener('click', () => {
    const randnum = getNum();
    document.body.style.backgroundColor = colors[randnum];
    col.innerText = colors[randnum];
    // сol.style.backgroungColor = colors[random]; why? 
})

function getNum() {
    return Math.floor(Math.random() * colors.length);
}

