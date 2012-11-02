
/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/

function Fsubmit(row,col)

{
        
        sessionStorage.column = col;
            
        sessionStorage.row = row;
                
        window.location = "./../illustration/illustration.html";
}
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_8X7}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         
         sessionStorage.row = 8;
         sessionStorage.column = 7;
         window.open("./../illustration/illustration.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_8X6}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         
     //    sessionStorage.row = 8;
       //  sessionStorage.column = 6;
      //   window.open("./../illustration/illustration.html", "_self");
        Fsubmit(8,6);
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_8X6}", "mouseover", function(sym, e) {
         sym.play("lbl_8x6");
         
         // Get the jQuery handle for the element an Edge Animate Symbol Javascript Obj
         $(sym.getSymbolElement("btn_8X6")).css('cursor','pointer');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_9X6}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         
         sessionStorage.row = 9;
         sessionStorage.column = 6;
         window.open("./../illustration/illustration.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_9X6}", "mouseover", function(sym, e) {
         sym.play("lbl_9x6");
         
         // Get the jQuery handle for the element an Edge Animate Symbol Javascript Obj
         $(sym.getSymbolElement("btn_9X6")).css('cursor','pointer');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_8X9}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         
         sessionStorage.row = 8;
         sessionStorage.column = 9;
         window.open("./../illustration/illustration.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_8X9}", "mouseover", function(sym, e) {
         sym.play("lbl_8x9");
         
         // Get the jQuery handle for the element an Edge Animate Symbol Javascript Obj
         $(sym.getSymbolElement("btn_8X9")).css('cursor','pointer');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_8X7}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("lbl_8x7");
         
         // Get the jQuery handle for the element an Edge Animate Symbol Javascript Obj
         $(sym.getSymbolElement("btn_8X7")).css('cursor','pointer');
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-1914995");
