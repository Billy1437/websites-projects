const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i")

let foodX, foodY;
let snakeX =5, snakeY =10;
let velocityX=0, velocityY=0;
let snakeBody = [];
let gameOver = false;
let setIntervalValid;
let score =0;
//get high score from local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`



const changefoodPosition = () => {
    //randon 0-30
    foodX = Math.floor(Math.random() *30) +1;
    foodY = Math.floor(Math.random() *30) +1;
}
const handleGameOver = () =>{
    clearInterval(setIntervalValid)
    alert ("Game Over !")
    location.reload()
}

const changeDirection = (e) => {
    // change velocity based on key press
    if(e.key === "ArrowUp" && velocityY !=1){
        velocityX =0;
        velocityY = -1;
    }
    else if(e.key === "ArrowDown" && velocityY != -1){
        velocityX =0;
        velocityY = 1;
    }
    else if(e.key === "ArrowLeft" && velocityX != 1 ){
        velocityX =-1;
        velocityY = 0;
    }
    else if(e.key === "ArrowRight" && velocityX !=-1){
        velocityX =1;
        velocityY = 0;
    }
    
}
controls.forEach(key => {
    key.addEventListener("click",() => changeDirection({key: key.dataset.key}))
})

const initGame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;


    // checking if the sanke hit food
    if(snakeX === foodX && snakeY === foodY){
        changefoodPosition();
        snakeBody.push([foodX,foodY]); //pushing foood position to make an array
        score++;

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score",highScore)

        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`

        
    }

    for(let i=snakeBody.length -1 ;i>0;i--){
        // shifting forward the values of the elements in the snake body by one
        snakeBody[i] = snakeBody [i-1];
    }

    snakeBody[0] = [snakeX,snakeY]; //setting the first element of snake body to current snake position
    
    //update the snake's head position
    snakeX += velocityX;
    snakeY += velocityY;

    // game over
    if(snakeX <=0 || snakeX > 30 || snakeY <= 0 || snakeY >30){
        // console.log("Game Over")
        gameOver = true;
    }

    for(let i =0; i< snakeBody.length;i++){
        // add div for each part of snake
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        //checking if the snake head hit body, then game over
        if(i !== 0 && snakeBody[0][1] === snakeBody [i][1] && snakeBody [0][0] === snakeBody[i][0]){
            gameOver = true;
        }

    }

    playBoard.innerHTML = htmlMarkup;

}
changefoodPosition();
 setIntervalValid = setInterval(initGame,125);

document.addEventListener("keydown", changeDirection)


