const quoteTxt = document.querySelector(".quote");
const authorText = document.querySelector(".name");
const quoteBtn = document.querySelector("button");

// ? Random Quote Function
const randomQuote = () => {
    quoteTxt.innerText = "Loading";
    quoteBtn.innerText="Loading Quote...";

  // ? Fetching Random Quotes
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      quoteTxt.innerText = data.content;
      authorText.innerText = `--- ${data.author}`;
      quoteBtn.innerText="New Quote";
    });
};

quoteBtn.addEventListener("click", randomQuote);
randomQuote();