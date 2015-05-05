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
                            id: 'body',
                            symbolName: 'body',
                            type: 'rect',
                            rect: ['235px', '153px', '80', '86', 'auto', 'auto']
                        },
                        {
                            id: 'trubka',
                            type: 'image',
                            rect: ['219px', '160px', '112px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"trubka.png",'0px','0px']
                        },
                        {
                            id: 'shnurok',
                            symbolName: 'shnurok',
                            type: 'rect',
                            rect: ['204px', '156px', '630', '87', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '100%', '100%'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
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
                            250,
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
                            250,
                            "linear",
                            "${body}",
                            '153px',
                            '157px'
                        ],
                        [
                            "eid19",
                            "top",
                            0,
                            250,
                            "linear",
                            "${trubka}",
                            '157px',
                            '161px'
                        ],
                        [
                            "eid24",
                            "top",
                            250,
                            250,
                            "linear",
                            "${trubka}",
                            '160px',
                            '157px'
                        ],
                        [
                            "eid25",
                            "top",
                            500,
                            250,
                            "linear",
                            "${trubka}",
                            '157px',
                            '161px'
                        ],
                        [
                            "eid23",
                            "top",
                            750,
                            250,
                            "linear",
                            "${trubka}",
                            '161px',
                            '157px'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            0,
                            250,
                            "linear",
                            "${trubka}",
                            '0deg',
                            '-10deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            250,
                            250,
                            "linear",
                            "${trubka}",
                            '-10deg',
                            '0deg'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            500,
                            250,
                            "linear",
                            "${trubka}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid21",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${trubka}",
                            '10deg',
                            '0deg'
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
                            "eid26",
                            "top",
                            0,
                            0,
                            "linear",
                            "${shnurok}",
                            '156px',
                            '156px'
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
                            id: 'phone',
                            type: 'image',
                            rect: ['0px', '31px', '80px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/phone.png', '0px', '0px']
                        },
                        {
                            id: 'derghatel',
                            type: 'image',
                            rect: ['5px', '0px', '70px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/derghatel.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '80px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "top",
                            0,
                            250,
                            "linear",
                            "${derghatel}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid2",
                            "top",
                            250,
                            250,
                            "linear",
                            "${derghatel}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid3",
                            "top",
                            500,
                            250,
                            "linear",
                            "${derghatel}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid4",
                            "top",
                            750,
                            250,
                            "linear",
                            "${derghatel}",
                            '10px',
                            '0px'
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
                            rect: ['0px', '0px', '630px', '87px', 'auto', 'auto'],
                            id: 'shnur',
                            type: 'image',
                            clip: 'rect(0px 35px 87px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/shnur.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '630px', '87px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tel_edgeActions.js");
})("EDGE-29641885");
