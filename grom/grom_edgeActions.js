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
      
      
      Symbol.bindElementAction(compId, symbolName, "${grom2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play an audio track 
         sym.$("grom")[0].play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${grom2}", "click", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play an audio track 
         sym.$("grom")[0].play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${grom2}", "touchstart", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play an audio track 
         sym.$("grom")[0].play();
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-99840995");