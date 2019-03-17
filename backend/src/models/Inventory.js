'use strict';

module.exports = class Item {
    constructor({userId, inventoryId}) {
        this._id = inventoryId;
        this._userId = userId;
        this._items = [];
    }

    addItem(item) {
        this._items.push(item);
    }

    get id() {
        return this._id;
    }

    get userId() {
        return this._userId;
    }

    get items() {
        return this._items;
    }
};
