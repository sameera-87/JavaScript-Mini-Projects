

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmitButton");
const resultElement = document.getElementById("resultElement");



mySubmit.onclick = function() {

    let age;

    age = Number(myText.value);


    if(age >= 18){
        resultElement.textContent = `You can enter to this website`;
    }
    else if(age < 0){
        resultElement.textContent = `Enter a valid age`;
    }
    else{
        resultElement.textContent = `You can't enter to this website`;
    }
}