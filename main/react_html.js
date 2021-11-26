
var myFrame = document.getElementById("result")
console.log(`myFrame`, myFrame)
var focusData = document.getElementById("result")
//myFrame//document.getElementById("editor")
var rightClickTagMenu = document.getElementById('div-context-menu');
var rightClickTableMenu = document.getElementById('table-context-menu');
var generateRows = document.getElementById('numofrows')
var generateCols = document.getElementById('numofcols')

var tableGen = document.getElementById("tableGen")
//focusData.onclick = focusData.onselectionchange = focusData.onkeyup = focusData.onkeydown = focusData.onchange = updateIframe
document.onclick = document.onselectionchange = document.onkeyup = document.onkeydown = document.onchange = updateIframe;
function updateIframe() {
  //var textareaValue = focusData.value
  myFrame.innerHTML = focusData.value.innerText;
// var divNode = document.createElement('div');
//   var newRandomIdDIv = "tablediv" + Math.random(); 
//   divNode.setAttribute(`Id`,`${newRandomIdDIv}`)
//   var bodyText = document.querySelector('#result');
//   var firstLine = bodyText.firstChild;

//   divNode.appendChild(firstLine);
//   bodyText.prepend(divNode);
  console.log(`paramyFrame`, myFrame)

}

//$('div[contenteditable]').keydown(function(e) {
focusData.addEventListener('keydown',function(e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
        // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
        document.execCommand('insertHTML', false, '<br><br>');
        // prevent the default behaviour of return key pressed
        return false;
    }
});
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
function LoremIpsum() {

  var start = focusData.selectionStart
  var end = focusData.selectionEnd
  var markedText = focusData.innerText.slice(start, end)
  var lor = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ipsa eum deleniti eos? Ea explicabo ad rerum vel natus maiores tenetur, impedit dignissimos porro fugiat minima minus inventore iusto adipisci.'
  var dtxtStr = focusData.innerText
  let res = ''
  let loremtxt = res.replace('', lor)
  res = dtxtStr.slice(0, start) + `<div>${loremtxt} </div>` + dtxtStr.slice(end)
  dtxtStr = res
  myFrame.innerHTML = dtxtStr
}
function clickParagraph() {
  var start = focusData.selectionStart
  var end = focusData.selectionEnd
  var markedText = focusData.value.slice(start, end)
  var paraListStr = focusData.value;
  res = paraListStr.slice(0, start) + `<p> ${markedText}</p> ` + paraListStr.slice(end)
  paraListStr = res
  myFrame.innerHTML = paraListStr
  focusData.value = paraListStr
}

function clickSub() {
  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  console.log('select italic', selection)
  if (selectedParent.closest("sub")) {
    //Unbold
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const span = document.createElement("sub");
    span.appendChild(selection.extractContents());
    selection.insertNode(span);
    mainParent.normalize();
  }

};
function clickSup() {
  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  console.log('select sub', selection)
  if (selectedParent.closest("sup")) {
    //Unbold
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const span = document.createElement("sup");
    span.appendChild(selection.extractContents());
    selection.insertNode(span);
    mainParent.normalize();
  }

};
function clickUnderline() {
  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  console.log('select italic', selection)
  if (selectedParent.closest("u")) {
    //Unbold
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const span = document.createElement("u");
    span.appendChild(selection.extractContents());
    selection.insertNode(span);
    mainParent.normalize();
  }

};
function clickItalic() {
  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = window.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  console.log('select italic', selection)
  if (selectedParent.closest("i")) {
    //Unbold
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    const span = document.createElement("i");
    span.appendChild(selection.extractContents());
    selection.insertNode(span);
    mainParent.normalize();
  }

};
function clickBold() {

  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;


  const selection = document.getSelection().getRangeAt(0);

  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;

  console.log('selet', selection)

  if (selectedParent.closest("b")) {
    //Unbold
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();


  }

  else {
    const boldtag = document.createElement("b");
    boldtag.appendChild(selection.extractContents());
    selection.insertNode(boldtag);
    mainParent.normalize();
  }

};
focusData.addEventListener("keydown", function (event) {
  const CtrlKey = event.ctrlKey;
  const AltKey = event.altKey;
  const eventKey = event.key
  if (AltKey && eventKey === "b") {
    clickBold()
  }
  else if (AltKey && eventKey === "i") {
    clickItalic()
  }
  else if (AltKey && eventKey === "p") {
    clickParagraph()
  }
  else if (AltKey && eventKey === "u") {
    clickUnderline()
  }
  else if (AltKey && eventKey === "t") {
    clickTable()
  }
  else if (AltKey && eventKey === "[") {

    clickUnOList()
  }
  else if (AltKey && eventKey === "]") {
    clickOList()
  }
  else if (AltKey && eventKey === "l") {
    LoremIpsum()
  }

  else {


  }

})
document.body.onclick = function (e) {
  rightClickTagMenu.style.display = 'none';
}

rightClickTableMenu.style.display = 'none';

