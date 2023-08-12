var quotes=["A rose by any other name would smell as sweet.","All that glitters is not gold.","All the world’s a stage, and all the men and women merely players.",
"Ask not what your country can do for you; ask what you can do for your country.","Ask, and it shall be given you; seek, and you shall find.",
"Eighty percent of success is showing up.","Elementary, my dear Watson.","For those to whom much is given, much is required.",
"Frankly, my dear, I don't give a damn.","Genius is one percent inspiration and ninety-nine percent perspiration.","Imagination is more important than knowledge"]
function quote(){
    var random=Math.floor(Math.random()*(quotes.length));
document.getElementById('displayquote').innerHTML=quotes[random];
}