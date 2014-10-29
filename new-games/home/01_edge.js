/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'pt sans\'': ''        },
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
                            id: 'save_to_alpha4',
                            type: 'image',
                            rect: ['0px', '-1px', '1113px', '431px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha4.png",'0px','0px']
                        },
                        {
                            id: 'save_to_alpha6',
                            type: 'image',
                            rect: ['0px', '-1px', '1113px', '431px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha6.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['365px', '79px', '200px', '22px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [1,"rgba(107,107,107,1.00)","solid"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['366px', '79px', '220px', '24px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            opacity: 0,
                            fill: ["rgba(208,208,208,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy2',
                            type: 'rect',
                            rect: ['310px', '79px', '55px', '22px', 'auto', 'auto'],
                            borderRadius: ["3px 3px", "0px", "0px", "3px 3px"],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [1,"rgba(107,107,107,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['566px', '79px', '89px', '22px', 'auto', 'auto'],
                            borderRadius: ["0px", "3px 3px", "3px 3px", "0px"],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [1,"rgba(107,107,107,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['310px', '79px', '56px', '24px', 'auto', 'auto'],
                            borderRadius: ["3px 3px", "0px", "0px", "3px 3px"],
                            opacity: 1,
                            fill: ["rgba(208,208,208,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['335px', '100px', '6px', '6px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(208,208,208,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['464px', '90px', '6px', '6px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(208,208,208,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['323px', '84px', 'auto', 'auto', 'auto', 'auto'],
                            text: "ММО",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(24,24,24,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['379px', '84px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Хиты для Origin, Steam и Uplay",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(194,194,194,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['579px', '84px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Мобильные",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(194,194,194,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'save_to_alpha3',
                            type: 'image',
                            rect: ['558px', '82px', '18px', '18px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha3.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy5',
                            type: 'text',
                            rect: ['564px', '85px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0,
                            text: "3",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'save_to_alpha8',
                            type: 'image',
                            rect: ['951px', '201px', '97px', '97px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha8.png",'0px','0px']
                        },
                        {
                            id: 'save_to_alpha9',
                            type: 'image',
                            rect: ['564px', '309px', '207px', '207px', 'auto', 'auto'],
                            clip: 'rect(0px 147.68359375px 121.046875px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"save_to_alpha9.png",'-97.125px','94.7421875px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['650px', '390px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0,
                            text: "ПРЕДЗАКАЗ",
                            align: "left",
                            font: ['\'pt sans\'', [11, "px"], "rgba(0,0,0,1.00)", "700", "none solid rgb(190, 190, 190)", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['974px', '245px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 0,
                            text: "НОВИНКА",
                            align: "left",
                            font: ['pt sans', [10, "px"], "rgba(0,0,0,1.00)", "700", "none solid rgb(190, 190, 190)", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1112px', '1248px'],
                            overflow: 'hidden',
                            fill: ["rgba(24,24,24,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid47",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${Rectangle2Copy}",
                            '90px',
                            '100px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid9",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '364px',
                            '365px'
                        ],
                        [
                            "eid58",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${Text2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${Rectangle3Copy}",
                            '565px',
                            '586px'
                        ],
                        [
                            "eid40",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${Rectangle3Copy}",
                            '586px',
                            '566px'
                        ],
                        [
                            "eid11",
                            "width",
                            1250,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '200px',
                            '220px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${save_to_alpha6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "background-position",
                            2250,
                            250,
                            "linear",
                            "${save_to_alpha9}",
                            [-97.125,94.7421875],
                            [-10.4375,7.23046875],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid49",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "color",
                            2000,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(24,24,24,1)',
                            'rgba(190,190,190,1.00)'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${TextCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${RectangleCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1",
                            "color",
                            1750,
                            250,
                            "linear",
                            "${TextCopy}",
                            'rgba(194,194,194,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid30",
                            "color",
                            2000,
                            250,
                            "linear",
                            "${TextCopy}",
                            'rgba(255,255,255,1)',
                            'rgba(24,24,24,1.00)'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid46",
                            "opacity",
                            2250,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${save_to_alpha3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${save_to_alpha3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${save_to_alpha8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${TextCopy2}",
                            '578px',
                            '599px'
                        ],
                        [
                            "eid39",
                            "left",
                            2000,
                            250,
                            "linear",
                            "${TextCopy2}",
                            '599px',
                            '579px'
                        ],
                        [
                            "eid36",
                            "width",
                            2000,
                            250,
                            "linear",
                            "${RectangleCopy2}",
                            '220px',
                            '201px'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("01_edgeActions.js");
})("EDGE-341098010");
