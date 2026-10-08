// =============================================
// Grisspelet
// =============================================


// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0];       // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0;        // Omgångspoäng för den aktiva spelaren
let activePlayer = 0;      // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true;      // Blir false när någon har vunnit


// ---------- 2. Element i DOM:en ----------
// Spelare 1
const player1RoundScore = document.querySelector("#current-0");
const player1Score =document.querySelector("#score-0");

// Spelare 2
const player2RoundScore = document.querySelector("#current-1");
const player2Score =document.querySelector("#score-1");

// Knappar
const newGameBtn = document.querySelector(".btn-new");
const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");

// Score
const finalScore = document.querySelector(".final-score");


// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {

}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);

}


// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {

}


// ---------- 4. Händelser ----------

init();
