// ==UserScript==
// @name    Tooltip on 'a' tags
// @version 1.2
// @author  Gabriel G
// ==/UserScript==

var titleOn = true;
var tooltip = false; //for future use
var resolveUrl = false; //for future use

if ( titleOn === true){
   var element = document.getElementsByTagName("a");
   for ( var i = 0; i< element.length; i++) {
      	element[i].setAttribute("title", element[i].href);
      }
}
