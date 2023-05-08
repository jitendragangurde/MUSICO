console.log("welcome to MUSICO");

//initilize the variable
let songindex = 0;
let audioElment = new Audio('1.mp3.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('MyprogressBar');
let songs = [
    {songname:"mere yaara",Filepath:"song/1.mp3.mp3" ,coverpath:"covers/1.jpg.jpg"},
    {songname:"mere yaara",Filepath:"song/1.mp3.mp3" ,coverpath:"covers/1.jpg.jpg"},
    {songname:"mere yaara",Filepath:"song/1.mp3.mp3" ,coverpath:"covers/1.jpg.jpg"},
    {songname:"mere yaara",Filepath:"song/1.mp3.mp3" ,coverpath:"covers/1.jpg.jpg"},
    {songname:"mere yaara",Filepath:"song/1.mp3.mp3" ,coverpath:"covers/1.jpg.jpg"},
    {songname:"mere yaara",Filepath:"song/1.mp3.mp3" ,coverpath:"covers/1.jpg.jpg"},
]

//audioElment.play();

//handel play pause click 

masterplay.addEventListener('click',()=>{
    if(audioElment.paused  || audioElment.currentTime<=0){
        audioElment.play();
    }
})

//listen to event
myprogressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

})