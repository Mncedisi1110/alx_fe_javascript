const X = document.getElementById('newQuote');
X.addEventListener('click', getQuote);

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => 
        {
            const quoteDisplay = document.getElementById("quoteDisplay");
            quoteDisplay.innerText = `${data.text} - ${data.category}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
}
function showRandomQuote(){
    const quotes = [
        {text: "The best way to predict the future is to invent it.", category: "Inspiration"},
        {text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation"},
        {text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Hope"},
        {text: "In the middle of every difficulty lies opportunity.", category: "Perseverance"}
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `${quotes[randomIndex].text} - ${quotes[randomIndex].category}`;
}
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
createAddQuoteForm();
function createAddQuoteForm() {
    const addQuoteSection = document.createElement('div');
    addQuoteSection.id = 'addQuoteSection';
    addQuoteSection.innerHTML = `
    <input id="newQuoteText" type="text" placeholder="Enter a new quote" /><br>
    <input id="newQuoteCategory" type="text" placeholder="Enter quote category" /><br>
    <button id="addQuote">Add Quote</button>
  `;
    document.body.appendChild(addQuoteSection);
}







const Z = document.getElementById('newQuoteText');
const W = document.getElementById('newQuoteCategory');

function addQuote() {
  const newQuoteText = Z.value;
    const newQuoteCategory = W.value;
    if (newQuoteText && newQuoteCategory) {
        const quoteDisplay = document.getElementById("quoteDisplay");
        quoteDisplay.innerText = `text: ${newQuoteText} - Category: ${newQuoteCategory}`;
        Z.value = '';
        W.value = '';
    } else {
        alert("Please enter both quote text and category.");
    }
}
document.getElementById('addQuote').addEventListener('click', addQuote);
   quotes.appendChild(Z,W);

   const myJASON = JSON.stringify(quotes);
   localStorage.setItem("myQuotes", myJASON);

const storedQuotes = localStorage.getItem("myQuotes");
if (storedQuotes) {
    const quotesArray = JSON.parse(storedQuotes);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML= quotesArray;
}
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }
    function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
   





 