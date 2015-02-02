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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousemove", function(sym, e) {
         sym.getSymbol("strelok").onMove( e.pageX, e.pageY );
         
         sym.getSymbol("celi").onMove( e.pageX, e.pageY );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.getSymbol("celi").onMove = function( posX, posY ){
            var girl = sym.getSymbol("celi");
         	timelineControl = Number(posX)*0.5;
         	sym.getSymbol("celi").stop(timelineControl);
         }
         
         
         sym.getSymbol("strelok").onMove = function( posX, posY ){
         	var girl = sym.getSymbol("strelok");
         	timelineControl = Number(posX)*0.5;
         	sym.getSymbol("strelok").stop(timelineControl);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'strelok'
   (function(symbolName) {   
   
   })("strelok");
   //Edge symbol end:'strelok'

   //=========================================================
   
   //Edge symbol: 'celi'
   (function(symbolName) {   
   
   })("celi");
   //Edge symbol end:'celi'

   //=========================================================
   
   //Edge symbol: 'fon'
   (function(symbolName) {   
   
   })("fon");
   //Edge symbol end:'fon'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-31105628");