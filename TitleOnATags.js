// ==UserScript==
// @name    Tooltip on 'a' tags
// @version 1.0
// @author  Gabriel G
// ==/UserScript==

var element = document.getElementsByTagName("a");
for ( var i = 0; i< elemento.length; i++) {
   	element[i].setAttribute("title", element[i].href);
  }
  
