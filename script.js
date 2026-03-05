const memes = [

"https://i.imgur.com/vlV6AGm.jpeg",
"https://i.imgur.com/WxNkK7J.jpeg",
"https://i.imgur.com/8Km9tLL.jpeg",
"https://i.imgur.com/9H1Z4sX.jpeg",
"https://i.imgur.com/jv6pYyH.jpeg"

];

function showRandomMeme(){

const randomIndex = Math.floor(Math.random() * memes.length);

document.getElementById("meme").src = memes[randomIndex];

}

window.onload = showRandomMeme;
