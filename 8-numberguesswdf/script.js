const minNum = document.querySelector(".minNum"),
      maxNum = document.querySelector(".maxNum"),
      getinput = document.querySelector("#guessnumber"),
      getBtn = document.querySelector("#btn"),
      message1 = document.querySelector(".message1"),
      message2 = document.querySelector(".message2"),
      getgameform = document.getElementById("gameform");


      let minNumValue = 0;
      let maxNumValue = 20;
      
      const winNum = randomNum(minNumValue,maxNumValue);
      let gameleft = 3;
      
      minNum.textContent = minNumValue;
      maxNum.textContent = maxNumValue;
      
      getBtn.addEventListener('click', function(e) {
          let guess = parseInt(getinput.value);
      
          e.preventDefault();
      
          if (guess < minNumValue || guess > maxNumValue || isNaN(guess)) {
                // message2.style.display = "block";
              // message2.textContent = `Please enter a number within the range of ${minNumValue} and ${maxNumValue}`;
              // message2.style.color = "red";

              setmessage2(`Please enter a number within the range of ${minNumValue} and ${maxNumValue}`,"red");
          }
          if(guess === winNum){
            gameover(true,`${winNum} is correct !! you won`);
            // getinput.disabled = true;

            // getinput.style.borderColor = "green";

            // // message1.textContent = `${winNum} is correct !! you won`;
            // // message1.style.color = "green";
            // setmessage1(`${winNum} is correct !! you won`,"green");
            

            // //play again
            // getBtn.value = "play again?"


          }else{
            gameleft -= 1;
            
            if(gameleft === 0){

              gameover(false,`Game Over! correct number is ${winNum}`);
            //     getinput.disabled = true;

            //     getinput.style.borderColor = "red";

            //     getinput.value = "";


            // setmessage1(`Game Over! correct number is ${winNum}`,"red");

    
            //     // message1.textContent = `Game Over! correct number is ${winNum}.`;
            //     // message1.style.color = "red";
                
    
            //     //play again
            //     getBtn.value = "play again?"

            }else{
                //continue game
                getinput.style.borderColor = "red";

                setmessage1(`${guess} is not correct, ${gameleft} games left`,"blue");

                // message1.textContent = `${guess} is not correct, ${gameleft} games left`;
                // message1.style.color = "blue";
                getinput.value = "";

                //autofocus getinput
                getinput.focus();
            }


          }

      });

      function setmessage1(msg,color){
        message1.textContent = msg;
        message1.style.color = color;
      }
      function setmessage2(msg,color){
        message2.textContent = msg;
        message2.style.color = color;

        setTimeout(function(){
          message2.textContent ="";
        },1200)

      }

      // gameover(true,"message")

      function gameover(won,msg){
        let color;
        won === true ? color ="green" : color = "red";

        //disabled
        getinput.disabled = true;
// bordercolor
        getinput.style.borderColor = color;
// message1
        setmessage1(msg,color);

        getBtn.value = "Play Again";

        getBtn.classList.add("playagain");

        
      }

      getgameform.addEventListener('mousedown',function(e){
        if(e.target.className === "btn playagain"){

          window.location.reload();
          // console.log("working")
        }
      });

      function randomNum(min,max){
        let getrdm = Math.floor(Math.random()* (max-min)+min);
        return getrdm;
      }

