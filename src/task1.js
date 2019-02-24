'use strict';

const userData = ['Male', 'Ivan', 'Ivanov', 'Omsk', 'Russia', 19, 'Batman', 'Iron Man', 'Scrubs'];
const [, firstName, lastName, , , age = null, ...films] = userData;
console.log(`firstName: ${firstName} \nlastName: ${lastName} \nage: ${age} \nfav.films: ${films}`);