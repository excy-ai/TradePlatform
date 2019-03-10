'use strict';

module.exports = class Item {
    constructor({name, description, category, pic, masterId}) {
        this._name = name;
        this._description = description;
        this._category = category;
        this._pic = pic;
        this._masterId = masterId;
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