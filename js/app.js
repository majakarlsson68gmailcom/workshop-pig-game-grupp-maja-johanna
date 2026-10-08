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
const player1Name = document.querySelector("#name-0");
const player1Panel = document.querySelector(".player-0-panel"); // pga class winner och active sitter här
const player1RoundScore = document.querySelector("#current-0");
const player1Score =document.querySelector("#score-0");

// Spelare 2
const player2Name = document.querySelector("#name-1");
const player2Panel = document.querySelector(".player-1-panel");
const player2RoundScore = document.querySelector("#current-1");
const player2Score =document.querySelector("#score-1");

// Knappar
const newGameBtn = document.querySelector(".btn-new");
const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");

// Dice
const dice1 = document.querySelector("#dice-1");
const dice2 = document.querySelector("#dice-2");

// Score
const finalScore = document.querySelector(".final-score");


// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {
    // Noll ställa alla värden;
    scores = [0, 0]; 
    roundScore = 0; 
    isPlaying = true; 
    activePlayer = 0;   

    player1RoundScore.textContent = roundScore;
    player1Score.textContent = scores[0];

    player2RoundScore.textContent = roundScore;
    player2Score.textContent = scores[1];

}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
    if (!isPlaying) return;

    // Slumpa tärning
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log("Tärningen visar:", randomNumber);

    // Visa rätt tärningsbild
    diceEl.src = `img/dice-${randomNumber}.png`;

    // Om tärningen inte är 1 → lägg till i omgångspoängen
    if (randomNumber !== 1) {
        roundScore += randomNumber;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    } else {
        switchPlayer();
    }
}

// SPEL-2: Byter aktiv spelare
function switchPlayer() {
    // Nollställ den nuvarande spelarens omgångspoäng i UI
    document.getElementById(`current-${activePlayer}`).textContent = 0;

    // Nollställ omgångspoängen i datan
    roundScore = 0;

    // Byt spelare
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Flytta active-klassen
    player1Panel.classList.toggle("active");
    player2Panel.classList.toggle("active");
}

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}



// ---------- 4. Händelser ----------

init();

rollBtn.addEventListener("click", rollDice);