'use strict';

const userProfile = {
    gender: 'Male',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    location: {
        city: 'Omsk',
        country: 'Russia'
    },
    age: 19,
    films: ['Batman', 'Iron Man', 'Scrubs']
};
const {firstName: name, lastName: secondName, location: {city: currentCity = "Unknown City"}, age = null, films = []} = userProfile;

console.log(`User:\nname: ${name}\nsecondName: ${secondName}\ncurrentCity: ${currentCity}\nage: ${age}\nfav.films: ${films}`);