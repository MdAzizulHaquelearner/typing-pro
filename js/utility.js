
// enter the game interface
function hideElementByIdToPage(element){
    const homeSection = document.getElementById(element);
       homeSection.classList.add('hidden')
  
};
function showElementByIdToPage(element){
    const playGroundSection = document.getElementById(element);
       playGroundSection.classList.remove('hidden')
}

// random alphabet
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
const alphabets = alphabetString.split('');

const randomNumbers = Math.random()*25;
const index= Math.round(randomNumbers);
const alphabet = alphabets[index];

return alphabet;

}
function setBackgroundColor(comingRandomAlphabet){
    const element = document.getElementById(comingRandomAlphabet);
    element.classList.add('bg-orange-400')
}

function removeBackgroundColor(comingRandomAlphabet){
    const element =document.getElementById(comingRandomAlphabet);
    element.classList.remove('bg-orange-400')

}
// ---------------------------------
// function getScore(elementById){
//     // find the  score element and the inner Value
//     const currentScoreText = document.getElementById(elementById);
//     const currentScoreValue = currentScoreText.innerText;
//     const currentScore = parseInt(currentScoreValue);
//     // increment ++ the score when right btn click
//     const newScore = currentScore + 1;
//     // show the new score 
//     currentScoreText.innerText = newScore;

// }

// function getLifeScore (elementById){
//     const getCurrentLifeScoreElement = document.getElementById(elementById);
//     const getLifeScoreText = getCurrentLifeScoreElement.innerText;
//     const lifeScore = parseInt(getLifeScoreText);
//     // decrement -- the score when wrong press
//     const lifeLoss = lifeScore - 1;
//     /// show the loss score to display
//     getCurrentLifeScoreElement.innerText = lifeLoss;
// }
// -----------------------------

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId){

    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}