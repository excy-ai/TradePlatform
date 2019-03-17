'use strict';

const uuid = require('uuid/v4');

module.exports = class User {
    constructor({firstName, lastName, password, email}) {
        this._id = uuid();
        this._inventoryId = uuid();
        this._firstName = firstName;
        this._lastName = lastName;
        this._password = password;
        this._email = email;
    }

    set firstName(value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    set password(value) {
        this._password = value;
    }

    set email(value) {
        this._email = value;
    }

    // function validateEmail(email) {
    //     var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return reg.test(String(email).toLowerCase());
    // }

    get id() {
        return this._id;
    }

    get inventoryId() {
        return this._inventoryId;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get password() {
        return this._password;
    }

    get email() {
        return this._email;
    }
};
