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
                            id: 'poup',
                            type: 'image',
                            rect: ['131px', '99px', '288px', '416px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"poup.png",'0px','0px']
                        },
                        {
                            id: 'body',
                            symbolName: 'body',
                            type: 'rect',
                            rect: ['235px', '157px', '80', '86', 'auto', 'auto']
                        },
                        {
                            id: 'trubka2',
                            type: 'image',
                            rect: ['219px', '147px', '112px', '47px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"trubka2.png",'0px','0px']
                        },
                        {
                            id: 'shnurochek2',
                            symbolName: 'shnurochek',
                            type: 'rect',
                            rect: ['184px', '146px', '1740', '100', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(155,155,155,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${body}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${body}",
                            '-5deg',
                            '0deg'
                        ],
                        [
                            "eid7",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${body}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid8",
                            "rotateZ",
                            750,
                            225,
                            "linear",
                            "${body}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid9",
                            "top",
                            0,
                            250,
                            "linear",
                            "${body}",
                            '157px',
                            '153px'
                        ],
                        [
                            "eid10",
                            "top",
                            250,
                            250,
                            "linear",
                            "${body}",
                            '153px',
                            '157px'
                        ],
                        [
                            "eid11",
                            "top",
                            500,
                            250,
                            "linear",
                            "${body}",
                            '157px',
                            '153px'
                        ],
                        [
                            "eid12",
                            "top",
                            750,
                            225,
                            "linear",
                            "${body}",
                            '153px',
                            '157px'
                        ],
                        [
                            "eid58",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${trubka2}",
                            '0deg',
                            '-10deg'
                        ],
                        [
                            "eid59",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${trubka2}",
                            '-10deg',
                            '0deg'
                        ],
                        [
                            "eid60",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${trubka2}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid61",
                            "rotateZ",
                            750,
                            225,
                            "linear",
                            "${trubka2}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid157",
                            "top",
                            250,
                            0,
                            "linear",
                            "${shnurochek2}",
                            '146px',
                            '146px'
                        ],
                        [
                            "eid156",
                            "top",
                            250,
                            0,
                            "linear",
                            "${poup}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            250,
                            "linear",
                            "${body}",
                            '235px',
                            '232px'
                        ],
                        [
                            "eid14",
                            "left",
                            250,
                            500,
                            "linear",
                            "${body}",
                            '232px',
                            '235px'
                        ],
                        [
                            "eid54",
                            "top",
                            0,
                            250,
                            "linear",
                            "${trubka2}",
                            '147px',
                            '150px'
                        ],
                        [
                            "eid55",
                            "top",
                            250,
                            250,
                            "linear",
                            "${trubka2}",
                            '150px',
                            '147px'
                        ],
                        [
                            "eid56",
                            "top",
                            500,
                            250,
                            "linear",
                            "${trubka2}",
                            '147px',
                            '151px'
                        ],
                        [
                            "eid57",
                            "top",
                            750,
                            225,
                            "linear",
                            "${trubka2}",
                            '151px',
                            '147px'
                        ]
                    ]
                }
            },
            "body": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['5px', '-14px', '70px', '64px', 'auto', 'auto'],
                            id: 'derghatel2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/derghatel2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['10px', '50px', '61px', '36px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['-5px', '50px', '90px', '36px', 'auto', 'auto'],
                            id: 'phone2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/phone2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "top",
                            0,
                            244,
                            "linear",
                            "${derghatel2}",
                            '-14px',
                            '-4px'
                        ],
                        [
                            "eid51",
                            "top",
                            244,
                            244,
                            "linear",
                            "${derghatel2}",
                            '-4px',
                            '-14px'
                        ],
                        [
                            "eid52",
                            "top",
                            488,
                            244,
                            "linear",
                            "${derghatel2}",
                            '-14px',
                            '-4px'
                        ],
                        [
                            "eid53",
                            "top",
                            732,
                            244,
                            "linear",
                            "${derghatel2}",
                            '-4px',
                            '-14px'
                        ]
                    ]
                }
            },
            "shnurok": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'shnur',
                            rect: ['0px', '0px', '630px', '87px', 'auto', 'auto'],
                            clip: 'rect(0px 35px 87px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/shnur.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '630px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${shnur}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid30",
                            "background-position",
                            55,
                            0,
                            "linear",
                            "${shnur}",
                            [0,0],
                            [-35,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid32",
                            "background-position",
                            110,
                            0,
                            "linear",
                            "${shnur}",
                            [-35,0],
                            [-70,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid33",
                            "background-position",
                            165,
                            0,
                            "linear",
                            "${shnur}",
                            [-70,0],
                            [-105,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            220,
                            0,
                            "linear",
                            "${shnur}",
                            [-105,0],
                            [-140,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid35",
                            "background-position",
                            275,
                            0,
                            "linear",
                            "${shnur}",
                            [-140,0],
                            [-175,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid36",
                            "background-position",
                            330,
                            0,
                            "linear",
                            "${shnur}",
                            [-175,0],
                            [-210,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid37",
                            "background-position",
                            385,
                            0,
                            "linear",
                            "${shnur}",
                            [-210,0],
                            [-245,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid38",
                            "background-position",
                            440,
                            0,
                            "linear",
                            "${shnur}",
                            [-245,0],
                            [-280,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid39",
                            "background-position",
                            495,
                            0,
                            "linear",
                            "${shnur}",
                            [-280,0],
                            [-315,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid40",
                            "background-position",
                            550,
                            0,
                            "linear",
                            "${shnur}",
                            [-315,0],
                            [-350,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid41",
                            "background-position",
                            605,
                            0,
                            "linear",
                            "${shnur}",
                            [-350,0],
                            [-385,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid42",
                            "background-position",
                            660,
                            0,
                            "linear",
                            "${shnur}",
                            [-385,0],
                            [-420,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "background-position",
                            715,
                            0,
                            "linear",
                            "${shnur}",
                            [-420,0],
                            [-455,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid44",
                            "background-position",
                            770,
                            0,
                            "linear",
                            "${shnur}",
                            [-455,0],
                            [-490,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid45",
                            "background-position",
                            825,
                            0,
                            "linear",
                            "${shnur}",
                            [-490,0],
                            [-525,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid46",
                            "background-position",
                            880,
                            0,
                            "linear",
                            "${shnur}",
                            [-525,0],
                            [-560,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid47",
                            "background-position",
                            935,
                            0,
                            "linear",
                            "${shnur}",
                            [-560,0],
                            [-595,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "shnurochek": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'shnurok2',
                            rect: ['0px', '0px', '1740px', '100px', 'auto', 'auto'],
                            clip: 'rect(0px 60px 100px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/shnurok.png', '-1080px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1740px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid120",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1080,0],
                            [-1080,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid121",
                            "background-position",
                            28,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1080,0],
                            [-1140,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid122",
                            "background-position",
                            57,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1140,0],
                            [-1200,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid123",
                            "background-position",
                            84,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1200,0],
                            [-1260,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid124",
                            "background-position",
                            115,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1260,0],
                            [-1320,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid125",
                            "background-position",
                            144,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1320,0],
                            [-1380,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid126",
                            "background-position",
                            180,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1380,0],
                            [-1440,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid127",
                            "background-position",
                            211,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1440,0],
                            [-1500,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid128",
                            "background-position",
                            243,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1500,0],
                            [-1560,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid132",
                            "background-position",
                            278,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1560,0],
                            [-1620,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid133",
                            "background-position",
                            312,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1620,0],
                            [-1680,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid134",
                            "background-position",
                            344,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1680,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid135",
                            "background-position",
                            373,
                            0,
                            "linear",
                            "${shnurok2}",
                            [0,0],
                            [-60,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid136",
                            "background-position",
                            401,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-60,0],
                            [-120,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid137",
                            "background-position",
                            428,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-120,0],
                            [-180,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid138",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-180,0],
                            [-240,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid139",
                            "background-position",
                            484,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-240,0],
                            [-240,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid140",
                            "background-position",
                            510,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-240,0],
                            [-300,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid141",
                            "background-position",
                            546,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-300,0],
                            [-360,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid142",
                            "background-position",
                            578,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-360,0],
                            [-420,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid143",
                            "background-position",
                            608,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-420,0],
                            [-480,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid144",
                            "background-position",
                            655,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-480,0],
                            [-540,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid146",
                            "background-position",
                            750,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-600,0],
                            [-660,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid147",
                            "background-position",
                            789,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-660,0],
                            [-720,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid148",
                            "background-position",
                            827,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-720,0],
                            [-780,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid149",
                            "background-position",
                            858,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-780,0],
                            [-840,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid150",
                            "background-position",
                            882,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-840,0],
                            [-900,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid151",
                            "background-position",
                            906,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-900,0],
                            [-960,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid152",
                            "background-position",
                            930,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-960,0],
                            [-1020,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid153",
                            "background-position",
                            953,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1020,0],
                            [-1080,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid154",
                            "background-position",
                            975,
                            0,
                            "linear",
                            "${shnurok2}",
                            [-1080,0],
                            [-1080,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tel_edgeActions.js");
})("EDGE-29641885");
