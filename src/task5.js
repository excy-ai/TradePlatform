'use strict';
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const question = (number, rl) => () => new Promise(resolve => {
    rl.question(`Enter ${number} number:`, resolve)
});

const answers = {
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null
};

const setAnswer = name => answer => {
    answers[name] = answer;
    if(!isNumeric(answer)){
        throw new Error("bad number entered");
    }
};

const askFirst = question('first', rl);
const askSecond = question('second', rl);
const askThird = question('third', rl);
const askFourth = question('fourth', rl);
const askFifth = question('fifth', rl);

askFirst()
    .then(setAnswer('first'))
    .then(askSecond)
    .then(setAnswer('second'))
    .then(askThird)
    .then(setAnswer('third'))
    .then(askFourth)
    .then(setAnswer('fourth'))
    .then(askFifth)
    .then(setAnswer('fifth'))
    .then(() => {
        rl.close();
        let answer = null;
        let arr = Object.values(answers);
        for (let i = 0; i < arr.length; i++) {
            if (answer === null) {
                answer = parseInt(arr[i]);
            } else if (parseInt(arr[i]) > answer) {
                answer = parseInt(arr[i]);
            }
        }
        console.log(`biggest entered number is: ${answer}`);
    }).catch(function (reason) {
    rl.close();
    console.log(reason.toString());
});