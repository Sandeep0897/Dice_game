var randomNumber1 = Math.random();
 var number = Math.floor(randomNumber1 * 6);
 number += 1;


// DICE1

 // if(number === 1){
 //   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
 // }else if(number === 2){
 //   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
 // }else if(number === 3){
 //   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
 // }else if(number === 4){
 //   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
 // }else if(number === 5){
 //   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
 // }else if(number === 6){
 //   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
 // }

 for(var i = 1; i <= 6; i++){
   if(number == i){
      document.querySelector(".img1").setAttribute("src", "images/dice" + i + ".png");
   }
 }

 // DICE2
 var randomNumber2 = Math.random();
  var number1 = Math.floor(randomNumber2 * 6);
  number1 += 1;

  for(var i = 1; i <= 6; i++){
    if(number1 == i){
       document.querySelector(".img2").setAttribute("src", "images/dice" + i + ".png");
    }
  }




 // if(number1 === 1){
 //   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
 // }else if(number1 === 2){
 //   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
 // }else if(number1 === 3){
 //   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
 // }else if(number1 === 4){
 //   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
 // }else if(number1 === 5){
 //   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
 // }else if(number1 === 6){
 //   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
 // }



 if(number > number1){
  document.querySelector("h1").innerHTML ="Player 1 wins!";
}else if (number < number1){
  document.querySelector("h1").innerHTML ="Player 2 wins!";
}else{
  document.querySelector("h1").innerHTML ="Draw!";
}
