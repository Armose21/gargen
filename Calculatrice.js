var input=document.getElementById('InputBox');
var button=document.getElementById('aqualBtn');
var one=document.querySelector('.one');
var off=document.querySelector('.off');
console.log(button);
console.log(one);
console.log(off);




var buttons=document.querySelectorAll('button');
const vide = "" ;
let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
 button.addEventListener('click', (e)=>{
    if(e.target.innerHTML=='='){
      string=eval(string);
      input.value=string;
      if(input.value<'0'){
       input.style.color='orange';
      }
      else{
         input.style.color='white';
      }
    }
    else if(e.target.innerHTML=='OFF') {
      input.classList.add('inp');
    }
    else if(e.target.innerHTML=='ON/C') {
      input.classList.remove('inp');
    }
    else if(e.target.innerHTML=='AC'){
       string="";
       input.value=string;
    }
    else if(e.target.innerHTML=='DEL'){
      string=string.substring(0, string.length-1);
      input.value=string;
    }
    else if(e.target.innerHTML=='sin'){
       string=Math.sin(string);
       input.value=string; 
     }
     else if(e.target.innerHTML=='cos'){
      string=Math.cos(string);
      input.value=string; 
     }
     else if(e.target.innerHTML=='tan'){
      string=Math.tan(string);
      input.value=string; 
     }
    else if(e.target.innerHTML=='%'){
       string=string/100;
       input.value=string;    
    }
    else if(e.target.innerHTML=='y^x'){
      string=(string)^(input.value);
      input.value=string; 
    }
    else if(e.target.innerHTML=='x^2'){
      string*= string;
      input.value=string; 
    }
    else if(e.target.innerHTML=='rad'){
      string=Math.round(string);
      input.value=string;    
    }
    else if(e.target.innerHTML=='hyp'){
      string=Math.hypot(string);
      input.value=string;    
    }
    else if(e.target.innerHTML=='∏'){
      string= "3.141592654"
      input.value=string;  
    }
    else if(e.target.innerHTML=='('){
      string="(";
      input.value= input.value + string;
    }
    else if(e.target.innerHTML==')'){
      string=")";
      input.value= string+input.value;
    }
    else if(e.target.innerHTML=='√'){
      string=Math.sqrt(string);
      input.value=string;
    }
    else{
       string += e.target.innerHTML;
       input.value=string;
      //  button.addEventListener('click', (e)=>{
      //   noti.style.visibility='visible';
      //   noti.style.opacity='1';
      //   noti.style.transform='translateX(0)';
      //   noti.style.left='150px';
      //   note.innerHTML='😡 Aucune opération éffectée!';
      //   note.style.color='red';
      //  });
    }
 })
})
// let valeur="";
// let val=Array.from(document);
// val.forEach(document =>{
//   document.addEventListener('keypress', (e) =>{
//    if(e.key==='='){
//       valeur=eval(e.key);
//       input.value=valeur;
//    }
//    else if(e.key==='AC'){
//        valeur="";
//        input.value=valeur;
//    }
//    else if(e.key=='DEL'){
//        valeur=valeur.substring(0, valeur.length-1);
//        input.value=valeur;
//    }
//    else{
//        valeur += e.key;
//        input.value=valeur;
//    }
//   })
// })

// var number=0;
// number++;
// alert(number);