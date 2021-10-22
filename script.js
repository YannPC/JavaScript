'use strict';


let RandomNumber = document.querySelector('#number');
//let inputNumber = document.querySelector('#guess_number').value;
let checkBtn = document.querySelector('#check_btn_myNumber');
var inputNumber = document.querySelector('#guess_number');
var display_error = document.querySelector('#error');
var display_message = document.querySelector('#title');

//for score
var my_score_display = document.querySelector('#score');
var my_highScore_display = document.querySelector('#highscore');
var my_score = 20;
var my_highScore = 0;


let my_random_guess_number;
let number ; 
let message;


//this will generate a number between 1-20
function getRandomNumber(){
     return Math.floor(Math.random()*20);
}

// this will input ours number
function getMyNumber(input){
       return input.value;   
}


checkBtn.addEventListener('click', (e)=>{
 e.preventDefault(); 

 let score = 0 //check an empty value
 
 if(inputNumber.value.length == 0){
    console.log('please input your number'); 
    display_error.textContent= 'Please input your number 1-20'  
     return;
 }

//check if great that 20 then return

if(inputNumber.value > 20){
    console.log('please input your number between 1-20'); 
    display_error.textContent= 'Your number should be between 1-20'  
     return;
 }

//    getRandomNumber();
  let my_random_guess_number = getRandomNumber(); 
  let my_number = getMyNumber(inputNumber)
  console.log(my_random_guess_number);
  console.log(my_number);
  
  RandomNumber.textContent = my_random_guess_number; //  to display random number on ours screen display screen 
 
  //check the whole logic
 check(my_random_guess_number,my_number ,score);
 
})


function check(my_random_guess_number, my_number, score){
    console.log('This is was my guess number ' + my_random_guess_number)
    console.log('This is was my inputted number ' + my_number);
    console.log('This is was my score number ' + score);
  
     
    if(my_random_guess_number == my_number) {
       return  win(score)
    } else {
    return lose(score)
    }
}

function win(score){
    console.log('you win congrats ' + score);
    display_message.classList.add('win');
    display_message.classList.remove('lose');
    display_message.textContent = "Correct Number";
    
    // can remove my_highScore and keep it to O
    //for displaying score
     let my_score = getMyNumber(score); 
    my_highScore = parseInt(my_highScore) + 1; //user Win so HighScore+1 
    my_score = 20; // user Win Score =20 as before

    console.log(my_highScore);
    console.log(my_score);

    //display my score
    my_highScore_display.textContent = my_highScore;
    my_score_display.textContent = my_score;
return score = score + 1 
}

function lose(score){
    console.log('you loose try again ' + score);
    display_message.classList.add('lose');
    display_message.classList.remove('win');
    display_message.textContent = "Wrong Guess";
    
    // you can remove and keep Score 20
    // for displaying score
    let my_high_score = getMyNumber(score); 
    my_highScore = parseInt(my_highScore);
    my_score = parseInt(my_score) - 1; //my score =20 will reduce everytimes you lose

    console.log(my_highScore);;
    console.log(my_score);

    //display my score
    my_highScore_display.textContent = my_highScore;
    my_score_display.textContent = my_score;

return score = score - 1
}

