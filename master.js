
 function x (){
    var i= 0;
setInterval( function (){
  i= i+1 ;
  if (i== 10){
      i=0; }
  document.getElementById("c").innerHTML=i;
} ,
    
  1000  );}

  x();