function removeEvents(){
    button2.removeEventListener("click", correct_nw_1)
    button3.removeEventListener("click", correct_nw_2)
    button2.removeEventListener("click", correct_nw_3)
    button3.removeEventListener("click", correct_nw_4)
    button3.removeEventListener("click", correct_nw_5)
    button2.removeEventListener("click", correct_nw_6)
    button1.removeEventListener("click", correct_nw_7)
    button1.removeEventListener("click", correct_nw_8)
    button4.removeEventListener("click", correct_nw_9)
    button1.removeEventListener("click", correct_nw_10)
    button1.removeEventListener("click", correct_d_1)
    button4.removeEventListener("click", correct_d_2)
    button2.removeEventListener("click", correct_d_3)
    button3.removeEventListener("click", correct_d_4)
    button4.removeEventListener("click", correct_d_5)
    button2.removeEventListener("click", correct_d_6)
    button1.removeEventListener("click", correct_d_7)
    button2.removeEventListener("click", correct_d_8)
    button4.removeEventListener("click", correct_d_9)
    button1.removeEventListener("click", correct_d_10)
}
function removeTrivia(){
    button2.removeEventListener("click", correct_t_1)
    button1.removeEventListener("click", correct_t_2)
    button2.removeEventListener("click", correct_t_3)
    button1.removeEventListener("click", correct_t_4)
    button1.removeEventListener("click", correct_t_5)
    button1.removeEventListener("click", correct_t_6)
    button2.removeEventListener("click", correct_t_7)
    button2.removeEventListener("click", correct_t_8)
    button1.removeEventListener("click", correct_t_9)
    button2.removeEventListener("click", correct_t_10)
}

function correct_nw_1(){
    if(indi == 0){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "You are Correct"
    clear_boxes();
    button5.addEventListener("click", nw_2);
    removeEvents();

   
    }
    else{
        return;
    }

    
    
}
function incorrect_nw_1(){
    if(indi == 0){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_2);
        removeEvents();

       
        }
        else{
            return;
        }

}
function correct_nw_2(){

    if(indi == 1){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_3);
        removeEvents();
       
        }
        else{
            return; 
        }
    
}
function incorrect_nw_2(){
    if(indi ==1){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_3);
        removeEvents();
        }
        else{
            return;
        }

}
function correct_nw_3(){
    if(indi ==2){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_4);
        removeEvents();
       
        }
        else{
            return;
        }
    
}
function incorrect_nw_3(){
    if(indi ==2){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_4);
        removeEvents();
        }
        else{
            return;
        }

 
}
function correct_nw_4(){
    if(indi ==3){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_5);
        removeEvents();    
        }
        else{
            return;
        }
    
}
function incorrect_nw_4(){
    if(indi ==3){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_5);
        removeEvents();
        }
        else{
            return;
        }


}
function correct_nw_5(){
    if(indi ==4){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_6);
        removeEvents();
        }
        else{
            return;
        }
    
    
}
function incorrect_nw_5(){
    if(indi ==4){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_6);
        removeEvents();
        }
        else{
            return;
        }


}
function correct_nw_6(){
    if(indi ==5){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_7);
        removeEvents();
        }
        else{
            return;
        }
    
}
function incorrect_nw_6(){
    if(indi ==5){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_7);
        removeEvents();
        }
        else{
            return;
        }

    box5.style = "text-align: center"

}
function correct_nw_7(){
    if(indi ==6){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_8);
        removeEvents();
        }
        else{
            return;
        }

    
    
}
function incorrect_nw_7(){
    if(indi ==6){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_8);
        removeEvents();
        }
        else{
            return;
        }


}
function correct_nw_8(){
    if(indi ==7){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_9);
        removeEvents();
        }
        else{
            return;
        }
    
    
}
function incorrect_nw_8(){
    if(indi ==7){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_9);
        removeEvents();
        }
        else{
            return;
        }


}
function correct_nw_9(){
    if(indi ==8){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", nw_10);
        removeEvents();
        }
        else{
            return;
        }

    
}
function incorrect_nw_9(){
    if(indi ==8){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", nw_10);
        removeEvents();
        }
        else{
            return;
        }


}
function correct_nw_10(){
    if(indi ==9){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        
        button5.addEventListener("click", end);
        removeEvents();
        }
        else{
            return;
        }
    
    
}
function incorrect_nw_10(){
    if(indi ==9){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        
        button5.addEventListener("click", end);
        removeEvents();
        }
        else{
            return;
        }


}


