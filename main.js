let getColor = () => {
    let randomNumber = Math.floor(Math.random()*16777215);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color').innerText = randomCode;
}


document.getElementById("generate").addEventListener('click',getColor)

getColor();

