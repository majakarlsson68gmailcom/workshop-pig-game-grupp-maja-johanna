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
// Tärningen (saknades!)
const diceEl = document.querySelector(".dice");

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
    if (!isPlaying) return;

    // 1. Slumpa tärning
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log("Tärningen visar:", randomNumber);

    // 2. Visa tärningen
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${randomNumber}.png`;

    // 3. Om tärningen inte är 1 → lägg till i roundScore
    if (randomNumber !== 1) {
        roundScore += randomNumber;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    } 
    // 4. Om tärningen är 1 → byt spelare
    else {
        switchPlayer();
    }
}

// SPEL-2: Byter aktiv spelare
function switchPlayer() {
    // Nollställ omgångspoängen i UI
    document.getElementById(`current-${activePlayer}`).textContent = 0;

    // Nollställ omgångspoängen i datan
    roundScore = 0;

    // Byt spelare: 0 → 1 eller 1 → 0
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Flytta den röda pricken (active-klassen)
    player0El.classList.toggle("active");
    player1El.classList.toggle("active");
}

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {

}


// ---------- 4. Händelser ----------

init();

rollBtn.addEventListener("click", rollDice);