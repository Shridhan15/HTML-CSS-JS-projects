const questions=[
    {
        question:"Which is largest animal in world?",
        answers:[
            { text:"Shark",correct:false },
            { text:"Blue Whale",correct:true },
            { text:"Elephnat",correct:false },
            { text:"Giraffe",correct:false },
        ]
    },
    {
        question:"Which is the smallest country in world?",
        answers:[
            { text:"Vatican City",correct:true },
            { text:"Nepal",correct:false},
            { text:"Sri Lanka",correct:false },
            { text:"Bhutan",correct:false },
        ]
    },
    {
        question:"Which is largest dessert in world?",
        answers:[
            { text:"Kalahari",correct:false },
            { text:"Gobi",correct:false},
            { text:"Sahara",correct:false },
            { text:"Antartica",correct:true },
        ]
    },
    {
        question:"Which is the smallest continent in world?",
        answers:[
            { text:"Ssia",correct:true },
            { text:"Australia",correct:true},
            { text:"Antartica",correct:false },
            { text:"Africa",correct:false },
        ]
    }
];

const questionelement=document.getElementById("question");
const answerbuttons=document.getElementById("answerbuttons");
const nextbutton=document.getElementById("nextbtn");

let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML-"Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currquestion= questions[currentquestionindex];
    let questionNo= currentquestionindex+1;
    questionelement.innerHTML=questionNo+". "+currquestion.question;

    currquestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetstate(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}


function showscore(){
    resetstate();
    questionelement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
};

function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }else{
        showscore();
    }
};
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex<questions.length){
        handlenextbutton();
    }else{
        startquiz();
    }
})
startquiz();