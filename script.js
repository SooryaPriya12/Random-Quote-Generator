const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "Motivational"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Life"
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "Philosophy"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    category: "Inspiration"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivation"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Inspiration"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Self-belief"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteObj = quotes[randomIndex];
  
  document.getElementById("quote").textContent = `"${quoteObj.quote}"`;
  document.getElementById("author").textContent = `- ${quoteObj.author}`;
  document.getElementById("category").textContent = `Category: ${quoteObj.category}`;
}
