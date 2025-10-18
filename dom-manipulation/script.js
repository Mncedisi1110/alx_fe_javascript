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




const Z = document.getElementById('newQuoteText');
const W = document.getElementById('newQuoteCategory');

function addQuote() {
  const newQuoteText = Z.value;
    const newQuoteCategory = W.value;
    if (newQuoteText && newQuoteCategory) {
        const quoteDisplay = document.getElementById("quoteDisplay");
        quoteDisplay.innerText = `"${newQuoteText}" - Category: ${newQuoteCategory}`;
        Z.value = '';
        W.value = '';
    } else {
        alert("Please enter both quote text and category.");
    }
}
   

 