function byTagName(node, tagName) {
    var X = [];
    tagName = tagName.toLowerCase();
  
    function search(node) {
      for (let i = 0; i < node.childNodes.length; i++) {
        let child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE) {
          if (child.nodeName == tagName) match.push(child);
          search(child);
        }
      }
    }
  
    search(node);
    return X;
  }
  
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);