
const DEFAULTCOLOR = '#000000';
const DEFAULTSIZE = 16;

let currentBtn =""
let currentColor = DEFAULTCOLOR;
let currentSize = DEFAULTSIZE;


const fbox = document.getElementById("fboxId");
const board = document.getElementById("boardId");
const colorBar=document.getElementById("colorBar");
const rainbowBtn =document.getElementById("rainbowBtn");
const rangeBar=document.getElementById("rangeBar");
const clearBtn = document.getElementById("clearBtn");
const toggleBtn = document.getElementById('toggleId');



rangeBar.onchange = (e)=> play(e.target.value);
rainbowBtn.onclick=()=>currentBtn='rainbow'; 
colorBar.oninput=()=>{currentColor=colorBar.value;
currentBtn="";};
clearBtn.onclick=()=>play(currentSize);
rangeBar.onmousemove=()=>currentSize=rangeBar.value;
toggleBtn.onclick=()=>toggleFun();



function toggleFun(){
    let board = document.querySelector('#boardId');
    for(let i =0;i<board.children.length;i++){
        board.children[i].classList.toggle('boardElement');
    }
}






let mouseDown = false;
document.body.onmousedown=()=>(mouseDown=true);
document.body.onmouseup=()=>(mouseDown=false);

function createBoard(size){

    board.style.gridTemplateColumns= `repeat(${size},1fr)`;

    for(let i =0;i< size*size;i++){
        const div = document.createElement('div');
        div.classList.add("boardElement");
        div.addEventListener('mouseover',renderBoard);
        div.addEventListener('mousedown', renderBoard);
        board.appendChild(div);

    }
}

function play(size){
    //update the size of the board 
    board.innerHTML="";
    document.getElementById('rangeLabel').textContent=`${currentSize} x ${currentSize}`
    createBoard(size);

}


function renderBoard(e){
    if(e.type == 'mouseover' && !mouseDown)
    {return}

    if(currentBtn =='rainbow'){
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        e.target.style.backgroundColor=`rgb(${r},${g},${b})`;

    }
    else{
        e.target.style.backgroundColor=currentColor;
    }







}


window.onload=()=>{
    play(DEFAULTSIZE);
}
