'use strict';
const uuid = require('uuid/v4');

module.exports = class Item {
    constructor({name, description, category, pic, masterId}) {
        this._id = uuid();
        this._masterId = masterId;
        this._name = name;
        this._description = description;
        this._category = category;
        this._pic = pic;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get category() {
        return this._category;
    }

    get pic() {
        return this._pic;
    }

    get masterId() {
        return this._masterId;
    }

    set masterId(newMasterId) {
        this._masterId = newMasterId;
    }

};