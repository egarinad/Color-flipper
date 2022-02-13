const ran = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E",
    "F"];

const button = document.querySelector('.bg__button');
const col = document.querySelector('.bg__name');

button.addEventListener('click', () => {
    let ranColor = "#";
    for (let i = 0; i < 6; i++) {
        ranColor += ran[getNum()];
    }
    document.body.style.backgroundColor = ranColor;
    col.innerText = ranColor;
})

function getNum() {
    return Math.floor(Math.random() * ran.length);
}

