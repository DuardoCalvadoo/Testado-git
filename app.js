let numberList = []
let max = 50;
let min = 1;
let secretNumber;
let tries;
newGame();


function showText(tag, text){
    let display = document.querySelector(tag);
    display.innerHTML = text;
}

function verifyNumber() {
    let numberChoosed = document.querySelector('input').value;
        if (Number(numberChoosed)== secretNumber){
        showText('h1', 'You win!');
        
        let triesname = tries > 1 ? 'tries' : 'try';
        let triesMesage = `You discovered the secret number in ${tries} ${triesname}`
        showText('p', triesMesage);
        document.getElementById('reiniciar').removeAttribute('disabled')


        }else{
            if(numberChoosed > secretNumber){
            showText('p', ' the secret number is minor');
            }else{
            showText('p', 'the secret number is bigger');
            }
            tries++
            cleanField()
        }

    }

function randowNumber(){
    let raffledNumber = Math.floor(Math.random() * (max - min + 1) + min);

if(numberList.length == max){
    numberList = [];
}

if (numberList.includes(raffledNumber)){
    console.log("equal")
    return randowNumber();
}else{
    numberList.push(raffledNumber)
    console.log(numberList)
    return raffledNumber;
}
}

function newGame(){
    secretNumber = randowNumber()
    cleanField()
    tries = 1;
    showText('h1', 'Secret Number game');
    showText('p', `Choose a number between ${min} and ${max}`);
   console.log(secretNumber);
   document.getElementById('reiniciar').setAttribute('disabled', true);
}
function cleanField(){
    let field = document.querySelector('input');
    field.value = '';
}