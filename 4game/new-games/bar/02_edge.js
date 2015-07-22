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
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'save_to_alpha2',
                            type: 'image',
                            rect: ['0px', '0px', '643px', '149px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha2.png",'0px','0px']
                        },
                        {
                            id: 'save_to_alpha3',
                            type: 'image',
                            rect: ['146px', '50px', '18px', '18px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha3.png",'0px','0px','100%','100%', 'no-repeat'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'save_to_alpha3Copy2',
                            type: 'image',
                            rect: ['233px', '50px', '18px', '18px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha3.png",'0px','0px','100%','100%', 'no-repeat'],
                            transform: [[],[],[],['0','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '643px', '149px'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(45,45,51,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid11",
                            "scaleX",
                            0,
                            500,
                            "easeInOutBounce",
                            "${save_to_alpha3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            500,
                            500,
                            "easeInOutBounce",
                            "${save_to_alpha3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            500,
                            500,
                            "easeInOutBounce",
                            "${save_to_alpha3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "scaleY",
                            0,
                            500,
                            "easeInOutBounce",
                            "${save_to_alpha3}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("02_edgeActions.js");
})("EDGE-347645236");
