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
                            id: 'cards',
                            type: 'image',
                            rect: ['29px', '139px', '1124px', '356px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cards.png",'0px','0px']
                        },
                        {
                            id: 'light',
                            symbolName: 'light',
                            type: 'rect',
                            rect: ['500px', '26px', '368', '544', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'card',
                            type: 'image',
                            rect: ['598px', '118px', '172px', '348px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"card.png",'0px','0px']
                        },
                        {
                            id: 'button',
                            symbolName: 'button',
                            type: 'rect',
                            rect: ['631', '392', '106', '26', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1197px', '768px'],
                            overflow: 'hidden',
                            fill: ["rgba(29,24,19,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: false,
                    data: [
                        [
                            "eid33",
                            "scaleX",
                            0,
                            250,
                            "easeInOutQuad",
                            "${light}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            250,
                            "easeInOutQuad",
                            "${light}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            0,
                            250,
                            "easeInOutQuad",
                            "${light}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "light": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'big-right',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big-right.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'big-right-top',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big-right-top.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'big-left',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big-left.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'big-left-top',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big-left-top.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'big-left_botton',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big-left_botton.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'big-botton',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/big-botton.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'small-top',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/small-top.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'small-right',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/small-right.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'small-right-botton',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/small-right-botton.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'small-left',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/small-left.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'small-left-top',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/small-left-top.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '368px', '544px', 'auto', 'auto'],
                            id: 'small-left-botton',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/small-left-botton.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '368px', '544px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid112",
                            "opacity",
                            250,
                            750,
                            "easeInOutQuad",
                            "${small-top}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1000,
                            1333,
                            "easeInOutQuad",
                            "${small-top}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2333,
                            667,
                            "easeInOutQuad",
                            "${small-top}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            500,
                            500,
                            "easeInOutQuad",
                            "${small-right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1000,
                            667,
                            "easeInOutQuad",
                            "${small-right}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1667,
                            667,
                            "easeInOutQuad",
                            "${small-right}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            463,
                            537,
                            "easeInOutQuad",
                            "${big-right-top}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            1000,
                            667,
                            "easeInOutQuad",
                            "${big-right-top}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1667,
                            667,
                            "easeInOutQuad",
                            "${big-right-top}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${small-left-botton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1000,
                            667,
                            "easeInOutQuad",
                            "${small-left-botton}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1667,
                            667,
                            "easeInOutQuad",
                            "${small-left-botton}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            250,
                            750,
                            "easeInOutQuad",
                            "${big-left_botton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1000,
                            1333,
                            "easeInOutQuad",
                            "${big-left_botton}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid12",
                            "opacity",
                            2333,
                            667,
                            "easeInOutQuad",
                            "${big-left_botton}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${big-botton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "opacity",
                            1000,
                            667,
                            "easeInOutQuad",
                            "${big-botton}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid10",
                            "opacity",
                            1667,
                            667,
                            "easeInOutQuad",
                            "${big-botton}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            250,
                            750,
                            "easeInOutQuad",
                            "${small-left-top}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1000,
                            1333,
                            "easeInOutQuad",
                            "${small-left-top}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2333,
                            667,
                            "easeInOutQuad",
                            "${small-left-top}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            725,
                            275,
                            "easeInOutQuad",
                            "${big-left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1000,
                            1333,
                            "easeInOutQuad",
                            "${big-left}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid16",
                            "opacity",
                            2333,
                            667,
                            "easeInOutQuad",
                            "${big-left}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid102",
                            "opacity",
                            500,
                            500,
                            "easeInOutQuad",
                            "${small-left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1000,
                            667,
                            "easeInOutQuad",
                            "${small-left}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1667,
                            667,
                            "easeInOutQuad",
                            "${small-left}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            463,
                            537,
                            "easeInOutQuad",
                            "${big-left-top}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1000,
                            667,
                            "easeInOutQuad",
                            "${big-left-top}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1667,
                            667,
                            "easeInOutQuad",
                            "${big-left-top}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            725,
                            275,
                            "easeInOutQuad",
                            "${small-right-botton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1000,
                            1333,
                            "easeInOutQuad",
                            "${small-right-botton}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid26",
                            "opacity",
                            2333,
                            667,
                            "easeInOutQuad",
                            "${small-right-botton}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid109",
                            "opacity",
                            250,
                            750,
                            "easeInOutQuad",
                            "${big-right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1000,
                            1333,
                            "easeInOutQuad",
                            "${big-right}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2333,
                            667,
                            "easeInOutQuad",
                            "${big-right}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '106px', '26px', 'auto', 'auto'],
                            id: 'item-button',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/item-button.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '106px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid131",
                            "opacity",
                            0,
                            500,
                            "easeInOutQuad",
                            "${item-button}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("04_edgeActions.js");
})("EDGE-217745927");
