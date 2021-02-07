

let image = document.getElementById("image");
let text = document.getElementById("text");
let audio = document.getElementById("audio");

var button1 = document.getElementById("boxOne")
var button2 = document.getElementById("boxTwo");
var button3 = document.getElementById("boxThree");
var button4 = document.getElementById("boxFour")
var button5 = document.getElementById("boxFive")  

var box1 = document.getElementById("buttonOne")
var box2 = document.getElementById("buttonTwo")
var box3 = document.getElementById("buttonThree")
var box4 = document.getElementById("buttonFour")
var box5 = document.getElementById("buttonFive")

var score = 0;
var indi=0;
var dis=0
var rap=0;

first();


 
function first() {
    scoreText.style = "display:none";
    text.innerHTML = "Hey! How are YOU feeling today?";
    box2.style = "display:inline-block"
    box2.style = "text-align: center"
    box3.style = "display:inline-block"
    box3.style = "text-align: center"
    box4.style = "display:inline-block"
    box4.style = "text-align: center"
    box5.style = "display:none"
    button1.innerHTML = "Happy";   
    button2.innerHTML = "Sad"
    button3.innerHTML = "Angry"
    button4.innerHTML = "Motivated"
    button1.addEventListener("click", happy);
    button2.addEventListener("click", sad);
    button3.addEventListener("click", angry);
    button4.addEventListener("click", motivated);
}
function happy() {
text.innerHTML = "What genre of music do you want to hear?";
button1.innerHTML = "New Wave";   
button2.innerHTML = "Disco";
button3.innerHTML = "Pop";
box4.style = "display:none"
button1.addEventListener("click", nw_1);
button2.addEventListener("click", d_1);
button3.addEventListener("click", comingSoon);
button1.removeEventListener("click", happy);
button2.removeEventListener("click", sad);
button3.removeEventListener("click", angry);
button4.removeEventListener("click", motivated);
}

//NEW WAVE
function nw_1() {
    scoreText.style = "display:inline-block"
    scoreText.style = "text-align: center"
    indi=0
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "We Built this City - Starship";   
    button2.innerHTML = "Footloose - Kenny Loggins"
    button3.innerHTML = "The Ghost in You - The Psychedelic Furs"
    button4.innerHTML = "Wishful Thinking - China Crisis";
    button5.innerHTML = "Next";
    audio.setAttribute("src", "../Music/Footloose.mp3");
    button1.addEventListener('click', incorrect_nw_1);
    button2.addEventListener("click", correct_nw_1);
    button3.addEventListener("click", incorrect_nw_1);
    button4.addEventListener("click", incorrect_nw_1);
    button1.removeEventListener("click", nw_1);
    button2.removeEventListener("click", d_1);
    button3.removeEventListener("click", comingSoon);


    
    
}
function nw_2() {
    indi=1
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Don't You ( Forget About Me ) - Simple Minds";   
    button2.innerHTML = "Blue Monday - New Order"
    button3.innerHTML = "Bizarre Love Triangle - New Order"
    button4.innerHTML = "Sweet Dreams - Eurythmics";
    button1.addEventListener('click', incorrect_nw_2);
    button2.addEventListener("click", incorrect_nw_2);
    button3.addEventListener("click", correct_nw_2);
    button4.addEventListener("click", incorrect_nw_2);
    button1.removeEventListener("click", nw_1);
    audio.setAttribute("src", "../Music/BLT.mp3");
    
}
function nw_3() {
    indi=2
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "With or Without You - U2";   
    button2.innerHTML = "The Promise - When In Rome";
    button3.innerHTML = "Never Ending Story - Limahl";
    button4.innerHTML = "My Song - Glass Tiger";
    button1.addEventListener('click', incorrect_nw_3);
    button2.addEventListener("click", correct_nw_3);
    button3.addEventListener("click", incorrect_nw_3);
    button4.addEventListener("click", incorrect_nw_3);
    audio.setAttribute("src", "../Music/Promise.mp3");
    
    
}
function nw_4() {
    indi=3
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "A Little Respect - Erasure";   
    button2.innerHTML = "Only Time Will Tell - Asia";
    button3.innerHTML = "Jump - Van Halen";
    button4.innerHTML = "Go West - Pet Shop Boys";
    button1.addEventListener('click', incorrect_nw_4);
    button2.addEventListener("click", incorrect_nw_4);
    button3.addEventListener("click", correct_nw_4);
    button4.addEventListener("click", incorrect_nw_4);
    audio.setAttribute("src", "../Music/Jump.mp3");
    
}
    
