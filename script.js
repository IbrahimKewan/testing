
let apiQuotes = [];
// Get Qoute From API
async function getQuotes(){
    //const ApiUtl = await fetch('quotes.json');
    const ApiUtl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(ApiUtl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    }catch (error){
        console.log("error Qoute --> " + error);
    }
}


// On Load
getQuotes();