/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0px', '525px', '637px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
                        },
                        {
                            id: 'tooltip',
                            type: 'image',
                            rect: ['173px', '252px', '180px', '242px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tooltip.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['233px', '381px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['293px', '381px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '525px', '637px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid11",
                            "left",
                            0,
                            500,
                            "easeInQuad",
                            "${Rectangle}",
                            '233px',
                            '173px'
                        ],
                        [
                            "eid4",
                            "scaleX",
                            0,
                            500,
                            "easeInOutBack",
                            "${tooltip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "scaleY",
                            0,
                            500,
                            "easeInOutBack",
                            "${tooltip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            500,
                            "easeInOutBack",
                            "${tooltip}",
                            '252px',
                            '132px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            500,
                            "easeInOutBack",
                            "${tooltip}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            500,
                            "easeInQuad",
                            "${RectangleCopy}",
                            '293px',
                            '233px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("01_edgeActions.js");
})("EDGE-93181337");
