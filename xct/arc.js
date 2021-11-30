function getSelectionText() {
    var text = ""; // textof undefined
    //=>  document.activeElement Get the currently focused element in the document:
    var activeElmnt = document.activeElement;
    var activeElTagName = activeElmnt ? activeElmnt.tagName.toLowerCase() : null;
    if (
  (activeElTagName == "textarea" && /^(?:text|search|password|tel|url)$/i.test(activeElmnt.type)) && (typeof activeElmnt.selectionStart == "number")
      // ==>       /w3schools/i	A case-insensitive regular expression
      //==>        ^n	Matches any string with n at the beginning of it
      //=>         n?	Matches any string that contains zero or one occurrences of n
      //=>         (x|y)	Find any of the alternatives specified
      //=>         The $ quantifier matches any string with n at the end of it.
      //=>         Use the ^ quantifier to match any string with n at the BEGINNING of it.
      //=>         test()	Tests for a match in a string. Returns true or false
        //=>       You can use the typeof operator to find the data type of a JavaScript variable.
    ) {
      // console.log('active element value:=> ',activeElmnt.value);
      text = activeElmnt.value.slice(activeElmnt.selectionStart, activeElmnt.selectionEnd);

    } 
    //else if (window.getSelection) {
    //   console.log('first else')
    //   //=>         getSelection()	Returns a Selection object representing the range of text selected by the user
    //   text = window.getSelection().toString();
    // }
    return text;
  }


















  // focusData.addEventListener('keydown',function(){
//   if (e.keyCode === 13) {
//     // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
//     document.execCommand('insertHTML', false, '<br/>');
//     // prevent the default behaviour of return key pressed
//     return true;
// }
// var bodyText = document.querySelector('#result');
// var divNode = document.createElement('div');
// var newRandomIdDIv = "tablediv" + Math.random(); 
// divNode.setAttribute(`Id`,`${newRandomIdDIv}`)
// var firstLine = bodyText.firstChild;
// divNode.appendChild(firstLine);
// bodyText.prepend(divNode);
//})
// var bodyText = document.querySelector('#result');
// var firstLine = bodyText.firstChild;
// var LastLine = bodyText.lastChild;
// var sublingwords = bodyText.nextSibling

// console.log(`firstLine`, firstLine)
// console.log(`LastLine`, LastLine)
// console.log(`sublingwords`, sublingwords)


























 
// document.onchange = function () {
//     document.getElementById("result").innerHTML = getSelectionText();
//   };
  
//   const focusData = document
//     .getElementById("editor")
    
//     focusData.addEventListener("keydown", function(event) {
//       if (event.ctrlKey && event.key === "b") {
//         console.log("Undo");
//         // document.getElementById("result").innerHTML = `<b>${focusData}</b>`+`<b>Control z</b> is used for the UNDO Operation.`;
//         document.getElementById("result").innerHTML =`<b>Control b</b> is used for the UNDO Operation.`;
//       }
//     });
  
//   window.onload = function () {
//     document.getElementById("editor").focus();
//   };

var myFrame = document.getElementById("result")
function updateIframe() {
  var textareaValue = document.getElementById("emptyline").value;

  myFrame.innerHTML = textareaValue;

}


   var focusData = document.getElementById("emptyline")

   

  focusData.addEventListener("keyup", function (event) {

    if (event.ctrlKey && event.key === "b") {
      focusData.innerHTML ="<b>" + `${getSelectionText()}` + "</b>"
      
    }
    console.log(`focusData.value:=>`, focusData.value)
    console.log(`getSelectionText():`, getSelectionText())
  })
  console.log(`getSelectionText():`, getSelectionText())

  
  
  window.onload = function () {
    document.getElementById("emptyline").focus();
  };

