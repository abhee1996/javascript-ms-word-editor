// function getSelectionText() {
//     var text = ""; // textof undefined
//     //=>  document.activeElement Get the currently focused element in the document:
//     var activeElmnt = document.activeElement;
//     var activeElTagName = activeElmnt ? activeElmnt.tagName.toLowerCase() : null;
//     if (
      (activeElTagName == "textarea" && /^(?:text|search|password|tel|url)$/i.test(activeElmnt.type)) && (typeof activeElmnt.selectionStart == "number")
//       // ==>       /w3schools/i	A case-insensitive regular expression
//       //==>        ^n	Matches any string with n at the beginning of it
//       //=>         n?	Matches any string that contains zero or one occurrences of n
//       //=>         (x|y)	Find any of the alternatives specified
//       //=>         The $ quantifier matches any string with n at the end of it.
//       //=>         Use the ^ quantifier to match any string with n at the BEGINNING of it.
//       //=>         test()	Tests for a match in a string. Returns true or false
//         //=>       You can use the typeof operator to find the data type of a JavaScript variable.
//     ) {
//       text = activeElmnt.value.slice(activeElmnt.selectionStart, activeElmnt.selectionEnd);
//     } else if (window.getSelection) {
//       //=>         getSelection()	Returns a Selection object representing the range of text selected by the user
//       text = window.getSelection().toString();
//     }
//     return text;
//   }
  
 
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
// function getSelectionText() {
//         var text = "";
//         if (window.getSelection) {
//             text = window.getSelection().text;
//         } else if (document.selection && document.selection.type != "Control") {
//             text = document.selection.createRange().text;
//         }
//         return text;
//     }
var myFrame = document.getElementById("result")
function updateIframe() {
  var textareaValue = document.getElementById("emptyline").value;

  myFrame.innerHTML = textareaValue;

}
function getSelectionText() {
  var text = ""; 
  var activeElmnt = document.activeElement;
  var activeElTagName = activeElmnt ? activeElmnt.tagName.toLowerCase() : null;
  if (
    (activeElTagName == "textarea" 
    ) 
    && (typeof activeElmnt.selectionStart == "number")
    ) {
    text = activeElmnt.value.slice(activeElmnt.selectionStart, activeElmnt.selectionEnd);
  } else if (window.getSelection) {
    text = window.getSelection().toString();
  }
  return text;
} 


   // var selection;
    //selection = getSelectionText();
   var focusData = document.getElementById("emptyline")

   // document.onmouseup = document.onkeyup = document.onselectionchange = function() {
  //   document.onchange = document.onclick = function() {
  //     console.log("select ", getSelectionText())
  //     if( $('#emptyline').is(":focus")){
      
  //       if(getSelectionText().length > 0){
  //         //i'm showing that in here.
  //       }
        
  //     }
      
  // };  

  focusData.addEventListener("keyup", function (event) {

    if (event.ctrlKey && event.key === "b") {
      
      
      myFrame.innerHTML = `${focusData.value}`;//+`${getSelectionText()}`;
      focusData.innerHTML ="<b>" + `${getSelectionText()}` + "</b>"
    }

  })
 

  
  
  window.onload = function () {
    document.getElementById("emptyline").focus();
  };



  
  
  //   function replaceSelectionWithHtml(html) {
  //       var range;
  //       if (window.getSelection && window.getSelection().getRangeAt) {
  //           range = window.getSelection().getRangeAt(0);
  //           range.deleteContents();
  //           var div = document.createElement("div");
  //           div.innerHTML = html;
  //           var frag = document.createDocumentFragment(), child;
  //           while ( (child = div.firstChild) ) {
  //               frag.appendChild(child);
  //           }
  //           range.insertNode(frag);
  //       } else if (document.selection && document.selection.createRange) {
  //           range = document.selection.createRange();
  //           range.pasteHTML(html);
  //       }
  //   }
  
  
  
  // $('span #bold-text').click(function(e){
  //     console.log("Buttonselect ", getSelectionText())
  
  //       //alert("Selection: " + getSelectionText());
  //       replaceSelectionWithHtml("<b>" + getSelectionText() + "</b>");
  //      });
    
    
    
function disableCtrlCombination(e){
  var blockKeys =['u','s']
  var key;
  var isCtrl;
  if(window.event){
    key = window.event.keyCode
    isCtrlKey = window.event.ctrlKey
    if(idCtrlKey){
      isCtrl = true
    } 
    else{
      isCtrl = false
    }
  }else{
    key =e.which;
    if(e.ctrlKey){
      isCtrl =true
    }
    else{
      isCtrl = false
    }
    
  }
  //
  if(isCtrl){
    for(i= 0 ; i<blockKeys.length ; i++){
      if(blockKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()){
        alert('key combination ctrl +'+ String.fromCharCode(key)+ 'has been disabled')
      }
    }
  }
  return false
}

//multi split nested for loop
for (var i = 0; i < Lbreak.length; i++) {
  row =  Lbreak[i].split('/[ ,]+/') 
  console.log('string i',row);
    arrRow =[...row] 
       console.log('arrRow',arrRow);

  if ("undefined" != typeof(row)) {
    for (var j = 0; j < row.length; j++) {
      cell = row[j].split('/[ ,]+/');
      //console.log('string j',cell);
     /*  if ("undefined" != typeof(dateadded)) {
        for (var k = 0; k < dateadded.length; k++) {
          taskname = dateadded[k];
          console.log('string k',taskname);
        }
      } */
    }
  }

}

function addBold(){
 
  if(window.getSelection().focusNode.parentElement.closest("#displaytext").id != "displaytext") return;
  
   
    const selection = window.getSelection().getRangeAt(0);
    
    let selectedParent = selection.commonAncestorContainer.parentElement;
    let mainParent = selectedParent;
    
    if(selectedParent.closest("b"))
    {
    //Unbold
      var text = document.createTextNode(selectedParent.textContent);
      mainParent = selectedParent.parentElement;
      mainParent.insertBefore(text, selectedParent);
      mainParent.removeChild(selectedParent);
      mainParent.normalize();
    }
    else
    {
      const span = document.createElement("b");
      span.appendChild(selection.extractContents());
      selection.insertNode(span);
      mainParent.normalize();
    }
    if (window.getSelection) {
      if (window.getSelection().empty) {  // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {  // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {  // IE?
      document.selection.empty();
    }
  };