'use strict';

module.exports = class User {
    constructor({firstName, lastName, password, email}) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._password = password;
        this._email = email;
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