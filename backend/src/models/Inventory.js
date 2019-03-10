'use strict';

module.exports = class Item {
    constructor({userId}) {

        this._userId = userId;
    }

    get userId() {
        return this._userId;
    }
};