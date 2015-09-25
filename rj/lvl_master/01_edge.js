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
                            rect: ['0px', '0px', '992px', '725px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
                        },
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['0px', '0px', '992px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
                        },
                        {
                            id: 'win',
                            type: 'image',
                            rect: ['258px', '85px', '504px', '556px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"win.png",'0px','0px']
                        },
                        {
                            id: 'sup',
                            type: 'image',
                            rect: ['458px', '413px', '92px', '111px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sup.png",'0px','0px']
                        },
                        {
                            id: 'strelk',
                            type: 'image',
                            rect: ['273px', '409px', '483px', '74px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"strelk.png",'0px','0px']
                        },
                        {
                            id: 'slose',
                            type: 'image',
                            rect: ['709px', '85px', '36px', '34px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slose.png",'0px','0px']
                        },
                        {
                            id: 'sahar',
                            type: 'image',
                            rect: ['340px', '413px', '94px', '102px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sahar.png",'0px','0px']
                        },
                        {
                            id: 'pech',
                            type: 'image',
                            rect: ['582px', '409px', '94px', '94px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pech.png",'0px','0px']
                        },
                        {
                            id: 'new',
                            type: 'image',
                            rect: ['412px', '292px', '196px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"new.png",'0px','0px']
                        },
                        {
                            id: 'light',
                            type: 'image',
                            rect: ['363px', '103px', '294px', '262px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"light.png",'0px','0px']
                        },
                        {
                            id: 'paper_right',
                            type: 'image',
                            rect: ['546px', '187px', '71px', '64px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"paper_right.png",'0px','0px']
                        },
                        {
                            id: 'paper_left',
                            type: 'image',
                            rect: ['406px', '187px', '71px', '64px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"paper_left.png",'0px','0px']
                        },
                        {
                            id: 'lent_right',
                            type: 'image',
                            rect: ['482px', '226px', '200px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"lent_right.png",'0px','0px']
                        },
                        {
                            id: 'lent_left',
                            type: 'image',
                            rect: ['338px', '226px', '198px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"lent_left.png",'0px','0px']
                        },
                        {
                            id: 'had',
                            type: 'image',
                            rect: ['450px', '143px', '119px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"had.png",'0px','0px']
                        },
                        {
                            id: 'h2',
                            type: 'image',
                            rect: ['429px', '373px', '162px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"h2.png",'0px','0px']
                        },
                        {
                            id: 'button',
                            type: 'image',
                            rect: ['437px', '544px', '145px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"button.png",'0px','0px']
                        },
                        {
                            id: 'krug',
                            type: 'image',
                            rect: ['456px', '180px', '107px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"krug.png",'0px','0px']
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['490px', '208px', '39px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '992px', '725px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid23",
                            "opacity",
                            3000,
                            250,
                            "linear",
                            "${sup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${strelk}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${sahar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${paper_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${win}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            3750,
                            250,
                            "linear",
                            "${slose}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            3750,
                            250,
                            "linear",
                            "${button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${had}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${new}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2500,
                            250,
                            "linear",
                            "${h2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${krug}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${paper_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${shadow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${lent_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${lent_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            3250,
                            250,
                            "linear",
                            "${pech}",
                            '0.00047637196257710457',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2250,
                            250,
                            "linear",
                            "${light}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("01_edgeActions.js");
})("EDGE-627092852");
