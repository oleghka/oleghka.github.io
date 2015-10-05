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
                            rect: ['0px', '0px', '1000px', '725px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy11',
                            type: 'image',
                            rect: ['168px', '117px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy12',
                            type: 'image',
                            rect: ['416px', '103px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy16',
                            type: 'image',
                            rect: ['531px', '168px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy14',
                            type: 'image',
                            rect: ['655px', '227px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'tree',
                            type: 'image',
                            rect: ['292px', '44px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy13',
                            type: 'image',
                            rect: ['292px', '185px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy17',
                            type: 'image',
                            rect: ['407px', '241px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'treeCopy15',
                            type: 'image',
                            rect: ['531px', '309px', '248px', '319px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tree.png",'0px','0px']
                        },
                        {
                            id: 'pr',
                            type: 'image',
                            rect: ['368px', '95px', '40px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        },
                        {
                            id: 'prCopy13',
                            type: 'image',
                            rect: ['368px', '236px', '40px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        },
                        {
                            id: 'prCopy11',
                            type: 'image',
                            rect: ['244px', '168px', '19px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        },
                        {
                            id: 'prCopy12',
                            type: 'image',
                            rect: ['492px', '154px', '19px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        },
                        {
                            id: 'prCopy17',
                            type: 'image',
                            rect: ['607px', '219px', '40px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        },
                        {
                            id: 'prCopy16',
                            type: 'image',
                            rect: ['607px', '360px', '40px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        },
                        {
                            id: 'prCopy15',
                            type: 'image',
                            rect: ['483px', '292px', '19px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        },
                        {
                            id: 'prCopy14',
                            type: 'image',
                            rect: ['731px', '278px', '19px', '8px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pr.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1000px', '725px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 300000,
                    autoPlay: true,
                    data: [
                        [
                            "eid17",
                            "width",
                            0,
                            300000,
                            "linear",
                            "${prCopy12}",
                            '19px',
                            '40px'
                        ],
                        [
                            "eid16",
                            "width",
                            0,
                            300000,
                            "linear",
                            "${prCopy11}",
                            '19px',
                            '40px'
                        ],
                        [
                            "eid21",
                            "width",
                            0,
                            150000,
                            "linear",
                            "${prCopy16}",
                            '1px',
                            '40px'
                        ],
                        [
                            "eid19",
                            "width",
                            0,
                            300000,
                            "linear",
                            "${prCopy14}",
                            '19px',
                            '40px'
                        ],
                        [
                            "eid18",
                            "width",
                            0,
                            150000,
                            "linear",
                            "${prCopy13}",
                            '1px',
                            '40px'
                        ],
                        [
                            "eid20",
                            "width",
                            0,
                            300000,
                            "linear",
                            "${prCopy15}",
                            '19px',
                            '40px'
                        ],
                        [
                            "eid5",
                            "width",
                            0,
                            150000,
                            "linear",
                            "${pr}",
                            '1px',
                            '40px'
                        ],
                        [
                            "eid22",
                            "width",
                            0,
                            150000,
                            "linear",
                            "${prCopy17}",
                            '1px',
                            '40px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("timer_edgeActions.js");
})("EDGE-609311235");
