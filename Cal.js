function one() {
   console.log(document.getElementById("userInput").value+=1)
}
function two() {
   console.log(document.getElementById("userInput").value+=2)
}
function three() {
   console.log(document.getElementById("userInput").value+=3)
}
function four() {
   console.log(document.getElementById("userInput").value+=4)
}
function five() {
   console.log(document.getElementById("userInput").value+=5)
}
function six() {
   console.log(document.getElementById("userInput").value+=6)
}
function seven() {
   console.log(document.getElementById("userInput").value+=7)
}
function eigth() {
   console.log(document.getElementById("userInput").value+=8)
}
function nine() {
   console.log(document.getElementById("userInput").value+=9)
}

function zero() {
   console.log(document.getElementById("userInput").value+=0)
}

function twozero() {
   console.log(document.getElementById("userInput").value+='00')
}

function plus() {
   console.log(document.getElementById("userInput").value+='+')
}
function minus() {
   console.log(document.getElementById("userInput").value+='-')
}
function multi() {
   console.log(document.getElementById("userInput").value+='*')
}
function div() {
   console.log(document.getElementById("userInput").value+='/')
}
function dot() {
   console.log(document.getElementById("userInput").value+='.')
}
function openbracket() {
   console.log(document.getElementById("userInput").value+="(")
}
function closebracket() {
   console.log(document.getElementById("userInput").value+=")")
}
function AC() {
   console.log(document.getElementById("userInput").value="")
}
function Tap() {
  alert("There is no use of this Button so please avoid it")
}

function oneC(){
   var num = document.getElementById("userInput").value;
   document.getElementById("userInput").value = num.slice(0, -1);
}
function result() {
   var res = document.getElementById("userInput").value;
   res = res.replace(/^0+/, '');
   var final = eval(res)
   document.getElementById("userInput").value = final;
}