function nw_5() {
    indi=4
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "You Spin Me Round - Dead or Alive";   
    button2.innerHTML = "Take on Me - a-ha";
    button3.innerHTML = "Maniac - Michael Sembello";
    button4.innerHTML = "West End Girls - Pet Shop Boys";
    button1.addEventListener('click', incorrect_nw_5);
    button2.addEventListener("click", incorrect_nw_5);
    button3.addEventListener("click", correct_nw_5);
    button4.addEventListener("click", incorrect_nw_5);
    audio.setAttribute("src", "../Music/Maniac.mp3");
    
    
}
function nw_6() {
    indi=5
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Space Age Love Song - A Flock of Seagulls";   
    button2.innerHTML = "99 Luftballoons - Nena";
    button3.innerHTML = "Magic - The Cars";
    button4.innerHTML = "We Don't Talk Anymore - Cliff Richard";
    button1.addEventListener('click', incorrect_nw_6);
    button2.addEventListener("click", correct_nw_6);
    button3.addEventListener("click", incorrect_nw_6);
    button4.addEventListener("click", incorrect_nw_6);
    audio.setAttribute("src", "../Music/99.mp3");
    
}
function nw_7() {
    indi=6
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Mr. Roboto - Styx";   
    button2.innerHTML = "Enola Gay - Orchestral Manoeuvres In The Dark";
    button3.innerHTML = "Pretty in Pink - The Psychedelic Furs";
    button4.innerHTML = "West End Girls - Pet Shop Boys";
    button1.addEventListener('click', correct_nw_7);
    button2.addEventListener("click", incorrect_nw_7);
    button3.addEventListener("click", incorrect_nw_7);
    button4.addEventListener("click", incorrect_nw_7);
    audio.setAttribute("src", "../Music/robot.mp3");
    
}
function nw_8() {
    indi=7
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Forever Young - Alphaville";   
    button2.innerHTML = "Ordinary World - Duran Duran";
    button3.innerHTML = "Turn Back The Clock - Johnny Hates Jazz";
    button4.innerHTML = "Don't You Want Me - The Human League";
    button1.addEventListener('click',correct_nw_8);
    button2.addEventListener("click", incorrect_nw_8);
    button3.addEventListener("click", incorrect_nw_8);
    button4.addEventListener("click", incorrect_nw_8);
    audio.setAttribute("src", "../Music/young.mp3");
    
}
function nw_9() {
    indi=8
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Every Breath You Take - The Police";   
    button2.innerHTML = "Shout - Tears for Fears";
    button3.innerHTML = "You Are the One- a-ha";
    button4.innerHTML = "Drive - The Cars";
    button1.addEventListener('click', incorrect_nw_9);
    button2.addEventListener("click", incorrect_nw_9);
    button3.addEventListener("click", incorrect_nw_9);
    button4.addEventListener("click", correct_nw_9);
    audio.setAttribute("src", "../Music/drive.mp3");
    
}
function nw_10() {
    indi=9
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Tainted Love - Soft Cell";   
    button2.innerHTML = "We Belong - Pat Benatar";
    button3.innerHTML = "Sunglasses at Night - Corey Heart";
    button4.innerHTML = "Atmosphere - Joy Division";
    button1.addEventListener('click', correct_nw_10);
    button2.addEventListener("click", incorrect_nw_10);
    button3.addEventListener("click", incorrect_nw_10);
    button4.addEventListener("click", incorrect_nw_10);
    audio.setAttribute("src", "../Music/tainted.mp3");
    
}

