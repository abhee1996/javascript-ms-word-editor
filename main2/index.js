function getTextNodesIn(node, includeWhitespaceNodes) {
    var textNodes = [], whitespace = /^\s*$/;

    function getTextNodes(node) {
        if (node.nodeType == 3) {
            if (includeWhitespaceNodes || !whitespace.test(node.nodeValue)) {
                textNodes.push(node);
            }
        } else {
            for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }

    getTextNodes(node);
    return textNodes;
}

var textnodes = getTextNodesIn($("#demo")[0]);
for(var i=0; i < textnodes.length; i++){
    if($(textnodes[i]).parent().is("#demo")){
        $(textnodes[i]).wrap("<p>");
    }
}