const memes = [

"https://i.imgur.com/vlV6AGm.jpeg",
"https://img.izismile.com/img/img15/20231107/640/jokes_in_pixels_the_world_of_funny_memes_640_high_03.jpg",
"https://tse4.mm.bing.net/th/id/OIP.HL-X3GkSC6PZHocK2mT7GQHaHW?rs=1&pid=ImgDetMain&o=7&rm=3",
"https://tse2.mm.bing.net/th/id/OIP.6W3RKOWjSWGw_QvcJP4DPwHaFU?rs=1&pid=ImgDetMain&o=7&rm=3",
"https://th.bing.com/th/id/OIP.NYwzWg9BwpQofpXR1YNZgAHaHK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
"https://i.pinimg.com/736x/4a/1b/f5/4a1bf5dc72afcb8fd4b9d85ee2c49888.jpg",
"https://i.pinimg.com/originals/9f/e0/e4/9fe0e4bd75c20e6e09a88703aa21cb92.jpg",
  
];

let likes = localStorage.getItem("likes") || 0;

document.getElementById("likeCount").textContent = likes;

function showRandomMeme(){

const randomIndex = Math.floor(Math.random() * memes.length);

document.getElementById("meme").src = memes[randomIndex];

}

function likeMeme(){

likes++;

localStorage.setItem("likes", likes);

document.getElementById("likeCount").textContent = likes;

}

window.onload = showRandomMeme;
