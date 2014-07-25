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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_control}", "touchmove", function(sym, e) {
         // insert code to be run when a user drags an object (for touch devices only)
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__1}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__3}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-166646669");