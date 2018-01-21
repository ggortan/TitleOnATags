// ==UserScript==
// @name    Tooltip on 'a' tags
// @version 1.1
// @author  Gabriel G
// ==/UserScript==

var titleOn = 1;
var tooltip = 0; //for future use
var resolveUrl = 0; //for future use

if (titleOn = 1){
   var element = document.getElementsByTagName("a");
   for ( var i = 0; i< elemento.length; i++) {
      	element[i].setAttribute("title", element[i].href);
      }
   }
  
