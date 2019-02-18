'use strict';
var readlineSync = require('readline-sync');


var helloMsg = function () {
    console.log("It's a tic-tac-toe game");
    console.log("rules:\nYou always play for crosses \nYou always go first \n3x3 cells field");
};

function Player(name) {
    this.name = name;
}

function GameField(n, m) { //todo: make setter for gamefield cell to work with exceptions
    this.field = [];
    for (let i = 0; i < n; i++) {
        this.field[i] = [];
        for (let j = 0; j < m; j++) {
            this.field[i][j] = ' ';
        }
    }
    this.hasEmptyCells = function () {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (this.field[i][j] === ' ') {
                    return true;
                }
            }
        }
        return false;
    };
}

var CellIsNotEmptyError = { //todo: make exception
    what: function () {
        console.log("Cannot set value for cell X Y. Cell is not empty.")
    }
};

var CellOutOfRangeError = {
    what: function () {
        console.log('Cannot set value for cell X Y. Cell is out of the field range.');
    }
};

function Game(player, gamefield) {
    this.player = player;
    this.gamefield = gamefield;
    this.printGameField = function () {
        let cntr = 0;
        for (let i = 0; i < this.gamefield.field.length; i++) {
            let currLine = '';
            for (let j = 0; j < this.gamefield.field[i].length; j++) {
                cntr++;
                currLine += "[" + this.gamefield.field[i][j] + "]"
            }
            console.log(currLine);
            currLine = '';
        }
    };
    this.run = function () {
        let x, y;
        let cell;
        let split;
        let endGameFlag = false
        while (this.gamefield.hasEmptyCells() && !endGameFlag) {
            let cellSetted = false;
            while (!cellSetted) {
                cell = readlineSync.question("Your turn. Select cell(x,y):");
                split = cell.split(" ");
                x = split[0];
                y = split[1];
                if (x === undefined || y === undefined || x >= this.gamefield.field.length || y >= this.gamefield.field[x].length || x < 0 || y < 0) {
                    CellOutOfRangeError.what();
                } else if (this.gamefield.field[x][y] === ' ') {
                    this.gamefield.field[x][y] = 'X';
                    cellSetted = true;
                } else {
                    CellIsNotEmptyError.what();
                }
            }
            if(this.isPlayerWon()){
                endGameFlag = true;
            }
            if (this.gamefield.hasEmptyCells()) {
                cellSetted = false;
                while (!cellSetted) {
                    x = Math.random() * (this.gamefield.field.length) - 0.5;
                    x = Math.round(x);
                    y = Math.random() * (this.gamefield.field[x].length) - 0.5;
                    y = Math.round(y);
                    if (this.gamefield.field[x][y] === ' ') {
                        this.gamefield.field[x][y] = '0';
                        cellSetted = true;
                    }
                }
            }
            if(this.isBotWon()){
                endGameFlag = true;
            }
            this.printGameField();
        }
        if(endGameFlag){
            if(this.isPlayerWon()){
                console.log(this.player.name + " won!");
            } else {
                console.log("bot won.")
            }
        }
    };
    this.isPlayerWon = function () {
        return (this.gamefield.field[0][0]+this.gamefield.field[0][1]+this.gamefield.field[0][2])==='XXX' ||
            (this.gamefield.field[1][0]+this.gamefield.field[1][1]+this.gamefield.field[1][2])==='XXX'||
            (this.gamefield.field[2][0]+this.gamefield.field[2][1]+this.gamefield.field[2][2])==='XXX'||
            (this.gamefield.field[0][0]+this.gamefield.field[1][0]+this.gamefield.field[2][0])==='XXX'||
            (this.gamefield.field[0][1]+this.gamefield.field[1][1]+this.gamefield.field[2][1])==='XXX'||
            (this.gamefield.field[0][2]+this.gamefield.field[1][2]+this.gamefield.field[2][2])==='XXX'||
            (this.gamefield.field[0][0]+this.gamefield.field[1][1]+this.gamefield.field[2][2])==='XXX'||
            (this.gamefield.field[0][2]+this.gamefield.field[1][1]+this.gamefield.field[2][0])==='XXX'
    };
    this.isBotWon = function () {
        return (this.gamefield.field[0][0]+this.gamefield.field[0][1]+this.gamefield.field[0][2])==='000' ||
            (this.gamefield.field[1][0]+this.gamefield.field[1][1]+this.gamefield.field[1][2])==='000'||
            (this.gamefield.field[2][0]+this.gamefield.field[2][1]+this.gamefield.field[2][2])==='000'||
            (this.gamefield.field[0][0]+this.gamefield.field[1][0]+this.gamefield.field[2][0])==='000'||
            (this.gamefield.field[0][1]+this.gamefield.field[1][1]+this.gamefield.field[2][1])==='000'||
            (this.gamefield.field[0][2]+this.gamefield.field[1][2]+this.gamefield.field[2][2])==='000'||
            (this.gamefield.field[0][0]+this.gamefield.field[1][1]+this.gamefield.field[2][2])==='000'||
            (this.gamefield.field[0][2]+this.gamefield.field[1][1]+this.gamefield.field[2][0])==='000'
    };
    // this.isPlayerWon = function () { //NOT WORKING
    //     let temp1 = '';
    //     let temp2 = '';
    //     for (let i = 0; i < this.gamefield.length; i++) {
    //         for (let j = 0; j < this.gamefield[i].length; j++) {
    //             temp1 += this.gamefield[i][j];
    //             temp2 += this.gamefield[j][i];
    //         }
    //         if (temp1 === 'XXX' || temp2 === 'XXX') {
    //             return true;
    //         }
    //     }
    //     return (this.gamefield.field[0][0] + this.gamefield.field[1][1] + this.gamefield.field[2][2]) === 'XXX' ||
    //         (this.gamefield.field[0][2] + this.gamefield.field[1][1] + this.gamefield.field[2][0]) === 'XXX'
    // };
    // this.isBotWon = function () {
    //     let temp1 = '';
    //     let temp2 = '';
    //     for (let i = 0; i < this.gamefield.length; i++) {
    //         for (let j = 0; j < this.gamefield[i].length; j++) {
    //             temp1 += this.gamefield[i][j];
    //             temp2 += this.gamefield[j][i];
    //         }
    //         if (temp1 === '000' || temp2 === '000') {
    //             return true;
    //         }
    //         temp1 = '';
    //         temp2 = '';
    //     }
    //
    //     return (this.gamefield.field[0][0] + this.gamefield.field[1][1] + this.gamefield.field[2][2]) === '000' ||
    //         (this.gamefield.field[0][2] + this.gamefield.field[1][1] + this.gamefield.field[2][0]) === '000'
    // };
}


helloMsg();
var name = readlineSync.question("Set your name, please: ");
var gamer = new Player(name);
var field = new GameField(3, 3);
var game = new Game(gamer, field);
game.printGameField();
game.run();