const quotes = [
    "Self-care is not selfish. You cannot serve from an empty vessel.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
]
// you can add more quotes here!

const getQuote = document.getElementById("quote");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click",generateQuote());

function generateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    getQuote.textContent=quotes[randomIndex]
}