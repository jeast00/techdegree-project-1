
/*
  Create an object array named quotes that holds 5 quote objects and
  each quote has a quote property, a source property, a citation
  property (optional), a year property (optional) and
  a tag property(***Extra Credit***)
  })
*/
var quotes = [
  {
    quote : "Is your number still 911? ..Alrighty then!",
    source : "Ace Ventura",
    citation : "Ace Ventura: Pet Detective",
    year : 1994,
    tag : "Humor, Comedy, Movies"
  },
  {
    quote : "If you're going through Hell, keep going.",
    source : "Winston Churchill",
    tag : "Motivational, Inspirational"
  },
  {
    quote : "Accept the challenges so that you can feel the exhilaration of victory.",
    source : "George S. Patton",
    tag : "Motivational, Inspirational"
  },
  {
    quote : "Hasta la vista, baby.",
    source : "The Terminator",
    citation : "Terminator 2: Judgement Day",
    year : 1991,
    tag : "Movies, Action"
  },
  {
    quote : "It is during our darkest moments that we must focus to see the light.",
    source : "Aristotle",
    tag : "Motivational, Inspirational"
  },
  {
    quote : "Ay, Caramba!",
    source : "Bart Simpson",
    citation : "The Simpsons",
    tag : "Humor, TV, Cartoon"
  },
  {
    quote : "What the deuce?",
    source : "Stewie Griffin",
    citation : "Family Guy",
    tag : "Humor, TV, Cartoon"
  },
  {
    quote : "Even a clock that does not work is right twice a day.",
    source : "Polish Proverb",
    tag : "Philisophical"
  },
  {
    quote : "Beer is the cause and solution to all of life's problems.",
    source : "Homer Simpson",
    tag : "Humor, TV, Cartoon"
  },
  {
    quote : "It takes more strength of character to withstand good fortune than bad",
    source : "La Rochefoucauld",
    citation : "Reflections",
    year : 1665,
    tag : "Prosperity"
  }
];

/*
  Use the printQuote() function to call and print the first random quote
  before the button is clicked.
*/
printQuote();

/*
  Call the setTimeInterval() function to start the timer.
*/
setTimeInterval();

/*
  Create a function named getRandomQuote that returns a random quote from the
  quotes object array.
*/
function getRandomQuote() {
    //Create a variable that holds a random quote.
    return quotes[Math.floor(Math.random() * quotes.length)];
    }

/*
  Create a function named printQuote that calls the function getRandomQuote,
  add it to a variable, and print out the quote.
*/
function printQuote() {
    //Create the variable to hold the random quote.
    var quoteInfo = getRandomQuote();

    //Provide an html output variable combining all strings into one string.
    var htmlQuoteOutput = '<p class="quote">' + quoteInfo.quote + '</p>' +
                          '<p class="source">' + quoteInfo.source + ' ';

    //Provide 'if' statements for the optional properties added to the html output string.
        if(quoteInfo.citation !== undefined) {
          htmlQuoteOutput += '<span class="citation">' + quoteInfo.citation + '</span>';
        }
        if(quoteInfo.year !== undefined) {
          htmlQuoteOutput += '<span class="year">' + quoteInfo.year + '</span>';
        }
        htmlQuoteOutput += '</p>';

    //Provide a document.getElementById code to have the quote print to the screen.
    document.getElementById("quote-box").innerHTML = htmlQuoteOutput;

    /*
      Call the changeBackgroundColor() function in the printQuote() function
      to change the background color each time a new quote appears.
    */
    changeBackgroundColor();
}

/*
  Create a function that creates a random number and call it in the
  changeBackgroundColor() function.
*/
function randomColor() {
  return Math.floor(Math.random() * 256);
}

/*
  Create a function that creates a random background color for the body of
  the screen and call the randomColor() function (***Extra Credit***).
*/
function changeBackgroundColor() {
  var redColor = randomColor();
  var blueColor = randomColor();
  var greenColor = randomColor();
  var allColors = 'rgb(' + redColor + ',' + blueColor + ',' + greenColor + ')';
    document.body.style.backgroundColor = allColors;
}

/*
  Create a function that creates a duration of time in which will automatically
  change the quote and the background color without clicking the button
  (***Extra Credit***).
*/
function setTimeInterval() {
  return setInterval(printQuote, 11000);
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
