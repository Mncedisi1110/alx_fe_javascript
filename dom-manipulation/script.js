const X = document.getElementById('newQuote');
X.addEventListener('click', getQuote);

function getQuote() {
 document.getElementById("quoteDisplay").innerText = [
        "Motivational: The best way to predict the future is to invent it.",
        "LifeQuote: Life is 10% what happens to us and 90% how we react to it.",
        "CourageQuote: The only way to do great work is to love what you do.",
        "Motivation: Success is not the key to happiness. Happiness is the key to success.",
        "LiftingQuote: In the middle of every difficulty lies opportunity."
 ];
    
}


const Z = document.getElementById('newQuoteText');
const W = document.getElementById('newQuoteCategory');

   W.Z.addEventListener('click', addQuote);
function addQuote() {
  Z.W.innerText.push(
    document.getElementById("newQuoteText").value + ": " +
    document.getElementById("newQuoteCategory").value
  );
}
   

 