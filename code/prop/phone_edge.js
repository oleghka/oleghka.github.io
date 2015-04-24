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
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'popup',
                            type: 'image',
                            rect: ['356px', '174px', '287px', '450px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"popup.png",'0px','0px']
                        },
                        {
                            id: 'call',
                            symbolName: 'call',
                            type: 'rect',
                            rect: ['443px', '240px', '101', '62', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(219,219,219,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "left",
                            1500,
                            0,
                            "easeOutBounce",
                            "${call}",
                            '443px',
                            '443px'
                        ],
                        [
                            "eid49",
                            "top",
                            1500,
                            0,
                            "easeOutBounce",
                            "${call}",
                            '240px',
                            '240px'
                        ]
                    ]
                }
            },
            "call": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-4px', '101px', '34px', 'auto', 'auto'],
                            id: 'trubka',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/trubka.png', '0px', '0px']
                        },
                        {
                            rect: ['8px', '9px', '90px', '53px', 'auto', 'auto'],
                            id: 'tel',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tel.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid39",
                            "left",
                            0,
                            250,
                            "easeOutBounce",
                            "${tel}",
                            '6px',
                            '5px'
                        ],
                        [
                            "eid42",
                            "left",
                            250,
                            250,
                            "easeOutBounce",
                            "${tel}",
                            '5px',
                            '4px'
                        ],
                        [
                            "eid40",
                            "left",
                            500,
                            250,
                            "easeOutBounce",
                            "${tel}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid41",
                            "left",
                            750,
                            250,
                            "easeOutBounce",
                            "${tel}",
                            '6px',
                            '8px'
                        ],
                        [
                            "eid33",
                            "rotateZ",
                            0,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid34",
                            "rotateZ",
                            250,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid36",
                            "rotateZ",
                            500,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '0deg',
                            '-10deg'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            750,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '-10deg',
                            '0deg'
                        ],
                        [
                            "eid30",
                            "top",
                            0,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid31",
                            "top",
                            250,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '-4px',
                            '0px'
                        ],
                        [
                            "eid35",
                            "top",
                            500,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '0px',
                            '-4px'
                        ],
                        [
                            "eid38",
                            "top",
                            750,
                            250,
                            "easeOutBounce",
                            "${trubka}",
                            '-4px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("phone_edgeActions.js");
})("EDGE-409075166");
