var tg = -1;
function zipitoggleChat()
{
  var closed = document.querySelector('#zipi-chatbox #floatbutton .closed');
  var open = document.querySelector('#zipi-chatbox #floatbutton .opened');
  var chat = document.querySelector('#zipi-chatbox #chatflow');
  var popup = document.querySelector("#zipi-chatbox #popup_wrapper");
  
  // var toggler = document.getElementsByClassName('credits');
  // toggler[0].innerHTML = "<h1>HI</h1>";
  checkClass(closed,'rotate');
  checkClass(open,'rotate');
  checkClass(chat,'chatframe');
  
  if(tg == 1)
  {
    document.getElementById("chatflow").style.display = "none";
  }
  else
  {
   document.getElementById("chatflow").style.display = "block"; 
  }
  
  tg*=-1;
}
function checkClass(element, className){
    if (!element || !className){
        return;
    }
    
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}
  