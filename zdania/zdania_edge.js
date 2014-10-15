/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['pt-sans, sans-serif']='<script src="http://use.edgefonts.net/pt-sans:n4,i4,n7,i7:all.js"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Untitled-4',
                type: 'image',
                rect: ['0px', '0px','1132px','950px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-4.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '200px','1132px','750px','auto', 'auto'],
                cursor: ['move'],
                opacity: 0,
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'turma',
                type: 'rect',
                rect: ['19', '612','auto','auto','auto', 'auto']
            },
            {
                id: 'prikluchenia',
                type: 'rect',
                rect: ['960', '463','auto','auto','auto', 'auto']
            },
            {
                id: 'shop',
                type: 'rect',
                rect: ['346', '323','auto','auto','auto', 'auto']
            },
            {
                id: 'gildia',
                type: 'rect',
                rect: ['512', '217','auto','auto','auto', 'auto']
            },
            {
                id: 'arena',
                type: 'rect',
                rect: ['704', '423','auto','auto','auto', 'auto']
            },
            {
                id: 'zerkalo',
                type: 'rect',
                rect: ['259', '633','auto','auto','auto', 'auto']
            },
            {
                id: 'bashna',
                type: 'rect',
                rect: ['709', '229','auto','auto','auto', 'auto']
            },
            {
                id: 'home',
                type: 'rect',
                rect: ['241', '413','auto','auto','auto', 'auto']
            },
            {
                id: 'kuznica',
                type: 'rect',
                rect: ['475', '496','auto','auto','auto', 'auto']
            },
            {
                id: 'gildia_flash',
                type: 'rect',
                rect: ['566', '218','auto','auto','auto', 'auto']
            },
            {
                id: 'gildia_title',
                type: 'text',
                rect: ['586px', '218px','auto','auto','auto', 'auto'],
                text: "ГИЛЬДИЯ",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'gildia_all',
                type: 'text',
                rect: ['586px', '241px','255px','58px','auto', 'auto'],
                text: "Создавать/набирать/вступать/выходить из гильдий. Участвовать в гильдийных ивентах.",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'lavka_flash',
                type: 'rect',
                rect: ['429px', '345px','auto','auto','auto', 'auto']
            },
            {
                id: 'lavka_title',
                type: 'text',
                rect: ['449px', '345px','auto','auto','auto', 'auto'],
                text: "ЛАВКА",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'lavka_all',
                type: 'text',
                rect: ['449px', '368px','189px','20px','auto', 'auto'],
                opacity: 0,
                text: "Покупать оружие и броню",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'bashna_flash',
                type: 'rect',
                rect: ['429px', '345px','auto','auto','auto', 'auto']
            },
            {
                id: 'bashna_title',
                type: 'text',
                rect: ['778px', '356px','auto','auto','auto', 'auto'],
                text: "БАШНЯ ДЕМОНОВ<br>",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'bashna_all',
                type: 'text',
                rect: ['778px', '379px','224px','20px','auto', 'auto'],
                text: "Данж, который можно проходить раз в день",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'arena_flash',
                type: 'rect',
                rect: ['429px', '345px','auto','auto','auto', 'auto']
            },
            {
                id: 'arena_title',
                type: 'text',
                rect: ['823px', '623px','auto','auto','auto', 'auto'],
                text: "АРЕНА",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'arena_all',
                type: 'text',
                rect: ['823px', '646px','202px','20px','auto', 'auto'],
                text: "Место для PVP. При входе в нее тебе предлагают 15 ",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'kuznica_flash',
                type: 'rect',
                rect: ['429px', '345px','auto','auto','auto', 'auto']
            },
            {
                id: 'kuznica_title',
                type: 'text',
                rect: ['535px', '580px','auto','auto','auto', 'auto'],
                text: "КУЗНИЦА",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'kuznica_all',
                type: 'text',
                rect: ['535px', '603px','189px','20px','auto', 'auto'],
                text: "Покупать оружие и броню",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'zerkalo_flash',
                type: 'rect',
                rect: ['429px', '345px','auto','auto','auto', 'auto']
            },
            {
                id: 'zerkalo_title',
                type: 'text',
                rect: ['250px', '656px','auto','auto','auto', 'auto'],
                text: "ЗЕРКАЛА ДУШИ",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'zerkalo_all',
                type: 'text',
                rect: ['250px', '679px','167px','20px','auto', 'auto'],
                text: "Какая-то сложная штука, я еще не разобрался",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'turma_flash',
                type: 'rect',
                rect: ['429px', '345px','auto','auto','auto', 'auto']
            },
            {
                id: 'turma_title',
                type: 'text',
                rect: ['56px', '705px','auto','auto','auto', 'auto'],
                text: "ТЮРМА",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'turma_all',
                type: 'text',
                rect: ['56px', '728px','167px','20px','auto', 'auto'],
                text: "Туда можно сажать побежденных врагов",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'home_flash',
                type: 'rect',
                rect: ['280px', '475px','auto','auto','auto', 'auto']
            },
            {
                id: 'home_title',
                type: 'text',
                rect: ['157px', '475px','auto','auto','auto', 'auto'],
                text: "ДОМ ПИТОМЦЕВ",
                align: "right",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'home_all',
                type: 'text',
                rect: ['87px', '498px','189px','20px','auto', 'auto'],
                text: "Покупать петов",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            },
            {
                id: 'prikluchenia_flash',
                type: 'rect',
                rect: ['280px', '475px','auto','auto','auto', 'auto']
            },
            {
                id: 'prikluchenia_title',
                type: 'text',
                rect: ['954px', '475px','auto','auto','auto', 'auto'],
                text: "ПРИКЛЮЧЕНИЯ",
                align: "right",
                font: ['pt-sans, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 10]
            },
            {
                id: 'prikluchenia_all',
                type: 'text',
                rect: ['918px', '498px','148px','20px','auto', 'auto'],
                text: "Основная PVE кампания игры",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.80)", 3, 3, 3]
            }],
            symbolInstances: [
            {
                id: 'lavka_flash',
                symbolName: 'flash'
            },
            {
                id: 'arena_flash',
                symbolName: 'flash'
            },
            {
                id: 'turma_flash',
                symbolName: 'flash'
            },
            {
                id: 'gildia',
                symbolName: 'gildia'
            },
            {
                id: 'shop',
                symbolName: 'shop'
            },
            {
                id: 'home',
                symbolName: 'home'
            },
            {
                id: 'bashna',
                symbolName: 'bashna'
            },
            {
                id: 'kuznica_flash',
                symbolName: 'flash'
            },
            {
                id: 'bashna_flash',
                symbolName: 'flash'
            },
            {
                id: 'turma',
                symbolName: 'turma'
            },
            {
                id: 'zerkalo',
                symbolName: 'zerkalo'
            },
            {
                id: 'prikluchenia',
                symbolName: 'prikluchenia'
            },
            {
                id: 'prikluchenia_flash',
                symbolName: 'flash'
            },
            {
                id: 'kuznica',
                symbolName: 'kuznica'
            },
            {
                id: 'home_flash',
                symbolName: 'flash'
            },
            {
                id: 'arena',
                symbolName: 'arena'
            },
            {
                id: 'gildia_flash',
                symbolName: 'flash'
            },
            {
                id: 'zerkalo_flash',
                symbolName: 'flash'
            }
            ]
        },
    states: {
        "Base State": {
            "${_kuznica_flash}": [
                ["style", "top", '580px'],
                ["style", "left", '515px']
            ],
            "${_gildia_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '586px'],
                ["style", "font-size", '16px'],
                ["style", "top", '218px'],
                ["style", "opacity", '1'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "font-family", 'pt-sans, sans-serif']
            ],
            "${_bashna_flash}": [
                ["style", "left", '758px'],
                ["style", "top", '356px']
            ],
            "${_lavka_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '449px'],
                ["style", "font-size", '16px'],
                ["style", "top", '345px'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "opacity", '1']
            ],
            "${_prikluchenia_flash}": [
                ["style", "left", '1070px'],
                ["style", "top", '475px']
            ],
            "${_prikluchenia_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '954px'],
                ["style", "font-size", '16px'],
                ["style", "top", '475px'],
                ["style", "text-align", 'right'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "opacity", '1']
            ],
            "${_home_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '87px'],
                ["style", "font-size", '14px'],
                ["style", "top", '498px'],
                ["style", "text-align", 'right'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["style", "width", '189px'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${_gildia}": [
                ["style", "left", '512px'],
                ["style", "top", '217px']
            ],
            "${_bashna_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '778px'],
                ["style", "font-size", '16px'],
                ["style", "top", '356px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_zerkalo}": [
                ["style", "top", '552px'],
                ["style", "left", '178px']
            ],
            "${_home_flash}": [
                ["style", "left", '280px'],
                ["style", "top", '475px']
            ],
            "${_lavka_flash}": [
                ["style", "left", '429px'],
                ["style", "top", '345px']
            ],
            "${_zerkalo_flash}": [
                ["style", "top", '580px'],
                ["style", "left", '515px']
            ],
            "${_arena_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '823px'],
                ["style", "font-size", '14px'],
                ["style", "top", '646px'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "width", '202px']
            ],
            "${_arena_flash}": [
                ["style", "left", '803px'],
                ["style", "top", '623px']
            ],
            "${_Rectangle}": [
                ["style", "height", '750px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'move']
            ],
            "${_kuznica_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '535px'],
                ["style", "font-size", '16px'],
                ["style", "top", '580px'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_zerkalo_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '250px'],
                ["style", "font-size", '14px'],
                ["style", "top", '679px'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "width", '167px']
            ],
            "${_bashna_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '778px'],
                ["style", "font-size", '14px'],
                ["style", "top", '379px'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["style", "width", '224px'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${_home_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '157px'],
                ["style", "font-size", '16px'],
                ["style", "top", '475px'],
                ["style", "text-align", 'right'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_kuznica_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '535px'],
                ["style", "font-size", '14px'],
                ["style", "top", '603px'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["style", "width", '189px'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${_Untitled-4}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_zerkalo_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '250px'],
                ["style", "font-size", '16px'],
                ["style", "top", '656px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "opacity", '1']
            ],
            "${_turma_flash}": [
                ["style", "top", '580px'],
                ["style", "left", '515px']
            ],
            "${_lavka_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '449px'],
                ["style", "font-size", '14px'],
                ["style", "top", '368px'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "width", '189px']
            ],
            "${_arena_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '823px'],
                ["style", "font-size", '16px'],
                ["style", "top", '623px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "opacity", '1']
            ],
            "${_turma_title}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '56px'],
                ["style", "font-size", '16px'],
                ["style", "top", '705px'],
                ["style", "opacity", '1'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "font-family", 'pt-sans, sans-serif']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1132px'],
                ["style", "height", '950px'],
                ["style", "overflow", 'hidden']
            ],
            "${_prikluchenia_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '918px'],
                ["style", "font-size", '14px'],
                ["style", "top", '498px'],
                ["style", "text-align", 'right'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "width", '148px']
            ],
            "${_gildia_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '586px'],
                ["style", "font-size", '14px'],
                ["style", "top", '241px'],
                ["style", "height", '58px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["style", "width", '255px'],
                ["subproperty", "textShadow.offsetV", '0px']
            ],
            "${_turma_all}": [
                ["subproperty", "textShadow.blur", '10px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '56px'],
                ["style", "font-size", '14px'],
                ["style", "top", '728px'],
                ["style", "height", '20px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.80)'],
                ["style", "width", '167px'],
                ["subproperty", "textShadow.offsetV", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid49", tween: [ "style", "${_turma_flash}", "left", '36px', { fromValue: '515px'}], position: 0, duration: 500 },
                { id: "eid44", tween: [ "style", "${_arena_flash}", "left", '803px', { fromValue: '803px'}], position: 500, duration: 0 },
                { id: "eid42", tween: [ "style", "${_arena_flash}", "top", '623px', { fromValue: '623px'}], position: 500, duration: 0 },
                { id: "eid32", tween: [ "style", "${_kuznica_flash}", "top", '580px', { fromValue: '580px'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_kuznica_flash}", "left", '515px', { fromValue: '515px'}], position: 0, duration: 0 },
                { id: "eid47", tween: [ "style", "${_zerkalo_flash}", "left", '230px', { fromValue: '515px'}], position: 0, duration: 500 },
                { id: "eid50", tween: [ "style", "${_turma_flash}", "top", '705px', { fromValue: '580px'}], position: 0, duration: 500 },
                { id: "eid48", tween: [ "style", "${_zerkalo_flash}", "top", '656px', { fromValue: '580px'}], position: 0, duration: 500 }            ]
        }
    }
},
"flash": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['5px', '5px', '20px', '20px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)'],
                    id: 'EllipseCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EllipseCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["transform", "scaleX", '4'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '10px'],
                ["style", "top", '5px'],
                ["transform", "scaleY", '4'],
                ["style", "height", '10px'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid25", tween: [ "transform", "${_EllipseCopy}", "scaleX", '1', { fromValue: '4'}], position: 0, duration: 500 },
                { id: "eid24", tween: [ "style", "${_EllipseCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid26", tween: [ "transform", "${_EllipseCopy}", "scaleY", '1', { fromValue: '4'}], position: 0, duration: 500 }            ]
        }
    }
},
"home": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Untitled-45',
                    type: 'image',
                    rect: ['1px', '1px', '134px', '138px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-45.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Untitled-45}": [
                ["style", "top", '1px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '141px'],
                ["style", "width", '136px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid63", tween: [ "style", "${_Untitled-45}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"kuznica": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Untitled-442',
                    type: 'image',
                    rect: ['0px', '0px', '204px', '152px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-44.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Untitled-442}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible']
            ],
            "${symbolSelector}": [
                ["style", "height", '152px'],
                ["style", "width", '204px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid57", tween: [ "style", "${_Untitled-442}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"bashna": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bashna',
                    type: 'image',
                    rect: ['49px', '137px', '101px', '209px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-46.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bashna}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '209px'],
                ["style", "width", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid69", tween: [ "style", "${_bashna}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"zerkalo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Untitled-47',
                    type: 'image',
                    rect: ['0px', '0px', '170px', '149px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-47.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Untitled-47}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '149px'],
                ["style", "width", '170px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid81", tween: [ "style", "${_Untitled-47}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"arena": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Untitled-48',
                    type: 'image',
                    rect: ['0px', '0px', '279px', '259px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-48.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '259px'],
                ["style", "width", '279px']
            ],
            "${_Untitled-48}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid83", tween: [ "style", "${_Untitled-48}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }            ]
        }
    }
},
"gildia": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'gldia',
                    type: 'image',
                    rect: ['0px', '0px', '115px', '129px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-49.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gldia}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '129px'],
                ["style", "width", '115px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 461,
            autoPlay: false,
            timeline: [
                { id: "eid85", tween: [ "style", "${_gldia}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 461 }            ]
        }
    }
},
"shop": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Untitled-410',
                    type: 'image',
                    rect: ['0px', '0px', '161px', '167px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-410.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Untitled-410}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '167px'],
                ["style", "width", '161px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 490,
            autoPlay: false,
            timeline: [
                { id: "eid92", tween: [ "style", "${_Untitled-410}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 490 }            ]
        }
    }
},
"turma": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '166px', '169px', 'auto', 'auto'],
                    id: 'Untitled-411',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-411.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '169px'],
                ["style", "width", '166px']
            ],
            "${_Untitled-411}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 490,
            autoPlay: false,
            timeline: [
                { id: "eid94", tween: [ "style", "${_Untitled-411}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 490 }            ]
        }
    }
},
"prikluchenia": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Untitled-412',
                    type: 'image',
                    rect: ['0px', '0px', '176px', '189px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Untitled-412.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Untitled-412}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '189px'],
                ["style", "width", '176px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            timeline: [
                { id: "eid98", tween: [ "style", "${_Untitled-412}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-130013235");
