// Here all variables will be created

const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let frames = 0;
const gravity = 0.1;

// pipes
let pipes = [];

let score = 0;
let diff = 1;
let requestId; // to stop videogame on crash

// audio
const audio = new Audio();
audio.src = '../audio/Battleship.ogg';
audio.loop = true;

// valore para hero
let dylanDefault = {
    vida: 3,
    status: 'pequeño', //pequeño, grande, rojo, special
    monedas: 0
}