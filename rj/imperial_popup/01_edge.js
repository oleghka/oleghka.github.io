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
                centerStage: "vertical",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '725px', 'auto', 'auto'],
                            clip: 'rect(1.08203125px 1000px 725px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
                        },
                        {
                            id: 'window',
                            type: 'image',
                            rect: ['48px', '36px', '904px', '666px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"window.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'content',
                            type: 'image',
                            rect: ['168px', '95px', '641px', '470px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"content.png",'0px','0px']
                        },
                        {
                            id: 'r',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"r.png",'0px','0px']
                        },
                        {
                            id: 'g',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"g.png",'0px','0px']
                        },
                        {
                            id: 'b',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['426px', '559px', '146px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'menu2',
                            type: 'image',
                            rect: ['160px', '0px', '840px', '56px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid45",
                            "opacity",
                            1000,
                            250,
                            "easeInOutBounce",
                            "${b}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            1250,
                            250,
                            "easeInOutBounce",
                            "${b}",
                            '1',
                            '0'
                        ],
                        [
                            "eid44",
                            "opacity",
                            750,
                            250,
                            "easeInOutBounce",
                            "${g}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            1000,
                            250,
                            "easeInOutBounce",
                            "${g}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            250,
                            250,
                            "easeInOutBack",
                            "${window}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${content}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            250,
                            250,
                            "easeInOutBack",
                            "${window}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "filter.blur",
                            0,
                            250,
                            "linear",
                            "${bg}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid8",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${shadow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            250,
                            250,
                            "easeInOutBack",
                            "${window}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            500,
                            250,
                            "easeInOutBounce",
                            "${r}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            750,
                            250,
                            "easeInOutBounce",
                            "${r}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("01_edgeActions.js");
})("EDGE-81113043");
