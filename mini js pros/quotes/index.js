const quotes = [
    "If you do what you've always done, you'll get what you've always gotten. - Tony Robbins",
    "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night - William Blake",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "We can’t help everyone, but everyone can help someone. – Ronald Reagan",
    "Be the change you wish to see in the world. – Mahatma Gandhi",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The only true wisdom is in knowing you know nothing. – Socrates",
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    "If you want to go fast, go alone. If you want to go far, go together. – African Proverb",
]

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true){
   const randomIdx = Math.floor(Math.random() * quotes.length);

   if (usedIndexes.has(randomIdx)) continue;
   
   const quote = quotes[randomIdx];
   quoteElement.innerHTML = quote;
   usedIndexes.add(randomIdx);
   break
}
}