
//mouseOver: this function changes the text color to red.  It is called on a mouse over event
//for menu items.
function mouseOver(ob){
  ob.style.color = 'red';
}

//mouseOut: this function changes the text color to black.  It is called on a mouse out event
//for menu items
function mouseOut(ob){
  ob.style.color = 'black';
}

//openPage: this function changes the src property of the iframe object so that it displays
//the requested page.  It also displays an icon idicating in the menu which page
//the user is currently viewing
function openPage(page, index){
  frame = document.getElementsByClassName('frame');
  frame[0].src = page;
  pointer = document.getElementsByClassName('pointer');
  var i;
  for (i = 0; i < pointer.length; i++) {          //this loop sets all pointer images
    pointer[i].style.visibility = "hidden";       //to hidden
  }
  pointer[index].style.visibility = "visible";    //Sets the current pointer image to visable
}
