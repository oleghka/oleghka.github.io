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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_lavka_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").show();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.$("gildia_all").hide();
         
         
         setTimeout(function(){sym.getSymbol("lavka_flash").play();}, 300);
         setTimeout(function(){sym.getSymbol("home_flash").play();}, 600);
         setTimeout(function(){sym.getSymbol("zerkalo_flash").play();}, 900);
         setTimeout(function(){sym.getSymbol("turma_flash").play();}, 1200);
         setTimeout(function(){sym.getSymbol("kuznica_flash").play();}, 1500);
         setTimeout(function(){sym.getSymbol("arena_flash").play();}, 1800);
         setTimeout(function(){sym.getSymbol("prikluchenia_flash").play();}, 2100);
         setTimeout(function(){sym.getSymbol("bashna_flash").play();}, 2400);
         setTimeout(function(){sym.getSymbol("gildia_flash").play();}, 2700);
         setTimeout(function(){sym.$("gildia_all").show();}, 3100);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gildia_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").show();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").show();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kuznica_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").show();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bashna_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").show();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arena_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").show();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zerkalo_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").show();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_turma_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").show();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_prikluchenia_title}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").show();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("home").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("home").playReverse();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kuznica}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").show();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("kuznica").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kuznica}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("kuznica").playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bashna}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("bashna").playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bashna}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").show();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("bashna").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zerkalo}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").show();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("zerkalo").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zerkalo}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("zerkalo").playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arena}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("arena").playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_arena}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").show();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("arena").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gildia}", "mouseover", function(sym, e) {
         sym.$("gildia_all").show();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("gildia").play();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gildia}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("gildia").playReverse();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shop}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("shop").playReverse();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shop}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").show();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("shop").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_turma}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("turma").playReverse();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_turma}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").show();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").hide();
         
         sym.getSymbol("turma").play();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_prikluchenia}", "mouseover", function(sym, e) {
         sym.$("gildia_all").hide();
         sym.$("lavka_all").hide();
         sym.$("home_all").hide();
         sym.$("kuznica_all").hide();
         sym.$("zerkalo_all").hide();
         sym.$("turma_all").hide();
         sym.$("bashna_all").hide();
         sym.$("arena_all").hide();
         sym.$("prikluchenia_all").show();
         
         sym.getSymbol("prikluchenia").play();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_prikluchenia}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("prikluchenia").playReverse();
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'flash'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

   })("flash");
   //Edge symbol end:'flash'

   //=========================================================
   
   //Edge symbol: 'home'
   (function(symbolName) {   
   
   })("home");
   //Edge symbol end:'home'

   //=========================================================
   
   //Edge symbol: 'kuznica'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("kuznica");
   //Edge symbol end:'kuznica'

   //=========================================================
   
   //Edge symbol: 'bashna'
   (function(symbolName) {   
   
   })("bashna");
   //Edge symbol end:'bashna'

   //=========================================================
   
   //Edge symbol: 'zerkalo'
   (function(symbolName) {   
   
   })("zerkalo");
   //Edge symbol end:'zerkalo'

   //=========================================================
   
   //Edge symbol: 'arena'
   (function(symbolName) {   
   
   })("arena");
   //Edge symbol end:'arena'

   //=========================================================
   
   //Edge symbol: 'gildia'
   (function(symbolName) {   
   
   })("gildia");
   //Edge symbol end:'gildia'

   //=========================================================
   
   //Edge symbol: 'shop'
   (function(symbolName) {   
   
   })("shop");
   //Edge symbol end:'shop'

   //=========================================================
   
   //Edge symbol: 'turma'
   (function(symbolName) {   
   
   })("turma");
   //Edge symbol end:'turma'

   //=========================================================
   
   //Edge symbol: 'prikluchenia'
   (function(symbolName) {   
   
   })("prikluchenia");
   //Edge symbol end:'prikluchenia'

})(jQuery, AdobeEdge, "EDGE-130013235");