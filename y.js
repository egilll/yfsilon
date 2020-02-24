/*

  Öll i yfir í y

*/
(function() {
  function skipta(input) {
    return input
      .replace(/(i)/g, 'y')
      .replace(/(I)/g, 'Y')
      .replace(/(í)/g, 'ý')
      .replace(/(Ý)/g, 'Ý')
  }
  function findText(node) {
    if (node.nodeType == 3) {
      node.data = skipta(node.data)
    }
    if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
      for (var i = 0; i < node.childNodes.length; i++) {
        findText(node.childNodes[i])
      }
    }
  }
  findText(document.body)
})()
