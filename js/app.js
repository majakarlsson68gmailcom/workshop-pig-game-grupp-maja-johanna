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
// const diceEl = document.querySelector(".dice");
// Behövs inte längre för 2 tärningar

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

    player1Panel.classList.remove("winner");
    player2Panel.classList.remove("winner", "active");
    player1Panel.classList.add("active");

    player1Name.textContent = "Spelare 1";
    player2Name.textContent = "Spelare 2";

}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
    if (!isPlaying) return;

    // Slumpa båda tärningarna
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Visa rätt tärningsbilder
    dice1.src = `img/dice-${randomNumber1}.png`;
    dice2.src = `img/dice-${randomNumber2}.png`;

    // Om någon tärning visar 1 → byt spelare
    if (randomNumber1 === 1 || randomNumber2 === 1) {
        switchPlayer();
    } else {
        // Lägg ihop tärningarna och lägg till i omgångspoängen
        roundScore += randomNumber1 + randomNumber2;

        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
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
    if(!isPlaying) return;

    scores[activePlayer] += roundScore;

    player1Score.textContent = scores[0];
    player2Score.textContent = scores[1];

    if(scores[activePlayer] >= WINNING_SCORE){
        isPlaying = false;
        const winnerPanel = activePlayer === 0 ? player1Panel : player2Panel;

       document.querySelector(`#name-${activePlayer}`).textContent = "Vinnare!"

        winnerPanel.classList.add("winner");
        winnerPanel.classList.remove("active");
    } else {
        switchPlayer();
    }

}



// ---------- 4. Händelser ----------

init();

holdBtn.addEventListener("click", holdScore)
newGameBtn.addEventListener("click", init)
rollBtn.addEventListener("click", rollDice);