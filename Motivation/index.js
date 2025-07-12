const button =document.querySelector("#btn");
const par = document.querySelector("#par");
const quotes = [
" 'I don't have a dream, I have a goal.' - Harvey Specter.",
" ' Opportunities don't just happen to you - you create them.' - Chris Grosser.",
" 'It's not whether you get knocked down, it's whether you get up again.' - Vince Lombardi.",
"'I didn't fail. I just found 10,000 things that didn't work.' - Thomas Edison.",
"'Never give up on anything you can't stop thinking about every day.' - Harvey Specterр",
" 'I am not the product of circumstances. I am the product of my decisions.' - Stephen Covey.",
" 'Always give it your all. What goes around comes around.' - Og Mandino",
" 'When you've got your back against the wall, just break the damn thing.' - Harvey Specter"
]

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})