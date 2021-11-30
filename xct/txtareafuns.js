// function clickSub() {
//   var start = focusData.selectionStart
//   var end = focusData.selectionEnd
//   var clickBoldStr = focusData.innerText;
//   var markedText = focusData.innerText.slice(start, end)

//   var res = clickBoldStr.slice(0, start) + "<sub>" + markedText + "</sub>" + clickBoldStr.slice(end)
//   clickBoldStr = res
//   myFrame.innerHTML = clickBoldStr

// }
// function clickSup() {
//   var start = focusData.selectionStart
//   var end = focusData.selectionEnd
//   var markedText = focusData.innerText.slice(start, end)
//   var clickBoldStr = focusData.value;
//   var res = clickBoldStr.slice(0, start) + "<sup>" + markedText + "</sup>" + clickBoldStr.slice(end)
//   clickBoldStr = res
//   myFrame.innerHTML = clickBoldStr

//   focusData.value = clickBoldStr
// }
// function clickUnderline() {
//   var start = focusData.selectionStart
//   var end = focusData.selectionEnd
//   var markedText = focusData.innerText.slice(start, end)
//   var clickBoldStr = focusData.value;
//   var res = clickBoldStr.slice(0, start) + "<u>" + markedText + "</u>" + clickBoldStr.slice(end)
//   clickBoldStr = res
//   myFrame.innerHTML = clickBoldStr

//   focusData.value = clickBoldStr
// }
// function clickItalic() {
//   //alert("italic")

//   var clickBoldStr = focusData.innerText.value;
//   var start = clickBoldStr.selectionStart
//   var end = clickBoldStr.selectionEnd
//   var markedText = focusData.innerText.slice(start, end)

//   var res = clickBoldStr.slice(0, start) + "<i>" + markedText + "</i>" + clickBoldStr.slice(end)
//   clickBoldStr = res
//   myFrame.innerHTML = clickBoldStr

//   //focusData.value = clickBoldStr
// }
// function clickBold() {
//   var clickBoldStr = focusData.textContent;
//   console.log(`clickBoldStr`, clickBoldStr)
//   var sel = getSelection();
//   rng = sel.getRangeAt(0)
//   var start = rng.startOffset;
//   var end = rng.endOffset;
//   //var start = clickBoldStr.selectionStart//parseInt(clickBoldStr.selectionStart)//toString()
//   //var start = clickBoldStr.startOffset
//   console.log(`start`, start)
//   //var end = clickBoldStr.selectionEnd
//   console.log(`end`, end)

//   var markedText = clickBoldStr.slice(start, end)
//   console.log(`markedText`, markedText)

//   var res = clickBoldStr.slice(0, start) + "<b>" + markedText + "</b>" + clickBoldStr.slice(end)
//   console.log(`res`, res)

//   clickBoldStr = res
//   myFrame.innerHTML = clickBoldStr//.innerText
// }
// function clickTable() {
//   generateRows.focus();
//   var start = focusData.selectionStart
//   var end = focusData.selectionEnd
//   var markedText = focusData.innerText.slice(start, end)
//   var clkTableStr = focusData.value;
//   let lbreak = clkTableStr.substring(start, end).split('\n')
//   let res = ''
//   for (var i = 0; i < lbreak.length; i++) {
//     let row = lbreak[i].trim().split(',')
//     for (var j = 0; j < row?.length; j++) {
//       row[j] = `\t\t<td> item1 ${row[j]}  </td>\n`
//     }
//     row = `\t<tr>\n${row}\t</tr>\n`
//     res = res + row;
//   }
//   let tres = res.replace(/,/g, '')
//   res = clkTableStr.substring(0, start) + `<table>\n ${tres} </table>` + clkTableStr.substring(end)

//   clkTableStr = res
//   myFrame.innerHTML = clkTableStr
//   focusData.value = clkTableStr
// }





// function clickBold() {
//   //alert('bold')
//   //var clickBoldStr = focusData.textContent;
//   //var sel = getSelection();
//  if (window.getSelection().focusNode.parentElement.closest("#result").id != "result") return;

//   var sel = document.getSelection() //&& document.getSelection();

//   let selectedParent = sel.commonAncestorContainer.parentElement;
//   let mainParent = selectedParent.textContent;
//   //if (sel && sel.rangeCount == 0 && savedRange != null) {
//   //  sel.addRange(savedRange);
//   //}
//   //if (sel && sel.rangeCount > 0) {

//     //var rng = sel.getRangeAt(0)
//    // var start = rng.anchorOffset;//rng.startOffset;
//    // var end = rng.focusOffset;//rng.endOffset;

//     const boldtag = document.createElement("b");
//     boldtag.appendChild(sel.extractContents());
//     sel.insertNode(boldtag);
//     mainParent.normalize();

//     //var markedText = focusData.textContent.slice(start, end)
//     //console.log(`markedText`, markedText)
//     //var res = clickBoldStr.slice(0, start) + "<b>" + markedText + "</b>" + clickBoldStr.slice(end)
//     //clickBoldStr = res
//    // myFrame.innerHTML = clickBoldStr

//     //focusData.value = clickBoldStr
//   //}
// }
// function clickParagraph() {
//   var start = focusData.selectionStart
//   var end = focusData.selectionEnd
//   var markedText = focusData.value.slice(start, end)
//   var paraListStr = focusData.value;
//   res = paraListStr.slice(0, start) + `<p> ${markedText}</p> ` + paraListStr.slice(end)
//   paraListStr = res
//   myFrame.innerHTML = paraListStr
//   focusData.value = paraListStr
// }
