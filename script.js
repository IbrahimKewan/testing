// Show a new quote
function newQuote(){
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// On load
newQuote();
