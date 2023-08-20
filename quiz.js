//https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple
//////////////////////////
//document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const nameOfUser = urlParams.get('name');

    // Use the retrieved parameter in your quiz logic
    
//});

//import {nameOfUser} from './script.js';
//console.log(name);

const question = document.getElementById('question');
const option1 =document.getElementById('btn1');
const option2 =document.getElementById('btn2');
const option3 =document.getElementById('btn3');
const option4 =document.getElementById('btn4');
const score = document.getElementById('scorecard');
//let correct_Ans = "", correctScore = askedCount = 0,totalQuestion = 10;
 var currentScore = 0;
let next = document.getElementById('next');
//const report = document.getElementById('report');
//document.addEventListener('DOMContentLoaded', ()=> {

//});
let j=1;
async function displayQuestion(){
    const APIurl="https://opentdb.com/api.php?amount=11&difficulty=easy&type=multiple";
    const result= await fetch(`${APIurl}`);
    const data = await result.json();
    //console.log(data.results[0]);
    //console.log(data.results[0]);
    showQuestion(data.results[0]);
    score.innerHTML= "Welcome, " + `${nameOfUser}`
    //report.style.display = "none";

    var i=1;
    next.addEventListener("click", ()=>{
        if(i>=1 && i<=10 ){
        showQuestion(data.results[i++]);
        option1.style.background = "white";
        option2.style.background = "white";
        option3.style.background = "white";
        option4.style.background = "white";
        score.innerHTML= "Welcome, " + `${nameOfUser}`
        //report.style.display = "none";
        }
        if(i==11){
            document.querySelector(".quiz").style.display = "none";
            document.getElementById("next").style.display = "none";
            //score.innerHTML.style.font-size = "2rem";
            score.innerHTML= `${nameOfUser}` + ", your score is " + `${currentScore}` +"/10";
            //report.style.display ="block" ;
        }
    });
    

}

function showQuestion(data){
    let correctans = data.correct_answer;
    let incorrectans = data.incorrect_answers;
    let options = incorrectans;
    //to insrt option in random position
    options.splice(Math.floor(Math.random() * (incorrectans.length + 1)),0,correctans);

    if(j>=1 && j<=10){
    question.innerHTML = `${j++}.` +" " + `${data.question}`;
    }
    option1.innerHTML = `${options[0]}`;
    option1.style.display = "block";
    option2.innerHTML = `${options[1]}`;
    option2.style.display = "block";
    option3.innerHTML = `${options[2]}`;
    option3.style.display = "block";
    option4.innerHTML = `${options[3]}`;
    option4.style.display = "block";
    checkandHighlight(correctans);
    
}



function checkandHighlight(correctans){
    option1.addEventListener("click", ()=>{
        if(option1.innerHTML === correctans){
            currentScore+=1;
            option1.style.background = "green";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            //displayQuestion();
        }
    });
    option2.addEventListener("click", ()=>{
        if(option2.innerHTML === correctans){
            currentScore+=1;
            option2.style.background = "green";
            option1.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";

            //displayQuestion();

        }
    });
    option3.addEventListener("click", ()=>{
        if(option3.innerHTML === correctans){
            currentScore+=1;
            option3.style.background = "green";
            option1.style.display = "none";
            option2.style.display = "none";
            option4.style.display = "none";
           // displayQuestion();

        }
    });
    option4.addEventListener("click", ()=>{
        if(option4.innerHTML === correctans){
            currentScore+=1;
            option4.style.background = "green";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
           //displayQuestion();

        }
    });
    option1.addEventListener("click", ()=>{
        if(option1.innerHTML != correctans){
            option1.style.background = "red";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            //displayQuestion();

        }
    });
    option2.addEventListener("click", ()=>{
        if(option2.innerHTML != correctans){
            option2.style.background = "red";
            option1.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            //displayQuestion();

        }
    });
    option3.addEventListener("click", ()=>{
        if(option3.innerHTML != correctans){
            option3.style.background = "red";
            option1.style.display = "none";
            option2.style.display = "none";
            option4.style.display = "none";
            //displayQuestion();

        }
    });
    option4.addEventListener("click", ()=>{
        if(option4.innerHTML != correctans){
            option4.style.background = "red";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            //displayQuestion();

        }
    });
    console.log(currentScore);
    
}

displayQuestion();
//console.log(nameOfUser);

///exporting value
//export const final = currentScore;

///result

//const result = document.getElementById("scorecard");
//result.innerHTML = "Your Score is" + `${currentScore}` + "/10";

