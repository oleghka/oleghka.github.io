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
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_01',
                type: 'image',
                rect: ['0px', '0px','1009px','696px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"01.png",'0px','0px']
            },
            {
                id: '_02',
                type: 'image',
                rect: ['0px', '0px','1009px','696px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"02.png",'0px','0px']
            },
            {
                id: '_03',
                type: 'image',
                rect: ['0px', '0px','1009px','696px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"03.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'rect',
                rect: ['434px', '648px','40px','37px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_2',
                type: 'rect',
                rect: ['480px', '648px','40px','37px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_3',
                type: 'rect',
                rect: ['525px', '648px','40px','37px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'control',
                type: 'image',
                rect: ['445px', '655px','17px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"control.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__3}": [
                ["style", "top", '648px'],
                ["style", "height", '37px'],
                ["style", "opacity", '0'],
                ["style", "left", '525px'],
                ["style", "width", '40px']
            ],
            "${__1}": [
                ["style", "top", '648px'],
                ["style", "height", '37px'],
                ["style", "opacity", '0'],
                ["style", "left", '434px'],
                ["style", "width", '40px']
            ],
            "${__02}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${__01}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1009px'],
                ["style", "height", '1000px'],
                ["style", "overflow", 'hidden']
            ],
            "${__03}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${__2}": [
                ["style", "top", '648px'],
                ["style", "height", '37px'],
                ["style", "opacity", '0'],
                ["style", "left", '480px'],
                ["style", "width", '40px']
            ],
            "${_control}": [
                ["style", "left", '445px'],
                ["style", "top", '655px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid8", tween: [ "style", "${__03}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500 },
                { id: "eid16", tween: [ "style", "${_control}", "left", '491px', { fromValue: '445px'}], position: 0, duration: 500 },
                { id: "eid17", tween: [ "style", "${_control}", "left", '535px', { fromValue: '491px'}], position: 500, duration: 500 },
                { id: "eid5", tween: [ "style", "${__02}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-166646669");
