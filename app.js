const Display= document.querySelector(".display");

function Screen(input){
    Display.value= Display.value+input;
}

function sine() {
  let tempvalue = parseFloat(Display.value);
  Display.value= Math.sin((Math.PI / 180)*(tempvalue));
}

function cosine() {
  let tempvalue = parseFloat(Display.value);
  Display.value= Math.cos((Math.PI / 180)*(tempvalue));
}

function tangent() {
  let tempvalue = parseFloat(Display.value);
  Display.value= Math.tan((Math.PI / 180)*(tempvalue));
}

function asine() {
  let tempvalue = parseFloat(Display.value);
  Display.value= ((Math.asin(tempvalue))*( 180/Math.PI));
  Display.value+=" deg";
}

function acosine() {
  let tempvalue = parseFloat(Display.value);
  Display.value= ((Math.acos(tempvalue))*( 180/Math.PI));
  Display.value+=" deg";
}

function atangent() {
  let tempvalue = parseFloat(Display.value);
  Display.value= ((Math.atan(tempvalue))*( 180/Math.PI));
  Display.value+=" deg";
}

function sqrt() {
  let tempvalue = parseFloat(Display.value);
  Display.value= Math.sqrt(tempvalue);
}

function logBase10() {
  let value = parseFloat(Display.value);
  Display.value = Math.log10(value);
}
function PI() {
  Display.value += Math.PI;
}

function Screencancel(){
    Display.value="";
}

try {
    function evaluation(){
        let tempvalue=eval(Display.value);
        Display.value=tempvalue; 
    }
    
} catch (error) {
    alert("error!")
}

function Screenstyle(){
    Display.style.color="grey";
    Display.style.fontSize="2rem";
}
Screenstyle();
