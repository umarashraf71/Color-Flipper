const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 

const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');




btn.addEventListener('click', function(){

    let hexCode = "#";

    for(let i=0; i<6; i++)
    {
        hexCode += hex[randomNumber()];
    }

    colorName.innerText = hexCode;
    document.body.style.background = hexCode;

});


function randomNumber() {

    $random = Math.floor(Math.random() * hex.length);
    return $random;

}