atags = `<a href="#">link</a>`
divtag = `<div class=""></div>`
tabletag = `<table>\n\t<tr>\n\t\t<td>item1</td>\n\t\t<td>item2</td>\n\t</tr>\n</table>`
rightClickTableMenu.addEventListener("click", function (e) {
  if (document.body) {
    rightClickTableMenu.style.display = 'block';
  }
  else {
    rightClickTableMenu.style.display = 'none';

  }
})
rightClickTagMenu.addEventListener("click", function (e) {
  var elmntId = e.target.id
  if (elmntId.startsWith("anchortag")) {
    focusData.innerText = atags
  } else if (elmntId.startsWith("tabletag")) {
    focusData.innerText = clickTable()
  }
  else if (elmntId.startsWith("divtag")) {
    focusData.innerText = divtag
  } else {
    rightClickTagMenu.style.display = 'none'
  }
})
document.oncontextmenu = function (e) {
  var elmnt = e.target.id
  if (elmnt.startsWith("result")) {
    e.preventDefault();
    rightClickTagMenu.style.left = e.pageX + 'px'
    rightClickTagMenu.style.top = e.pageY + 'px'
    rightClickTagMenu.style.display = 'block'
  }
  else {
    rightClickTagMenu.style.display = 'none'
  }
}
document.oncontextmenu = function (e) {
  var elmnt = e.target.id
  if (elmnt.startsWith("table")) {
    e.preventDefault();
    rightClickTableMenu.style.left = e.pageX + 'px'
    rightClickTableMenu.style.top = e.pageY + 'px'
    rightClickTableMenu.style.display = 'block'
    generateRows.focus()
  }
  else {
    rightClickTagMenu.style.display = 'none'
    rightClickTableMenu.style.display = 'none'
  }
}
var ulbtn = document.getElementById('unorderlist')
ulbtn.addEventListener('click',clickUnOList)
ulbtn.addEventListener('focus',clickUListHighlited)
function clickUListHighlited() {
  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  if (selectedParent.closest("ul")) {
    //remove unorderlist
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    ulbtn.removeEventListener('click',clickUnOList)

    var liNode = document.createElement("li");
    const ulNode = document.createElement("ul");
    liNode.appendChild(selection.extractContents());
    ulNode.appendChild(liNode);
    //selection.insertNode(liNode);

    selection.insertNode(ulNode);
    mainParent.normalize();
  }
}
function clickUnOList() {
  var ul = document.createElement("ul")
  var li = document.createElement("li");
  ul.appendChild(li);
  focusData.appendChild(ul)

}
var olistbtn = document.getElementById('orderlist')
olistbtn.addEventListener('click',clickOList)
olistbtn.addEventListener('focus',clickOListHighlited)
function clickOListHighlited() {
  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;
  const selection = document.getSelection().getRangeAt(0);
  let selectedParent = selection.commonAncestorContainer.parentElement;
  let mainParent = selectedParent.textContent;
  if (selectedParent.closest("ol")) {
    //remove unorderlist
    var text = document.createTextNode(selectedParent.textContent);
    mainParent = selectedParent.parentElement;
    mainParent.insertBefore(text, selectedParent);
    mainParent.removeChild(selectedParent);
    mainParent.normalize();
  }
  else {
    olistbtn.removeEventListener('click',clickOList)
    var liNode = document.createElement("li");
    const olNode = document.createElement("ol");
    liNode.appendChild(selection.extractContents());
    olNode.appendChild(liNode);
    //selection.insertNode(liNode);
    selection.insertNode(olNode);
    mainParent.normalize();
  }
}
function clickOList() {
  var ol = document.createElement("ol")
  var li = document.createElement("li");
  ol.appendChild(li);
  focusData.appendChild(ol)

}
function createTable(rw, cl) {
  //create div
  var divTableNode = document.createElement('div');
  var newRandomIdDIv = "newdiv" + Math.random(); //create unique id for div
  divTableNode.setAttribute(`Id`,`${newRandomIdDIv}`) //set an attribute of id unique in the div
  var tableNode = document.createElement("table")
    tableNode.classList.add('table')
    var newRandomIdDIv = "mewtablediv" + Math.random() + ""; 
   tableNode.setAttribute(`Id`,` ${newRandomIdDIv}  `)
   divTableNode.appendChild(tableNode);
  for (var r = 1; r <= rw; r++) {
    var trNode = document.createElement("tr");
    var newRandomIdDIv = "newtrdiv" + Math.random() + ""; 
    trNode.setAttribute(`Id`,` ${newRandomIdDIv}  `)
    divTableNode.appendChild(tableNode);
    tableNode.appendChild(trNode);
    for (var i = 1; i <= cl; i++) {
      var tdNode = document.createElement("td");
      tdNode.setAttribute(`class`,`col`) 
      tdNode.innerHTML = `cols ${i} `;
      trNode.appendChild(tdNode);
      tableNode.appendChild(trNode);
      divTableNode.appendChild(tableNode);
    }
  }
  return divTableNode.outerHTML
}

tableGen.addEventListener('click', function () {
  var rows = parseInt(generateRows.value)//generateRows.valueAsNumber
  var cols = parseInt(generateCols.value)//generateCols.valueAsNumber
  var table = createTable(rows, cols);
  var clickBoldStr = focusData.textContent;
//   console.log(`clickBoldStr`, clickBoldStr)
   var sel = document.getSelection();
   rng = sel.getRangeAt(0)
   var start = rng.startOffset;
   var end = rng.endOffset;
  //focusData.innerText = table 
  //myFrame.innerHTML = table
  
  myFrame.innerHTML = clickBoldStr.slice(end) + table
})
window.onload = function () {
  focusData.focus();
};



