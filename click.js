//declare samecolor() here
function samecolor(){
  const doc= document;
  let divs = doc.querySelectorAll("#samecolor div");
  for(let i=0; i<divs.length;i++){
    divs[i].style.backgroundColor = "#123456";
    divs[i].style.opacity= Math.random();
  }
}
//declare diffcolor() here
function diffcolor(hex){
  const doc2= document;
  let divs2= doc2.querySelectorAll("#diffcolor div");
  for(let i=0; i<divs2.length;i++){
    if(i==0 || i==2 || i==4 || i==6 || i==8){
      divs2[i].style.backgroundColor = "#008732";
    }
    else{
      divs2[i].style.backgroundColor = "#FF78CD";
    }
  }
}
