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
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0px', '1197px', '660px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
                        },
                        {
                            id: 'tarif',
                            type: 'image',
                            rect: ['95px', '165px', '1008px', '303px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tarif.png",'0px','0px']
                        },
                        {
                            id: 'rekomenduyu',
                            type: 'image',
                            rect: ['639px', '181px', '90px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rekomenduyu.png",'0px','0px']
                        },
                        {
                            id: 'rekomenduyu_line2',
                            type: 'image',
                            rect: ['638px', '191px', '91px', '16px', 'auto', 'auto'],
                            clip: 'rect(0px -2.5px 16px -25.421875px)',
                            fill: ["rgba(0,0,0,0)",im+"rekomenduyu_line2.png",'0px','0px']
                        },
                        {
                            id: 'select03',
                            symbolName: 'select',
                            type: 'rect',
                            rect: ['431px', '166', '168', '302', 'auto', 'auto']
                        },
                        {
                            id: 'select02',
                            symbolName: 'select',
                            type: 'rect',
                            rect: ['263px', '166', '168', '302', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1197px', '660px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid24",
                            "clip",
                            2000,
                            1000,
                            "easeInOutElastic",
                            "${rekomenduyu_line2}",
                            [0,-2.5,16,-25.421875],
                            [0,91,16,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${tarif}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${rekomenduyu}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "select": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '168px', '302px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.1', '1.1']],
                            id: 'ramka',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ramka.png', '0px', '0px']
                        },
                        {
                            rect: ['35px', '233px', '98px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'buy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/buy.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '168px', '302px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '168px', '302px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid34",
                            "opacity",
                            0,
                            500,
                            "easeInOutBack",
                            "${ramka}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleX",
                            0,
                            500,
                            "easeInOutBack",
                            "${buy}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            0,
                            500,
                            "easeInOutBack",
                            "${buy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            0,
                            500,
                            "easeInOutBack",
                            "${buy}",
                            '0.8',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            0,
                            500,
                            "easeInOutBack",
                            "${ramka}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            0,
                            500,
                            "easeInOutBack",
                            "${ramka}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("window_buy_edgeActions.js");
})("EDGE-137753194");
