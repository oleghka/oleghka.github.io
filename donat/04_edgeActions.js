/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${card}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         
         sym.getSymbol("button").play();
         
         
         sym.getSymbol("light").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         sym.getSymbol("light").playReverse();
         
         sym.playReverse();
         
         
         sym.getSymbol("button").playReverse();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'light'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play(1000);

      });
      //Edge binding end

   })("light");
   //Edge symbol end:'light'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
   
   })("button");
   //Edge symbol end:'button'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-217745927");