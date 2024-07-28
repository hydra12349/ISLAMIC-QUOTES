// Array of quotes
const quotes = [
  ". Fear God and you will have no cause to fear any one.",
  "Resignation to the Will of God is the cure of the disease of the heart.",
  "The word of God is the medicine of the heart.",
  "Lead such a life, that, when you die, the people may mourn you, and while you are alive they long for your company.",
  "The days of life pass away like clouds, so do good while you are alive.",
  "Of all the follies the greatest is to love the world.",
  "Opportunity is swift of flight but slow to return.",
  "Pride, cowardice, and miserliness are bad for me but good for women.",
  "The most happy is he to whom God has given a good wife.",
  "He who knows himself knows God.",
];

// Get the button and quote container elements
const newQuoteBtn = document.getElementById('new-quote-btn');
const quoteContainer = document.getElementById('quote-container');

// Function to get a random quote from the array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to load a quote
function loadQuote() {
  const newQuote = getRandomQuote();
  quoteContainer.textContent = newQuote;
  quoteContainer.style.display = 'block';
}

// Call the loadQuote() function when the page loads
window.onload = loadQuote;

// Call the loadQuote() function when the user clicks the "NEW QUOTE" button
newQuoteBtn.addEventListener('click', loadQuote);