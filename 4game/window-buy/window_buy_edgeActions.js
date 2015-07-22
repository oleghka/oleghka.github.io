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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'select'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         

      });
      //Edge binding end

   })("select");
   //Edge symbol end:'select'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-137753194");