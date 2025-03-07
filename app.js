let gameSeq =[];
let userSeq =[];

let started = false;
let score = 0;
let level = 0;
let butn = ["red","green","pink","blue"];
let lev = document.querySelector("#levels");

lev.addEventListener("click",()=>{
   if(started == false){
      started =true;
      console.log("Game Started");
      levelup();
   }
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
}

function levelup(){
   let l = document.querySelector('p');
   level++;
   l.innerText = `Level : ${level}`;

   let a = Math.floor(Math.random() * 4);
   let colour = butn[a];
   let btn = document.querySelector(`.${colour}`);
   gameSeq.push(colour);
   btnFlash(btn);
}

let Allbtn = document.querySelectorAll(".btn");
for(let i =0;i<Allbtn.length;i++){
   Allbtn[i].addEventListener("click",()=>{
      if(started==true){
         btnFlash(Allbtn[i]);
         clickFun(Allbtn[i]);
      }
   });
}
let p =0;
function clickFun(btn){
   if(btn.classList[0]==gameSeq[p]){
      p++;
      score++;
      if(p==gameSeq.length){
         p=0;
         setTimeout(function(){
            levelup();
         },500);
   
      }
   }else{
      WrongPress();
      console.log("wrong Press");
   }
}

function WrongPress(){
   started =false;
   let l = document.querySelector('p');
   l.innerText = `Youre Score : ${score}. Press Here to restart`;
   p=0;
   level =0;
   score =0;
   gameSeq =[];
}





