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
                centerStage: "horizontal",
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
                            rect: ['0px', '2px', '992px', '725px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"shadow.png",'0px','0px']
                        },
                        {
                            id: 'win',
                            type: 'image',
                            rect: ['258px', '85px', '504px', '556px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"win.png",'0px','0px'],
                            transform: [[],[],[],['1','0.21783']]
                        },
                        {
                            id: 'slose',
                            type: 'image',
                            rect: ['709px', '85px', '36px', '34px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"slose.png",'0px','0px']
                        },
                        {
                            id: 'items',
                            symbolName: 'items',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
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
                            fill: ["rgba(0,0,0,0)",im+"paper_right.png",'-75.703125px','46.796875px']
                        },
                        {
                            id: 'paper_left',
                            type: 'image',
                            rect: ['406px', '187px', '71px', '64px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"paper_left.png",'75.078125px','54.01171875px']
                        },
                        {
                            id: 'lent_right',
                            type: 'image',
                            rect: ['482px', '226px', '200px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"lent_right.png",'-127.242188px','-31.128906px']
                        },
                        {
                            id: 'lent_left',
                            type: 'image',
                            rect: ['338px', '226px', '198px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"lent_left.png",'129.8203125px','-27.625000px']
                        },
                        {
                            id: 'had',
                            type: 'image',
                            rect: ['450px', '143px', '119px', '108px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"had.png",'0.000000px','79.47265625px']
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
                            fill: ["rgba(0,0,0,0)",im+"krug.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['491px', '208px', '39px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"5.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'strelk',
                            type: 'image',
                            rect: ['273px', '409px', '483px', '74px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"strelk.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid39",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${lent_right}",
                            [-127.2421875,-31.12890625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid52",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${paper_right}",
                            [-75.703125,46.796875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid20",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${light}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${slose}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${krug}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${had}",
                            [0,79.47265625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid27",
                            "opacity",
                            2750,
                            250,
                            "linear",
                            "${button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${had}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${new}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${h2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleY",
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
                            750,
                            250,
                            "linear",
                            "${paper_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            2500,
                            250,
                            "linear",
                            "${strelk}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            1000,
                            250,
                            "easeInOutBack",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${paper_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${lent_left}",
                            [129.8203125,-27.625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid56",
                            "scaleY",
                            1000,
                            250,
                            "easeInOutBack",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1000,
                            250,
                            "easeInOutBack",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${lent_left}",
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
                            "eid58",
                            "left",
                            1000,
                            250,
                            "easeInOutBack",
                            "${_5}",
                            '491px',
                            '490px'
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
                            "eid50",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${paper_left}",
                            [75.078125,54.01171875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${lent_right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${win}",
                            '0.21783',
                            '1'
                        ]
                    ]
                }
            },
            "items": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['458px', '413px', '92px', '111px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'sup',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sup.png', '0px', '0px']
                        },
                        {
                            rect: ['340px', '406px', '94px', '102px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'sahar',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sahar.png', '0px', '0px']
                        },
                        {
                            rect: ['343px', '412px', '94px', '94px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'pech',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pech.png', '0px', '0px']
                        },
                        {
                            rect: ['713px', '412px', '94px', '94px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'pechCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pech.png', '0px', '0px']
                        },
                        {
                            rect: ['343px', '412px', '94px', '94px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'pechCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pech.png', '0px', '0px']
                        },
                        {
                            rect: ['592px', '417px', '92px', '111px', 'auto', 'auto'],
                            id: 'supCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sup.png', '0px', '0px']
                        },
                        {
                            rect: ['471px', '410px', '94px', '102px', 'auto', 'auto'],
                            id: 'saharCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sahar.png', '0px', '0px']
                        },
                        {
                            rect: ['587px', '412px', '94px', '94px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'pechCopy2',
                            opacity: '0.00047637196257710457',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pech.png', '0px', '0px']
                        },
                        {
                            rect: ['458px', '413px', '92px', '111px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'supCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sup.png', '0px', '0px']
                        },
                        {
                            rect: ['340px', '406px', '94px', '102px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'saharCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sahar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: false,
                    data: [
                        [
                            "eid23",
                            "opacity",
                            2000,
                            250,
                            "easeInOutBack",
                            "${sup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            2750,
                            250,
                            "easeInOutBack",
                            "${sup}",
                            '1',
                            '0'
                        ],
                        [
                            "eid69",
                            "scaleX",
                            2000,
                            250,
                            "easeInOutBack",
                            "${sup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            2750,
                            250,
                            "easeInOutBack",
                            "${supCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "left",
                            2500,
                            250,
                            "easeInOutBack",
                            "${sup}",
                            '458px',
                            '340px'
                        ],
                        [
                            "eid157",
                            "left",
                            2750,
                            250,
                            "easeInOutBack",
                            "${sup}",
                            '340px',
                            '222px'
                        ],
                        [
                            "eid141",
                            "left",
                            2500,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '582px',
                            '464px'
                        ],
                        [
                            "eid156",
                            "left",
                            2750,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '464px',
                            '343px'
                        ],
                        [
                            "eid175",
                            "left",
                            3000,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '343px',
                            '222px'
                        ],
                        [
                            "eid140",
                            "top",
                            2500,
                            250,
                            "easeInOutBack",
                            "${sahar}",
                            '406px',
                            '410px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1750,
                            250,
                            "easeInOutBack",
                            "${sahar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            2500,
                            250,
                            "easeInOutBack",
                            "${sahar}",
                            '1',
                            '0'
                        ],
                        [
                            "eid173",
                            "left",
                            2500,
                            250,
                            "easeInOutBack",
                            "${pechCopy6}",
                            '582px',
                            '464px'
                        ],
                        [
                            "eid174",
                            "left",
                            2750,
                            250,
                            "easeInOutBack",
                            "${pechCopy6}",
                            '464px',
                            '713px'
                        ],
                        [
                            "eid178",
                            "left",
                            3000,
                            250,
                            "easeInOutBack",
                            "${pechCopy6}",
                            '713px',
                            '592px'
                        ],
                        [
                            "eid67",
                            "scaleY",
                            1750,
                            250,
                            "easeInOutBack",
                            "${sahar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "top",
                            2500,
                            250,
                            "easeInOutBack",
                            "${saharCopy3}",
                            '406px',
                            '410px'
                        ],
                        [
                            "eid144",
                            "top",
                            2500,
                            250,
                            "easeInOutBack",
                            "${sup}",
                            '413px',
                            '417px'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            1750,
                            250,
                            "easeInOutBack",
                            "${sahar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid180",
                            "opacity",
                            3000,
                            250,
                            "easeInOutBack",
                            "${pechCopy6}",
                            '0.00047637196257710457',
                            '1'
                        ],
                        [
                            "eid137",
                            "left",
                            2500,
                            250,
                            "easeInOutBack",
                            "${pechCopy2}",
                            '952px',
                            '834px'
                        ],
                        [
                            "eid155",
                            "left",
                            2750,
                            250,
                            "easeInOutBack",
                            "${pechCopy2}",
                            '834px',
                            '716px'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            2250,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "left",
                            2500,
                            250,
                            "easeInOutBack",
                            "${saharCopy3}",
                            '710px',
                            '592px'
                        ],
                        [
                            "eid158",
                            "left",
                            2750,
                            250,
                            "easeInOutBack",
                            "${saharCopy3}",
                            '592px',
                            '471px'
                        ],
                        [
                            "eid177",
                            "left",
                            3000,
                            250,
                            "easeInOutBack",
                            "${saharCopy3}",
                            '471px',
                            '350px'
                        ],
                        [
                            "eid73",
                            "scaleX",
                            2250,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "scaleY",
                            2000,
                            250,
                            "easeInOutBack",
                            "${sup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "left",
                            2500,
                            250,
                            "easeInOutBack",
                            "${sahar}",
                            '340px',
                            '222px'
                        ],
                        [
                            "eid138",
                            "top",
                            2500,
                            250,
                            "easeInOutBack",
                            "${pechCopy2}",
                            '412px',
                            '416px'
                        ],
                        [
                            "eid136",
                            "top",
                            2500,
                            250,
                            "easeInOutBack",
                            "${supCopy2}",
                            '413px',
                            '417px'
                        ],
                        [
                            "eid135",
                            "left",
                            2500,
                            250,
                            "easeInOutBack",
                            "${supCopy2}",
                            '828px',
                            '710px'
                        ],
                        [
                            "eid154",
                            "left",
                            2750,
                            250,
                            "easeInOutBack",
                            "${supCopy2}",
                            '710px',
                            '592px'
                        ],
                        [
                            "eid176",
                            "left",
                            3000,
                            250,
                            "easeInOutBack",
                            "${supCopy2}",
                            '592px',
                            '471px'
                        ],
                        [
                            "eid142",
                            "top",
                            2500,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '412px',
                            '416px'
                        ],
                        [
                            "eid149",
                            "opacity",
                            2500,
                            250,
                            "easeInOutBack",
                            "${saharCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            2250,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '0.00047637196257710457',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            3000,
                            250,
                            "easeInOutBack",
                            "${pech}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("01_edgeActions.js");
})("EDGE-627092852");
