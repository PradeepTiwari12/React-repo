

//create element through js
const header1=document.createElement("h1");
header1.innerText="Hello World from JS";
header1.style.color="blue";
header1.style.textAlign="center";
header1.style.backgroundColor="yellow";

const root=document.getElementById('root');
root.append(header1);

//create element through react
const React={
  createElement:function(tag,style,children){
    const element=document.createElement(tag);
    element.innerText=children;
    for(let key in style){
      element.style[key]=style[key];
    }
    return element;

  }
}
const header2=React.createElement("h1",{fontsize:"30px",backgroundColor:"yellow",color:"blue"},"Hello World from React");

