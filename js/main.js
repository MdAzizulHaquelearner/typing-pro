
function handlerKeyboardBtnPress(keyPressed){
    // detect player which key pressed
    const playerPressed = keyPressed.key.toLowerCase();
   if(playerPressed === 'escape'){
    gameOver();
   }
// random alphabet which is
    const currentAlphabet = document.getElementById('current-alphabet')
    const displayAlphabet = currentAlphabet.innerText.toLowerCase();
    // console.log('here show this word', displayAlphabet);
    // matching to player press and current random alphabet
    if(playerPressed === displayAlphabet){
        removeBackgroundColor(displayAlphabet)
        continueGame();
        const currentScoreValue  =  getTextElementValueById('current-score')
        const updatedScore = currentScoreValue + 1;
        setTextElementValueById('current-score',updatedScore)
        // getScore('current-score')
        // update the score
    //     // 1. get current score element value
    //     const currentScoreElement = document.getElementById('current-score');
    //     const currentScoreText = currentScoreElement.innerText;
    //     const currentScoreValue = parseInt(currentScoreText)
    //     // increment the score
    //     const newScoreIncrement = currentScoreValue + 1;
    //     // show the new score when press right 
    //    currentScoreElement.innerText = newScoreIncrement;
    }else{
    
        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife -1;
    setTextElementValueById('current-life',updateLife);

    if(updateLife === 0 ){

        gameOver();
    //    const playGround = document.getElementById('play-ground');
    //    playGround.classList.add('hidden');
    //    const scoreSection = document.getElementById('score-section');
    //    scoreSection.classList.remove('hidden')
    }
 
        // getLifeScore('life-score')
        // const currentLifeElement = document.getElementById('life-score');
        // const currentLifeInnerText = currentLifeElement.innerText;
        // const currentLifeInnerValue = parseInt(currentLifeInnerText);
        // // decrement life 
        // const newLifeScore = currentLifeInnerValue - 1;
        // // display new life score
        // currentLifeElement.innerText = newLifeScore;
    }
};
//keyBoard key capture 
document.addEventListener('keyup', handlerKeyboardBtnPress)

function continueGame(){
    // generate random alphabet
   const alphabet = getRandomAlphabet();
   // set the alphabet in display [show it]
   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;
   // set key press background color
   setBackgroundColor(alphabet);
}

// start page
function startGame(){
    // hide every thing show only play ground
    hideElementByIdToPage('home-section')
    hideElementByIdToPage('score-section')
    showElementByIdToPage('play-ground')
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score',0)
    continueGame()
}

function gameOver(){
        // get the final score
hideElementByIdToPage('play-ground');
showElementByIdToPage('score-section');
const lastScore = document.getElementById('current-score').innerText;
setTextElementValueById('last-score',lastScore);
// clear the last selected key highlighted
  const lastCurrentAlphabet = getElementTextById('current-alphabet');
 removeBackgroundColor(lastCurrentAlphabet)
}