//DISCO
function d_1() {
    scoreText.style = "display:inline-block"
    scoreText.style = "text-align: center"
    dis=0;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "What song is playing?";
    box3.style = "display:inline-block"
    box3.style = "text-align: center"
    box4.style = "display:inline-block"
    box4.style = "text-align: center"
    button1.innerHTML = "Stayin Alive - Bee Gees";   
    button2.innerHTML = "More than a Woman - Bee Gees"
    button3.innerHTML = "Night Fever - Bee Gees"
    button4.innerHTML = "You Should Be Dancing - Bee Gees";
    button5.innerHTML = "Next";
    audio.setAttribute("src", "../Music/stayAlive-.mp3");
    button1.addEventListener('click', correct_d_1);
    button2.addEventListener("click", incorrect_d_1);
    button3.addEventListener("click", incorrect_d_1);
    button4.addEventListener("click", incorrect_d_1);
    button1.removeEventListener("click", nw_1);
    button2.removeEventListener("click", d_1);
    button3.removeEventListener("click", pop_1);
    

    
}
function d_2() {
    dis=1
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Play that Funky Music - Wild Cherry";   
    button2.innerHTML = "That's the Way (I Like It) - KC & the Sunshine Band"
    button3.innerHTML = "Kung Fu Fighting - Carl Douglas"
    button4.innerHTML = "Funky Town - Lipps Inc";
    button1.addEventListener('click', incorrect_d_2);
    button2.addEventListener("click", incorrect_d_2);
    button3.addEventListener("click", incorrect_d_2);
    button4.addEventListener("click", correct_d_2);
    audio.setAttribute("src", "../Music/funky.mp3");

}
function d_3() {
    dis=2
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "September - Earth Wind & Fire";   
    button2.innerHTML = "Boogie Wonderland - Earth Wind & Fire";
    button3.innerHTML = "Stayin Alive - Bee Gees";
    button4.innerHTML = "YMCA - The Village People";
    button1.addEventListener('click', incorrect_d_3);
    button2.addEventListener("click", correct_d_3);
    button3.addEventListener("click", incorrect_d_3);
    button4.addEventListener("click", incorrect_d_3);
    audio.setAttribute("src", "../Music/Boogie.mp3");

    
}
function d_4() {
    dis=3
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Go West - Village the People";   
    button2.innerHTML = "September - Earth Wind & Fire";
    button3.innerHTML = "YMCA - Village the People";
    button4.innerHTML = "ABCD - Earth Wind & Fire";
    button1.addEventListener('click', incorrect_d_4);
    button2.addEventListener("click", incorrect_d_4);
    button3.addEventListener("click", correct_d_4);
    button4.addEventListener("click", incorrect_d_4);
    audio.setAttribute("src", "../Music/YMCA.mp3");
}
function d_5() {
    dis=4
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Mamma Mia - ABBA";   
    button2.innerHTML = "Super Trouper - ABBA";
    button3.innerHTML = "Eternal Flame - The Bangles";
    button4.innerHTML = "Dancing Queen";
    button1.addEventListener('click', incorrect_d_5);
    button2.addEventListener("click", incorrect_d_5);
    button3.addEventListener("click", incorrect_d_5);
    button4.addEventListener("click", correct_d_5);
    audio.setAttribute("src", "../Music/Queen.mp3");

    
}
function d_6() {
    dis=5
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Fireflies - Owl City";   
    button2.innerHTML = "Video Killed The Radio Star - The Buggles";
    button3.innerHTML = "California Dreamin' - The Mamas & The Papas";
    button4.innerHTML = "Take Me Home, Country Roads - John Denver";
    button1.addEventListener('click', incorrect_d_6);
    button2.addEventListener("click", correct_d_6);
    button3.addEventListener("click", incorrect_d_6);
    button4.addEventListener("click", incorrect_d_6);
    audio.setAttribute("src", "../Music/Video.mp3");

    
}
function d_7() {
    dis=5
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Celebration - Kool And The Gang";   
    button2.innerHTML = "Despacito - Luis Fonsi";
    button3.innerHTML = "September - Earth Wind & Fire";
    button4.innerHTML = "Let's Groove - Earth Wind & Fire";
    button1.addEventListener('click', correct_d_7);
    button2.addEventListener("click", incorrect_d_7);
    button3.addEventListener("click", incorrect_d_7);
    button4.addEventListener("click", incorrect_d_7);
    audio.setAttribute("src", "../Music/Celebrate.mp3");
    
}
function d_8() {
    dis=7
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Stayin' Alive - Bee Gees";   
    button2.innerHTML = "That's The Way (I Like It) - KC & The Sunshine Band";
    button3.innerHTML = "Play That Funky Music - Wild Cherry";
    button4.innerHTML = "Somebody That I Used To Know (feat. Kimbra) - Gotye";
    button1.addEventListener('click', incorrect_d_8);
    button2.addEventListener("click", correct_d_8);
    button3.addEventListener("click", incorrect_d_8);
    button4.addEventListener("click", incorrect_d_8);
    audio.setAttribute("src", "../Music/TheWay.mp3");

    
}
function d_9() {
    dis=8
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Every Breath You Take - The Police";   
    button2.innerHTML = "I Need A Hero - Bonnie Tyler";
    button3.innerHTML = "YMCA - The Village People";
    button4.innerHTML = "I Will Survive - Gloria Gaynor";
    button1.addEventListener('click', incorrect_d_9);
    button2.addEventListener("click", incorrect_d_9);
    button3.addEventListener("click", incorrect_d_9);
    button4.addEventListener("click", correct_d_9);
    audio.setAttribute("src", "../Music/Survive.mp3");
    
}
function d_10() {
    dis=9
    text.innerHTML = "What song is playing?";
    set_boxes();
    button1.innerHTML = "Le Freak - Chic";   
    button2.innerHTML = "Ladies' Night - Kool And The Gang";
    button3.innerHTML = "Super Freak - Rick James";
    button4.innerHTML = "Rasputin - Boney M.";
    button1.addEventListener('click', correct_d_10);
    button2.addEventListener("click", incorrect_d_10);
    button3.addEventListener("click", incorrect_d_10);
    button4.addEventListener("click", incorrect_d_10);
    audio.setAttribute("src", "../Music/Freak.mp3");
    button5.addEventListener("click", end);
    
}
function end() {
    text.innerHTML = "Congratulations! You have " + score+ "/10 points";
    box1.style = "display:none"
    box2.style = "display:none"
    box3.style = "display:none"
    box4.style = "display:none"
    box5.style = "display:none"
 
}

