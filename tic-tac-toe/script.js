console.log("hii");
let audioTurn= new Audio("items/ting.mp3");
let turn="X";
let isgameover=false;



// fucntion to cchange turn
const changeTurn=()=>{

    return turn==="X"?"0":"X"

}


//Function to chenk for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        //first 3 values are the cell number next are the values to transform line
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6, -5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +" Won!";
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='200px';
            document.querySelector('.line').style.width="20vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

        }
        
    })
     

}

//game logic

let boxes=document.getElementsByClassName("box");

//using array.from to make boxes an array and use foreach
Array.from(boxes).forEach(element=>{
     //use element.querySelector here
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn =changeTurn();
            audioTurn.play();
            //check if someone won
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;

            }
            
        }
    })
})


//reset 
let reset=document.getElementById("reset");
reset.addEventListener('click',()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(e=>{
        e.innerText="";
    })
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='0px';
    document.querySelector('.line').style.width='0vw';


    


})