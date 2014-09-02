/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','1240px','705px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'plashka',
                type: 'image',
                rect: ['836px', '36px','325px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"plashka.png",'0px','0px']
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['1092px', '55px','128px','128px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(252,202,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_05',
                type: 'image',
                rect: ['1128px', '114px','57px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"05.png",'0px','0px']
            },
            {
                id: '_04',
                type: 'image',
                rect: ['1155px', '103px','3px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"04.png",'0px','0px']
            },
            {
                id: 'mask2',
                type: 'image',
                rect: ['1092px', '0px','128px','118px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mask2.png",'0px','0px']
            },
            {
                id: 'verPrav3',
                type: 'image',
                rect: ['1155px', '75px','621px','26px','auto', 'auto'],
                clip: ['rect(0px 27px 26px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"verPrav3.png",'27px','0px']
            },
            {
                id: 'verLev3',
                type: 'image',
                rect: ['1137px', '83px','357px','20px','auto', 'auto'],
                clip: ['rect(0px 21px 20px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"verLev3.png",'0px','0px']
            },
            {
                id: 'verNiz',
                type: 'image',
                rect: ['1113px', '93px','83px','145px','auto', 'auto'],
                clip: ['rect(0px 83px 13px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"verNiz.png",'0px','0px']
            },
            {
                id: 'text',
                type: 'image',
                rect: ['884px', '82px','190px','73px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"text.png",'0px','0px']
            },
            {
                id: 'x',
                type: 'image',
                rect: ['1210px', '55px','10px','10px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"x.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['457px', '760px','auto','auto','auto', 'auto'],
                text: "Чтобы запустить аимацию, нажми в любое место",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(254,49,0,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_verPrav3}": [
                ["style", "top", '75px'],
                ["style", "background-position", [27,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [0,27,26,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1155px']
            ],
            "${_Ellipse2}": [
                ["style", "top", '55px'],
                ["color", "background-color", 'rgba(252,202,0,1.00)'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '1092px']
            ],
            "${_plashka}": [
                ["style", "top", '36px'],
                ["style", "opacity", '1'],
                ["style", "left", '836px'],
                ["style", "background-position", [328.85546875,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text}": [
                ["style", "top", '760px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(254,49,0,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '457px'],
                ["style", "font-size", '14px']
            ],
            "${_x}": [
                ["style", "top", '55px'],
                ["style", "opacity", '0'],
                ["style", "left", '1210px'],
                ["style", "cursor", 'pointer']
            ],
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_mask2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '1092px']
            ],
            "${_verLev3}": [
                ["style", "top", '83px'],
                ["style", "background-position", [21,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [0,21,20,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1137px']
            ],
            "${_verNiz}": [
                ["style", "top", '93px'],
                ["style", "background-position", [0,12], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "clip", [0,83,12,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '1113px']
            ],
            "${__04}": [
                ["style", "top", '103px'],
                ["style", "opacity", '1'],
                ["style", "left", '1155px'],
                ["style", "clip", [56.48095703125,3,54,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_text}": [
                ["style", "top", '82px'],
                ["style", "opacity", '0'],
                ["style", "left", '884px']
            ],
            "${__05}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '1128px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1240px'],
                ["style", "height", '800px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: false,
            timeline: [
                { id: "eid252", tween: [ "style", "${_plashka}", "opacity", '0', { fromValue: '1'}], position: 3167, duration: 167 },
                { id: "eid158", tween: [ "style", "${_verLev3}", "background-position", [21,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21,0]}], position: 1733, duration: 0 },
                { id: "eid159", tween: [ "style", "${_verLev3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [21,0]}], position: 1767, duration: 0 },
                { id: "eid160", tween: [ "style", "${_verLev3}", "background-position", [-21,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1800, duration: 0 },
                { id: "eid161", tween: [ "style", "${_verLev3}", "background-position", [-42,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-21,0]}], position: 1833, duration: 0 },
                { id: "eid162", tween: [ "style", "${_verLev3}", "background-position", [-63,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-42,0]}], position: 1867, duration: 0 },
                { id: "eid163", tween: [ "style", "${_verLev3}", "background-position", [-84,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-63,0]}], position: 1900, duration: 0 },
                { id: "eid164", tween: [ "style", "${_verLev3}", "background-position", [-105,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-84,0]}], position: 1933, duration: 0 },
                { id: "eid165", tween: [ "style", "${_verLev3}", "background-position", [-126,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-105,0]}], position: 1967, duration: 0 },
                { id: "eid166", tween: [ "style", "${_verLev3}", "background-position", [-147,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-126,0]}], position: 2000, duration: 0 },
                { id: "eid167", tween: [ "style", "${_verLev3}", "background-position", [-168,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-147,0]}], position: 2033, duration: 0 },
                { id: "eid168", tween: [ "style", "${_verLev3}", "background-position", [-189,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-168,0]}], position: 2067, duration: 0 },
                { id: "eid169", tween: [ "style", "${_verLev3}", "background-position", [-210,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-189,0]}], position: 2100, duration: 0 },
                { id: "eid170", tween: [ "style", "${_verLev3}", "background-position", [-231,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-210,0]}], position: 2133, duration: 0 },
                { id: "eid171", tween: [ "style", "${_verLev3}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-231,0]}], position: 2167, duration: 0 },
                { id: "eid172", tween: [ "style", "${_verLev3}", "background-position", [-273,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 2200, duration: 0 },
                { id: "eid173", tween: [ "style", "${_verLev3}", "background-position", [-294,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-273,0]}], position: 2233, duration: 0 },
                { id: "eid174", tween: [ "style", "${_verLev3}", "background-position", [-315,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-294,0]}], position: 2267, duration: 0 },
                { id: "eid175", tween: [ "style", "${_verLev3}", "background-position", [-336,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-315,0]}], position: 2300, duration: 0 },
                { id: "eid3", tween: [ "style", "${__05}", "top", '103px', { fromValue: '0px'}], position: 500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid259", tween: [ "style", "${__04}", "opacity", '0', { fromValue: '1'}], position: 3333, duration: 167 },
                { id: "eid257", tween: [ "style", "${_verLev3}", "opacity", '0', { fromValue: '1'}], position: 3333, duration: 167 },
                { id: "eid112", tween: [ "style", "${_verPrav3}", "background-position", [27,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [27,0]}], position: 1733, duration: 0 },
                { id: "eid113", tween: [ "style", "${_verPrav3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [27,0]}], position: 1767, duration: 0 },
                { id: "eid114", tween: [ "style", "${_verPrav3}", "background-position", [-27,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1800, duration: 0 },
                { id: "eid115", tween: [ "style", "${_verPrav3}", "background-position", [-54,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-27,0]}], position: 1833, duration: 0 },
                { id: "eid116", tween: [ "style", "${_verPrav3}", "background-position", [-81,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-54,0]}], position: 1867, duration: 0 },
                { id: "eid117", tween: [ "style", "${_verPrav3}", "background-position", [-108,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-81,0]}], position: 1900, duration: 0 },
                { id: "eid118", tween: [ "style", "${_verPrav3}", "background-position", [-135,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-108,0]}], position: 1933, duration: 0 },
                { id: "eid119", tween: [ "style", "${_verPrav3}", "background-position", [-162,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-135,0]}], position: 1967, duration: 0 },
                { id: "eid120", tween: [ "style", "${_verPrav3}", "background-position", [-189,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-162,0]}], position: 2000, duration: 0 },
                { id: "eid121", tween: [ "style", "${_verPrav3}", "background-position", [-216,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-189,0]}], position: 2033, duration: 0 },
                { id: "eid122", tween: [ "style", "${_verPrav3}", "background-position", [-243,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-216,0]}], position: 2067, duration: 0 },
                { id: "eid123", tween: [ "style", "${_verPrav3}", "background-position", [-270,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-243,0]}], position: 2100, duration: 0 },
                { id: "eid124", tween: [ "style", "${_verPrav3}", "background-position", [-297,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-270,0]}], position: 2133, duration: 0 },
                { id: "eid125", tween: [ "style", "${_verPrav3}", "background-position", [-324,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-297,0]}], position: 2167, duration: 0 },
                { id: "eid126", tween: [ "style", "${_verPrav3}", "background-position", [-351,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-324,0]}], position: 2200, duration: 0 },
                { id: "eid127", tween: [ "style", "${_verPrav3}", "background-position", [-378,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-351,0]}], position: 2233, duration: 0 },
                { id: "eid128", tween: [ "style", "${_verPrav3}", "background-position", [-405,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-378,0]}], position: 2267, duration: 0 },
                { id: "eid129", tween: [ "style", "${_verPrav3}", "background-position", [-432,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-405,0]}], position: 2300, duration: 0 },
                { id: "eid130", tween: [ "style", "${_verPrav3}", "background-position", [-459,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-432,0]}], position: 2333, duration: 0 },
                { id: "eid131", tween: [ "style", "${_verPrav3}", "background-position", [-486,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-459,0]}], position: 2367, duration: 0 },
                { id: "eid132", tween: [ "style", "${_verPrav3}", "background-position", [-513,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-486,0]}], position: 2400, duration: 0 },
                { id: "eid258", tween: [ "style", "${_verPrav3}", "opacity", '0', { fromValue: '1'}], position: 3333, duration: 167 },
                { id: "eid260", tween: [ "style", "${__05}", "opacity", '0', { fromValue: '1'}], position: 3333, duration: 167 },
                { id: "eid212", tween: [ "style", "${_x}", "opacity", '1', { fromValue: '0'}], position: 2933, duration: 234 },
                { id: "eid255", tween: [ "style", "${_x}", "opacity", '0', { fromValue: '1'}], position: 3167, duration: 167 },
                { id: "eid253", tween: [ "style", "${_Ellipse2}", "opacity", '0', { fromValue: '1'}], position: 3333, duration: 167 },
                { id: "eid254", tween: [ "style", "${_verNiz}", "opacity", '0', { fromValue: '1'}], position: 3333, duration: 167 },
                { id: "eid188", tween: [ "style", "${_verNiz}", "background-position", [0,12], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,12]}], position: 1733, duration: 0 },
                { id: "eid189", tween: [ "style", "${_verNiz}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,12]}], position: 1767, duration: 0 },
                { id: "eid190", tween: [ "style", "${_verNiz}", "background-position", [0,-12], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1800, duration: 0 },
                { id: "eid191", tween: [ "style", "${_verNiz}", "background-position", [0,-24], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-12]}], position: 1833, duration: 0 },
                { id: "eid192", tween: [ "style", "${_verNiz}", "background-position", [0,-36], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-24]}], position: 1867, duration: 0 },
                { id: "eid193", tween: [ "style", "${_verNiz}", "background-position", [0,-48], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-36]}], position: 1900, duration: 0 },
                { id: "eid194", tween: [ "style", "${_verNiz}", "background-position", [0,-60], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-48]}], position: 1933, duration: 0 },
                { id: "eid195", tween: [ "style", "${_verNiz}", "background-position", [0,-72], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-60]}], position: 1967, duration: 0 },
                { id: "eid196", tween: [ "style", "${_verNiz}", "background-position", [0,-84], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-72]}], position: 2000, duration: 0 },
                { id: "eid197", tween: [ "style", "${_verNiz}", "background-position", [0,-96], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-84]}], position: 2033, duration: 0 },
                { id: "eid198", tween: [ "style", "${_verNiz}", "background-position", [0,-108], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-96]}], position: 2067, duration: 0 },
                { id: "eid199", tween: [ "style", "${_verNiz}", "background-position", [0,-120], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-108]}], position: 2100, duration: 0 },
                { id: "eid200", tween: [ "style", "${_verNiz}", "background-position", [0,-132], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-120]}], position: 2133, duration: 0 },
                { id: "eid8", tween: [ "style", "${__04}", "clip", [0,3,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [56.48095703125,3,54,0]}], position: 1500, duration: 233 },
                { id: "eid61", tween: [ "transform", "${_Ellipse2}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuart" },
                { id: "eid205", tween: [ "style", "${_plashka}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [328.85546875,0]}], position: 2466, duration: 234 },
                { id: "eid202", tween: [ "style", "${_mask2}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid201", tween: [ "style", "${_mask2}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 0 },
                { id: "eid62", tween: [ "transform", "${_Ellipse2}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuart" },
                { id: "eid210", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0'}], position: 2700, duration: 233 },
                { id: "eid256", tween: [ "style", "${_text}", "opacity", '0', { fromValue: '1'}], position: 3167, duration: 167 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-28761772");
