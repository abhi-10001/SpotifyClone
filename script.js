console.log("Welcome to Spotify!");

// Initialize the Varialbes
let songIndex = 0;
let audioElement = new Audio('songs/Tera Zikr - Darshan Raval  Official Video - Latest New Hit Song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Atif aslam (AADAT UNPLUGGED)", filePath: "songs/Atif aslam (AADAT UNPLUGGED)", coverPath: "cover/cover1.jpeg" },
    { songName: "Azaan Sami Khan - Ik Lamha ft. Maya Ali (Official Music Video)", filePath: "songs/Azaan Sami Khan - Ik Lamha ft. Maya Ali (Official Music Video)", coverPath: "cover/cover2.jpeg" },
    { songName: "Duncan Laurence - Arcade (Lyrics) ft. FLETCHER", filePath: "songs/Duncan Laurence - Arcade (Lyrics) ft. FLETCHER", coverPath: "cover/cover3.jpeg" },
    { songName: "Goblin 도깨비 OST (Chanyeol, Punch) - Stay with me MV", filePath: "songs/Goblin 도깨비 OST (Chanyeol, Punch) - Stay with me MV", coverPath: "cover/cover4.jpeg" },
    { songName: "Imagine Dragons - Bones", filePath: "songs/Imagine Dragons - Bones", coverPath: "cover/cover5.jpeg" },
    { songName: "Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends)", filePath: "song/Imagine Dragons x J.I.D - Enemy (from the series Arcane League of Legends)", coverPath: "cover/cover6.jpeg" },
    { songName: "King - Tu Aake Dekhle  The Carnival  The Last Ride  Prod. by Shahbeatz  Latest Hit Songs 2020", filePath: "songs/King - Tu Aake Dekhle  The Carnival  The Last Ride  Prod. by Shahbeatz  Latest Hit Songs 2020", coverPath: "cover/cover7.jpeg" },
    { songName: "Linkin Park - In The End (Mellen Gi & Tommee Profitt Remix)", filePath: "songs/Linkin Park - In The End (Mellen Gi & Tommee Profitt Remix)", coverPath: "cover/cover8.jpeg" },
    { songName: "Raataan Lambiyan - Lyric VideoShershaahSidharth  KiaraTanishk B.JubinAsees", filePath: "songs/Raataan Lambiyan - Lyric VideoShershaahSidharth  KiaraTanishk B.JubinAsees", coverPath: "cover/cover9.jpeg" },
    { songName: "Tera Zikr - Darshan Raval  Official Video - Latest New Hit Song", filePath: "songs/Tera Zikr - Darshan Raval  Official Video - Latest New Hit Song", coverPath: "cover/cover10.jpeg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();

// Handle Play/Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        gif.style.opacity = 1;
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=9){
        songIndex = 0
    }else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 9
    }else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})