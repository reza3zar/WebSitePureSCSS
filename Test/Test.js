const quizBtn=document.getElementById("quizId");
const quizForm=document.querySelector(".quizForm");
const mainQuizs=document.querySelectorAll(".quizeOption");



let showOpen=false;

quizBtn.addEventListener("click",toggleQuizForm);

function toggleQuizForm(){
    if(!showOpen){
        quizForm.classList.add("open");
        mainQuizs.forEach(item=>item.classList.add("open"));
        showOpen=true;
    }else{ 
        quizForm.classList.remove("open");
        mainQuizs.forEach(item=>item.classList.remove("open"));

        showOpen=false;
    }
} 