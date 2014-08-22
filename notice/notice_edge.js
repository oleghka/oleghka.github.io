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
                id: 'page',
                type: 'image',
                rect: ['0px', '0px','1600px','1400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page.png",'0px','0px']
            },
            {
                id: 'notice',
                type: 'rect',
                rect: ['198', '245','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'notice',
                symbolName: 'notice',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '2000px'],
                ["style", "width", '1600px']
            ],
            "${_page}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_notice}": [
                ["style", "left", '1198px'],
                ["style", "top", '37px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "eid103", tween: [ "style", "${_notice}", "top", '37px', { fromValue: '37px'}], position: 0, duration: 0, easing: "easeInBack" },
                { id: "eid105", tween: [ "style", "${_notice}", "left", '1198px', { fromValue: '1198px'}], position: 0, duration: 0, easing: "easeInBack" }            ]
        }
    }
},
"notice": {
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
                    id: 'substrate5',
                    type: 'image',
                    rect: ['60px', '0px', '250px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/substrate.png', '-252.8359375px', '0px']
                },
                {
                    id: 'badge3',
                    type: 'image',
                    rect: ['242px', '0px', '120px', '120px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/badge.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_badge3}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '242px'],
                ["subproperty", "filter.blur", '300px']
            ],
            "${_substrate5}": [
                ["style", "top", '0px'],
                ["style", "left", '303px'],
                ["style", "opacity", '0'],
                ["style", "background-position", [-250.632813,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "filter.blur", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '310px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid94", tween: [ "style", "${_substrate5}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeInBack" },
                { id: "eid117", tween: [ "style", "${_substrate5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInBack" },
                { id: "eid114", tween: [ "style", "${_badge3}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_badge3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500 },
                { id: "eid140", tween: [ "subproperty", "${_substrate5}", "filter.blur", '300px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid88", tween: [ "style", "${_substrate5}", "background-position", [-5.04296925,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-250.632813,0]}], position: 1000, duration: 1000, easing: "easeInBack" },
                { id: "eid90", tween: [ "style", "${_substrate5}", "left", '60px', { fromValue: '303px'}], position: 1000, duration: 1000, easing: "easeInBack" },
                { id: "eid44", tween: [ "transform", "${_badge3}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid47", tween: [ "style", "${_badge3}", "left", '0px', { fromValue: '242px'}], position: 1000, duration: 1000, easing: "easeInBack" },
                { id: "eid38", tween: [ "subproperty", "${_badge3}", "filter.blur", '0px', { fromValue: '300px'}], position: 0, duration: 1000 },
                { id: "eid138", tween: [ "subproperty", "${_badge3}", "filter.blur", '300px', { fromValue: '0px'}], position: 2000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid43", tween: [ "transform", "${_badge3}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-349664826");
