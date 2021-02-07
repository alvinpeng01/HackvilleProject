
function set_trivia(){
    button1.innerHTML = "True";   
    button2.innerHTML = "False";
    button5.innerHTML = "Next";
}
function trivia_1(){
    scoreText.style = "display:inline-block"
    scoreText.style = "text-align: center"
    audio.setAttribute("src", "../Music/Mario.mp3");
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Music has been around for 3000 years.";
    box3.style = "display:none"
    box4.style = "display:none"
    set_trivia();
    button1.addEventListener("click", incorrect_t_1);
    button2.addEventListener("click", correct_t_1);
    button1.removeEventListener("click", comingSoon);
    button2.removeEventListener("click", trivia_1);
}

function trivia_2(){
    set_boxes2()
    scoreText.innerHTML="Score: " + score;
    
    text.innerHTML = "There are 8 notes in the musical scale.";
    set_trivia();
    button1.addEventListener("click", correct_t_2);
    button2.addEventListener("click", incorrect_t_2);
    button1.removeEventListener("click", incorrect_t_1);
    button2.removeEventListener("click", correct_t_1);
}

function trivia_3(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Frank Sinatra is the best selling solo artist in the world.";
    set_boxes2();
    set_trivia();
    button1.addEventListener("click", incorrect_t_3);
    button2.addEventListener("click", correct_t_3);
    button1.removeEventListener("click", correct_t_2);
    button2.removeEventListener("click", incorrect_t_2);
}

function trivia_4(){
    scoreText.innerHTML="Score: " + score;
    set_boxes2();
    text.innerHTML = "A tuba is a woodwind instrument.";
    set_trivia();
    button1.addEventListener("click", incorrect_t_4);
    button2.addEventListener("click", correct_t_4);
    button1.removeEventListener("click", incorrect_t_3);
    button2.removeEventListener("click", correct_t_3);
}

function trivia_5(){
    scoreText.innerHTML="Score: " + score;
    set_boxes2();
    text.innerHTML = "Beethoven is the composer of Fur Elise";
    set_trivia();
    button1.addEventListener("click", correct_t_5);
    button2.addEventListener("click", incorrect_t_5);
    button1.removeEventListener("click", incorrect_t_4);
    button2.removeEventListener("click", correct_t_4);
}

function trivia_6(){
    scoreText.innerHTML="Score: " + score;
    set_boxes2()
    text.innerHTML = "Twinkle-Twinkle and Ba-ba Black Sheep have the same melody.";
    set_trivia();
    button1.addEventListener("click", correct_t_6);
    button2.addEventListener("click", incorrect_t_6);
    button1.removeEventListener("click", correct_t_5);
    button2.removeEventListener("click", incorrect_t_5);
}

function trivia_7(){
    scoreText.innerHTML="Score: " + score;
    set_boxes2();
    text.innerHTML = "Jazz is originated from the city of New York.";
    set_trivia();
    button1.addEventListener("click", incorrect_t_7);
    button2.addEventListener("click", correct_t_7);
    button1.removeEventListener("click", correct_t_6);
    button2.removeEventListener("click", incorrect_t_6);
}

function trivia_8(){
    scoreText.innerHTML="Score: " + score;
    set_boxes2()
    text.innerHTML = "The bass clef usually refers to higher notes, and the treble clef refers to lower notes.";
    set_trivia();
    button1.addEventListener("click", incorrect_t_8);
    button2.addEventListener("click", correct_t_8);
    button1.removeEventListener("click", incorrect_t_7);
    button2.removeEventListener("click", correct_t_7);
}

function trivia_9(){
    scoreText.innerHTML="Score: " + score;
    set_boxes2()
    text.innerHTML = "The drum is the oldest musical instrument known to existence.";
    set_trivia();
    button1.addEventListener("click", correct_t_9);
    button2.addEventListener("click", incorrect_t_9);
    button1.removeEventListener("click", incorrect_t_8);
    button2.removeEventListener("click", correct_t_8);
}

function trivia_10(){
    scoreText.innerHTML="Score: " + score;
    set_boxes2()
    text.innerHTML = "\"Homophonic\" means one line of music";
    set_trivia();
    button1.addEventListener("click", incorrect_t_10);
    button2.addEventListener("click", correct_t_10);
    button1.removeEventListener("click", correct_t_9);
    button2.removeEventListener("click", incorrect_t_9);
}