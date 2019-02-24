'use strict';


function print(arr = [], separator = '-') {
    console.log(arr.join(separator));
}

print([1, 2, 3], ',');
print([1, 2, 3]);
print();

const currentTime = new Date();

function printMessage(message, date = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds()) {
    console.log(`${date} ${message}`);
}

printMessage("hello");
printMessage("hello", "12:40:04");

function exclude(arr, ...ex) {
    return arr.filter(item => {
        for (let i = 0; i < ex.length; i++) {
            if (item === ex[i]) {
                return false;
            }
        }
        return true;
    });
}

console.log(exclude([1, 2, 3], 1));
console.log(exclude([1, 2, 3], 1, 2));
console.log(exclude([1, 2, 3], 1, 2, 3));

const user = {
    name: 'Ivan',
    age: 18
};

function printUser({name = "Unknown Name", age:years = null} = {}) {
    console.log(name, years);
}
printUser(user);
printUser({ name: 'Ivan' });
printUser({ age: 19 });
printUser({});
printUser();