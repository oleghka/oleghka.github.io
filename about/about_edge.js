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
                            id: 'video',
                            type: 'video',
                            tag: 'video',
                            rect: ['19px', '431px', '982px', '552px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [vid+"video.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'video2',
                            type: 'video',
                            tag: 'video',
                            rect: ['0px', '424px', '1009px', '567px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [vid+"video.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'about_2',
                            type: 'image',
                            rect: ['0px', '0px', '1009px', '2382px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"about_2.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1009px', '3000px', 'auto', 'auto'],
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("about_edgeActions.js");
})("EDGE-23510355");
