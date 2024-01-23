var secret;
var count;
var usedNumbers = [];
var maxNumber = 5;

function verifier(){
    console.log(count);
    var userNumber = parseInt(document.getElementById('userValue').value);
    if(userNumber === secret){ //Check that both elements have the same value and type(e.g: int-int, not int-string)
        assignElementText('p',`Good job, that was the number!!! And you did on ${count} ${count == 1 ? 'time' : 'times'}`);
        document.getElementById('restart').removeAttribute('disabled')//Search the element and use the function to delete the attribute
    }
    else {
        if(userNumber > secret){
            assignElementText('p','Wrong, the secret number is lower');
        }
        else{
            assignElementText('p','Wrong, the secret number is higher');
        }
        count++;
        clearBox();
    };

}

function assignElementText(element, text){
    var elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

function secretNumberGen(){
    console.log(genNumber);
    console.log(usedNumbers);
    if(usedNumbers.length == maxNumber){
        assignElementText('p','You have used all the posible numbers');
        return 0;
    };
    var genNumber = Math.floor(Math.random()*maxNumber) + 1;
    if(usedNumbers.includes(genNumber)){
        return secretNumberGen();
    };
    usedNumbers.push(genNumber);
    return genNumber;
}

function startConditions(){
    assignElementText('h1', 'Secret number game');
    assignElementText('p', `Choose a number between 1 to ${maxNumber}: `);
    secret = secretNumberGen();
    console.log(`SN: ${secret}`);
    count = 1;
}

function clearBox(){
    document.querySelector('#userValue').value = '';
}

function restartGame(){
    clearBox();
    startConditions();
    document.getElementById('restart').setAttribute('disabled', 'true');
}

startConditions();