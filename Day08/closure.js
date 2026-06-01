//closure 
function greet(){
  let a=10;
  let b=30;
  function meet(){
    console.log(a);
    console.log(b);
  }
  return meet;
}
const num=greet();
num();