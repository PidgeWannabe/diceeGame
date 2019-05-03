// Variable aléatoire entre 1 et 6
// + 1 pour éviter que le chiffre aléatoire s'arrondisse à 0
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
console.log(randomNumber1);
// Changement des valeurs des attributs des objets img en fonction du chiffre aléatoire
switch(randomNumber1){
  case 1:
    document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
  case 6:
    document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
    break;
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
console.log(randomNumber1);

switch(randomNumber2){
  case 1:
    document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
  case 6:
    document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");
    break;
}

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if(randomNumber1 = randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}else{
  document.querySelector("h1").innerHTML = "Refresh Me";
}
