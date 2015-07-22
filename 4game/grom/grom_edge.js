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
                            id: 'grom',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-121', '421', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"grom.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'grom2',
                            type: 'image',
                            rect: ['645px', '71px', '73px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"grom.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['80px', '90px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Люблю грозу в начале мая",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [40, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("grom_edgeActions.js");
})("EDGE-99840995");
