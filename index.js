// // Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
// };

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);
// const name = ["Ada", "Brendan", "Ali"];

// function writeCards(name) {
//     for (let i = 0; i < name.length; i++) {
//         console.log(`Thank you, ${name[i]}, for the wonderful birthday gift!`);
//         debugger;
//     }
//     return name;
// }

// writeCards(names);

const names = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        names.splice(i, 1, `Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return names;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

// let num = 10;

function countDown(x) {
    while (x >= 0) {
        console.log(x);
        x--
    }
}

countDown(10);