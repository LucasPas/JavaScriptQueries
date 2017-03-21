//declare samecolor() here
function samecolor(hex){
  const doc= document;
  let divs = doc.querySelectorAll("#samecolor div");
  for(let i=0; i<divs.length;i++){
    divs[i].style.backgroundColor = "#"+hex;
    divs[i].style.opacity= Math.random();
    console.log("jhsdfklj");
  }
console.log("asdf");
}
//declare diffcolor() here
function diffcolor(hex){
  const doc2= document;
  let divs2= doc.querySelectorAll("#diffcolor div");
  

}