function sad(){
text.innerHTML = "What genre of music do you want to hear?";
button1.innerHTML = "Ballads";   
button2.innerHTML = "Emo";
box3.style = "display:none"
box4.style = "display:none"
button1.addEventListener("click", comingSoon);
button2.addEventListener("click", comingSoon);

}
function angry(){
text.innerHTML = "What genre of music do you want to hear?";
button1.innerHTML = "Rap";   
button2.innerHTML = "Rock";
box3.style = "display:none"
box4.style = "display:none"
button1.addEventListener("click", comingSoon);
button2.addEventListener("click", comingSoon);
}


function motivated(){
    
    text.innerHTML = "What genre of music do you want to hear?";
    button1.innerHTML = "Classical";   
    button2.innerHTML = "Trivia";
    box3.style = "display:none"
    box4.style = "display:none"
    button1.addEventListener("click", comingSoon);
    button2.addEventListener("click", trivia_1);
    button1.removeEventListener("click", happy);
    button2.removeEventListener("click", sad);
    button3.removeEventListener("click", angry);
    button4.removeEventListener("click", motivated);
    
    }
function comingSoon(){
    audio.setAttribute("src", "../Music/Mario.mp3");
    text.innerHTML = "Coming Soon!";
    box1.style = "display:none"
    box2.style = "display:none"
    box3.style = "display:none"
    box4.style = "display:none"
    box5.style = "display:none"

}


function set_boxes(){
    box1.style = "display:inline-block"
    box1.style = "text-align: center"
    box2.style = "display:inline-block"
    box2.style = "text-align: center"
    box3.style = "display:inline-block"
    box3.style = "text-align: center"
    box4.style = "display:inline-block"
    box4.style = "text-align: center"
}

function set_boxes2(){
    box1.style = "display:inline-block"
    box1.style = "text-align: center"
    box2.style = "display:inline-block"
    box2.style = "text-align: center"
}