function correct_d_1(){
    if(dis < 1){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "You are Correct"
    box1.style = "display:none"
    box2.style = "display:none"
    box3.style = "display:none"
    box4.style = "display:none"
    box5.style = "text-align: center"
    button5.addEventListener("click", d_2);
   
    }
    else{
        return;
    }

    
    
}
function incorrect_d_1(){
    if(dis < 1){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_2);
       
        }
        else{
            return;
        }

}
function correct_d_2(){

    if(dis < 2){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_3);
        }
        else{
            return; 
        }
    
}
function incorrect_d_2(){
    if(dis < 2){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_3);
       
        }
        else{
            return;
        }

}
function correct_d_3(){
    if(dis < 3){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_4);
       
        }
        else{
            return;
        }
    
}
function incorrect_d_3(){
    if(dis < 3){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_4);
       
        }
        else{
            return;
        }

 
}
function correct_d_4(){
    if(dis < 4){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_5);
       
        }
        else{
            return;
        }
    
}
function incorrect_d_4(){
    if(dis < 4){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_5);
       
        }
        else{
            return;
        }


}
function correct_d_5(){
    if(dis <5){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_6);
       
        }
        else{
            return;
        }
    
    
}
function incorrect_d_5(){
    if(dis < 5){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_6);
       
        }
        else{
            return;
        }


}
function correct_d_6(){
    if(dis < 6){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_7);
       
        }
        else{
            return;
        }
    
}
function incorrect_d_6(){
    if(dis < 6){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_7);
       
        }
        else{
            return;
        }

    box5.style = "text-align: center"

}
function correct_d_7(){
    if(dis < 7){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_8);
       
        }
        else{
            return;
        }

    
    
}
function incorrect_d_7(){
    if(dis < 7){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_8);
       
        }
        else{
            return;
        }


}
function correct_d_8(){
    if(dis < 8){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_9);
        }
        else{
            return;
        }
    
    
}
function incorrect_d_8(){
    if(dis < 8){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_9);
       
        }
        else{
            return;
        }


}
function correct_d_9(){
    if(dis < 9){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
        button5.addEventListener("click", d_10);
       
        }
        else{
            return;
        }

    
}
function incorrect_d_9(){
    if(dis < 9){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
        button5.addEventListener("click", d_10);
       
        }
        else{
            return;
        }


}
function correct_d_10(){
    if(dis < 10){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Correct"
        clear_boxes();
       
        }
        else{
            return;
        }
    
    
}
function incorrect_d_10(){
    if(dis < 10){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "You are Incorrect"
        clear_boxes();
       
        }
        else{
            return;
        }


}
function correct_t_1(){
        score++;
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "Music has been around for around 35,000 years!"
        clear_boxes();
        button5.addEventListener("click", trivia_2);
        removeTrivia();
}
function incorrect_t_1(){
        scoreText.innerHTML="Score: " + score;
        text.innerHTML = "Music has been around for around 35,000 years!"
        clear_boxes();
        button5.addEventListener("click", trivia_2);
        removeTrivia();
}

function correct_t_2(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "The musical scale goes from A-G!"
    clear_boxes();
    button5.addEventListener("click", trivia_3);
    removeTrivia();
}
function incorrect_t_2(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "The musical scale goes from A-G!"
    clear_boxes();
    button5.addEventListener("click", trivia_3);
    removeTrivia();
}

function correct_t_3(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "That honour goes to Elvis Presley!"
    clear_boxes();
    button5.addEventListener("click", trivia_4);
    removeTrivia();
}
function incorrect_t_3(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "That honour goes to Elvis Presley!"
    clear_boxes();
    button5.addEventListener("click", trivia_4);
    removeTrivia();
}

function correct_t_4(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "A tuba is the lowest pitched musical instrument in the brass family."
    clear_boxes();
    button5.addEventListener("click", trivia_5);
    removeTrivia();
}
function incorrect_t_4(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "A tuba is the lowest pitched musical instrument in the brass family."
    clear_boxes();
    button5.addEventListener("click", trivia_5);
    removeTrivia();
}

function correct_t_5(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Beethoven composed Fur Elise and it became one of the most famous compositions of all time!"
    clear_boxes();
    button5.addEventListener("click", trivia_6);
    removeTrivia();
}
function incorrect_t_5(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Beethoven composed Fur Elise and it became one of the most famous compositions of all time!"
    clear_boxes();
    button5.addEventListener("click", trivia_6);
    removeTrivia();
}

function correct_t_6(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Yes they do! The Alphabet Song also shares the same melody."
    clear_boxes();
    button5.addEventListener("click", trivia_7);
    removeTrivia();
}
function incorrect_t_6(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Yes they do! The Alphabet Song also shares the same melody."
    clear_boxes();
    button5.addEventListener("click", trivia_7);
    removeTrivia();
}

function correct_t_7(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Jazz was originated in the late 19th and early 20th centuries in New Orleans with its roots in blues and ragtime."
    clear_boxes();
    button5.addEventListener("click", trivia_8);
    removeTrivia();
}
function incorrect_t_7(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Jazz was originated in the late 19th and early 20th centuries in New Orleans with its roots in blues and ragtime."
    clear_boxes();
    button5.addEventListener("click", trivia_8);
    removeTrivia();
}

function correct_t_8(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "The bass clef typically refers to notes below middle C and the treble clef above middle C."
    clear_boxes();
    button5.addEventListener("click", trivia_9);
    removeTrivia();
}
function incorrect_t_8(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "The bass clef typically refers to notes below middle C and the treble clef above middle C."
    clear_boxes();
    button5.addEventListener("click", trivia_9);
    removeTrivia();
}

function correct_t_9(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Drumming is great exercise, in just half an hour of drumming you can burn more calories than you would cycling, weight lifting, or hiking."
    clear_boxes();
    button5.addEventListener("click", trivia_10);
    removeTrivia();
}
function incorrect_t_9(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Drumming is great exercise, in just half an hour of drumming you can burn more calories than you would cycling, weight lifting, or hiking."
    clear_boxes();
    button5.addEventListener("click", trivia_10);
    removeTrivia();
}

function correct_t_10(){
    score++;
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Monophony is the simplest of musical textures, consisting of a melody, typically sung by a single singer or played by a single instrument player."
    clear_boxes();
    button5.addEventListener("click", end);
    removeTrivia();
}
function incorrect_t_10(){
    scoreText.innerHTML="Score: " + score;
    text.innerHTML = "Monophony is the simplest of musical textures, consisting of a melody, typically sung by a single singer or played by a single instrument player."
    clear_boxes();
    button5.addEventListener("click", end);
    removeTrivia();
}
function clear_boxes(){
    box1.style = "display:none"
    box2.style = "display:none"
    box3.style = "display:none"
    box4.style = "display:none"
    box5.style = "text-align: center"
}