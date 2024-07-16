const qouteContainer = document.getElementById('qoute-container');
const qouteText = document.getElementById('qoute');
const qouteAuther = document.getElementById('Author');
const newQuoteBtn = document.getElementById('new-qoute');
const twitterBtn = document.getElementById('twitter');
const laoder = document.getElementById('loader');

// Show Loading
function Loading(){
    laoder.hidden = false;
    qouteContainer.hidden = true;
}

// Hide Loading
function complete(){
    laoder.hidden = true;
    qouteContainer.hidden = false;
}

// Show a new quote
function newQuote(){
    Loading();
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
   
    if (!quote.author) {
        qouteAuther.textContent = 'Unknown';
    }else{
        qouteAuther.textContent = quote.author;
    }

    if (quote.text.length > 50){
        qouteText.classList.add('long-qoute');
    }else{
        qouteText.classList.remove('long-qoute');
    }
    qouteText.textContent = quote.text;
    complete();
}


function tweetQoute(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qouteText.textContent} - ${qouteAuther.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQoute);
// On load
Loading();
newQuote();
