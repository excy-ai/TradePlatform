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
        while (this.gamefield.hasEmptyCells()) {
            let cellSetted = false;
            while (!cellSetted) {
                cell = readlineSync.question("Your turn. Select cell(x,y):");
                split = cell.split(" ");
                x = split[0];
                y = split[1];
                if (x >= this.gamefield.field.length || y >= this.gamefield.field[x].length || x < 0 || y < 0) {
                    CellOutOfRangeError.what();
                } else if (this.gamefield.field[x][y] === ' ') {
                    this.gamefield.field[x][y] = 'X';
                    cellSetted = true;
                } else {
                    CellIsNotEmptyError.what();
                }
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

            this.printGameField();
        }

    };
}


helloMsg();
var name = readlineSync.question("Set your name, please: ");
var gamer = new Player(name);
var field = new GameField(3, 3);
var game = new Game(gamer, field);
game.printGameField();
game.run();