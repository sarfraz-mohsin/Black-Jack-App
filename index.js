let firstCard = 5
let secondCard = 8

let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;

if(sum <21){
    console.log('Do you want to draw a card ?');
}

else if(sum ===21){
    console.log('You have won the game');
    hasBlackJack = true;
}

else{
    console.log('You have lost the game')
    isAlive = false;
}

console.log(isAlive)
console.log(hasBlackJack)