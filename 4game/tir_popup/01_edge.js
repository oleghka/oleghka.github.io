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
                            id: 'fon',
                            symbolName: 'fon',
                            type: 'rect',
                            rect: ['-30', '91', '1009', '416', 'auto', 'auto']
                        },
                        {
                            id: 'celi',
                            symbolName: 'celi',
                            type: 'rect',
                            rect: ['51px', '0', '951', '312', 'auto', 'auto']
                        },
                        {
                            id: 'strelok',
                            symbolName: 'strelok',
                            type: 'rect',
                            rect: ['23px', '178', '922', '346', 'auto', 'auto']
                        },
                        {
                            id: '_01',
                            type: 'image',
                            rect: ['0px', '0px', '1009px', '811px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"01.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1009px', '811px'],
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
                            "eid16",
                            "left",
                            250,
                            0,
                            "linear",
                            "${strelok}",
                            '23px',
                            '23px'
                        ],
                            [ "eid10", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${strelok}', [] ] ]
                    ]
                }
            },
            "strelok": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_04',
                            type: 'image',
                            rect: ['-11px', '0px', '922px', '346px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/04.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '922px', '346px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid8",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_04}",
                            '-11px',
                            '-2px'
                        ],
                        [
                            "eid9",
                            "left",
                            250,
                            250,
                            "linear",
                            "${_04}",
                            '-2px',
                            '41px'
                        ]
                    ]
                }
            },
            "celi": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_03',
                            type: 'image',
                            rect: ['10px', '0px', '951px', '312px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '951px', '312px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid19",
                            "left",
                            0,
                            250,
                            "linear",
                            "${_03}",
                            '-2px',
                            '10px'
                        ],
                        [
                            "eid20",
                            "left",
                            250,
                            250,
                            "linear",
                            "${_03}",
                            '10px',
                            '30px'
                        ]
                    ]
                }
            },
            "fon": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_02',
                            type: 'image',
                            rect: ['0px', '0px', '1009px', '416px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1009px', '416px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("01_edgeActions.js");
})("EDGE-31105628");
