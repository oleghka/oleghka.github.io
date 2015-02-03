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
                            id: '_01',
                            type: 'image',
                            rect: ['94px', '323px', '519px', '287px', 'auto', 'auto'],
                            clip: 'rect(0px 272px 272px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"01.png",'-176.171875px','0px']
                        },
                        {
                            id: '_02',
                            type: 'image',
                            rect: ['638px', '323px', '444px', '298px', 'auto', 'auto'],
                            clip: 'rect(0px 272px 272px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"02.png",'-156.79296875px','0px']
                        },
                        {
                            id: '_03',
                            type: 'image',
                            rect: ['774px', '323px', '610px', '381px', 'auto', 'auto'],
                            clip: 'rect(0px 272px 272px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"03.png",'-125.04687525px','-94.17578125px']
                        },
                        {
                            id: 'txt_01',
                            type: 'image',
                            rect: ['178px', '260px', '105px', '43px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"txt_01.png",'0px','0px']
                        },
                        {
                            id: 'txt_02',
                            type: 'image',
                            rect: ['464px', '262px', '72px', '40px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt_02.png",'0px','0px']
                        },
                        {
                            id: 'txt_03',
                            type: 'image',
                            rect: ['656px', '260px', '239px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"txt_03.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1000px', '1000px'],
                            overflow: 'hidden',
                            fill: ["rgba(12,32,36,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid27",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_02}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid28",
                            "top",
                            500,
                            0,
                            "linear",
                            "${_02}",
                            '323px',
                            '323px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_03}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "height",
                            0,
                            500,
                            "linear",
                            "${_01}",
                            '287px',
                            '305px'
                        ],
                        [
                            "eid29",
                            "background-position",
                            0,
                            500,
                            "linear",
                            "${_02}",
                            [-156.792969,0],
                            [-254.667969,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid54",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_02}",
                            '1',
                            '0'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_02}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid53",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_03}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid10",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${_02}",
                            [0,272,272,0],
                            [0,135.80859375,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid22",
                            "width",
                            0,
                            500,
                            "linear",
                            "${_01}",
                            '519px',
                            '550px'
                        ],
                        [
                            "eid20",
                            "background-position",
                            0,
                            500,
                            "linear",
                            "${_01}",
                            [-176.171875,0],
                            [-1.2578125,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid18",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${_03}",
                            [-125.04687525,-94.17578125],
                            [-125.04687525,-94.17578125],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid3",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${_01}",
                            [0,272,272,0],
                            [0,544.30859375,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${_03}",
                            '638px',
                            '774px'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            500,
                            "linear",
                            "${_02}",
                            '366px',
                            '638px'
                        ],
                        [
                            "eid7",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${_03}",
                            [0,272,272,0],
                            [0,136.0390625,272,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("gallery_03_edgeActions.js");
})("EDGE-56993505");
