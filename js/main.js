var textArray = [
    'song1.ogg',
    'song2.ogg'
];
var randomNumber = Math.floor(Math.random()*textArray.length);

catName.setAttribute('src', textArray[randomNumber]);