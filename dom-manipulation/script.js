const X = document.getElementById('newQuote');
X.addEventListener('click', getQuote);

function getQuote() {
 document.getElementById("quoteDisplay").innerText = [
       "text", "category"
 ];
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
   

 