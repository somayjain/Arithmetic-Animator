/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Image2',
            type:'image',
            rect:['1px','0px','799','599','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"backgroundOnly.png"]
         },
         {
            id:'logo',
            type:'image',
            rect:['0','0','62','84','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo.png"]
         },
         {
            id:'logoShadow',
            type:'image',
            rect:['0','0','124','15','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow.png"]
         },
         {
            id:'E',
            type:'image',
            rect:['0','0','90','85','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"E.png"]
         },
         {
            id:'Eshadow',
            type:'image',
            rect:['0','0','124','15','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow1.png"]
         },
         {
            id:'D',
            type:'image',
            rect:['250','0','96','85','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"D.png"],
            transform:[]
         },
         {
            id:'DShadow',
            type:'image',
            rect:['0','0','124','15','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow12.png"]
         },
         {
            id:'G',
            type:'image',
            rect:['0','0','97','89','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"G.png"]
         },
         {
            id:'GShadow',
            type:'image',
            rect:['0','0','124','15','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shadow9.png"]
         },
         {
            id:'E2',
            type:'image',
            rect:['0','0','90','85','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"E1.png"]
         },
         {
            id:'E2Shadow',
            type:'image',
            rect:['366','411','124','15','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"shadow8.png"],
            transform:[]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_DShadow}": [
            ["style", "top", '410px'],
            ["transform", "scaleY", '0.1'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["style", "left", '227px']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgb(255, 255, 255)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "width", '800px']
         ],
         "${_E}": [
            ["style", "top", '-91.74px'],
            ["style", "opacity", '0.2890625'],
            ["style", "left", '243px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_logo}": [
            ["style", "top", '-87px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "opacity", '0.359375'],
            ["style", "left", '167px']
         ],
         "${_Image2}": [
            ["style", "left", '1px'],
            ["style", "top", '0px']
         ],
         "${_G}": [
            ["style", "top", '-97px'],
            ["style", "opacity", '0.2890625'],
            ["style", "left", '227px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_E2}": [
            ["style", "top", '-97px'],
            ["style", "opacity", '0.2890625'],
            ["style", "left", '249px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Eshadow}": [
            ["style", "top", '410px'],
            ["transform", "scaleY", '0.1'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["style", "left", '231px'],
            ["style", "height", '11px']
         ],
         "${_D}": [
            ["style", "top", '-97px'],
            ["style", "opacity", '0.2890625'],
            ["style", "left", '263px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_GShadow}": [
            ["style", "top", '410px'],
            ["transform", "scaleY", '0.1'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["style", "left", '227px']
         ],
         "${_logoShadow}": [
            ["style", "top", '410px'],
            ["transform", "scaleY", '0.1'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0.5'],
            ["style", "left", '135px'],
            ["style", "height", '11px']
         ],
         "${_E2Shadow}": [
            ["style", "top", '410px'],
            ["transform", "scaleY", '0.1'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["style", "left", '227px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12391,
         autoPlay: true,
         timeline: [
            { id: "eid198", tween: [ "style", "${_E2Shadow}", "opacity", '1', { fromValue: '0'}], position: 3150, duration: 305 },
            { id: "eid208", tween: [ "style", "${_E2Shadow}", "opacity", '0.5', { fromValue: '1'}], position: 3455, duration: 115 },
            { id: "eid211", tween: [ "style", "${_E2Shadow}", "opacity", '1', { fromValue: '0.5'}], position: 3570, duration: 240 },
            { id: "eid283", tween: [ "style", "${_D}", "left", '445px', { fromValue: '263px'}], position: 5950, duration: 721, easing: "easeOutCubic" },
            { id: "eid355", tween: [ "style", "${_D}", "left", '975px', { fromValue: '445px'}], position: 8274, duration: 254 },
            { id: "eid378", tween: [ "style", "${_D}", "left", '322.6px', { fromValue: '-48.8px'}], position: 9153, duration: 757, easing: "easeOutCubic" },
            { id: "eid393", tween: [ "style", "${_D}", "left", '349.6px', { fromValue: '322.6px'}], position: 10538, duration: 404, easing: "easeOutCubic" },
            { id: "eid2", tween: [ "style", "${_D}", "left", '340px', { fromValue: '349.6px'}], position: 10942, duration: 1449 },
            { id: "eid257", tween: [ "style", "${_GShadow}", "top", '410px', { fromValue: '410px'}], position: 5500, duration: 0 },
            { id: "eid246", tween: [ "transform", "${_GShadow}", "scaleX", '0.9985', { fromValue: '0.1'}], position: 4674, duration: 381 },
            { id: "eid250", tween: [ "transform", "${_GShadow}", "scaleX", '0.85062', { fromValue: '0.9985'}], position: 5055, duration: 143 },
            { id: "eid254", tween: [ "transform", "${_GShadow}", "scaleX", '1', { fromValue: '0.85062'}], position: 5199, duration: 300 },
            { id: "eid136", tween: [ "transform", "${_G}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1610, duration: 117 },
            { id: "eid137", tween: [ "transform", "${_G}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1727, duration: 117 },
            { id: "eid238", tween: [ "transform", "${_G}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 4674, duration: 261 },
            { id: "eid241", tween: [ "transform", "${_G}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 4935, duration: 201 },
            { id: "eid111", tween: [ "transform", "${_Eshadow}", "scaleY", '1', { fromValue: '0.1'}], position: 580, duration: 750, easing: "easeOutBounce" },
            { id: "eid330", tween: [ "transform", "${_DShadow}", "scaleY", '0.999', { fromValue: '0.1'}], position: 5949, duration: 227 },
            { id: "eid334", tween: [ "transform", "${_DShadow}", "scaleY", '0.8506', { fromValue: '0.999'}], position: 6176, duration: 85 },
            { id: "eid338", tween: [ "transform", "${_DShadow}", "scaleY", '1', { fromValue: '0.8506'}], position: 6262, duration: 179 },
            { id: "eid49", tween: [ "style", "${_logoShadow}", "left", '135px', { fromValue: '135px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid215", tween: [ "style", "${_logoShadow}", "left", '149px', { fromValue: '135px'}], position: 2645, duration: 505 },
            { id: "eid218", tween: [ "style", "${_logoShadow}", "left", '136px', { fromValue: '149px'}], position: 3150, duration: 420 },
            { id: "eid233", tween: [ "style", "${_logoShadow}", "left", '149px', { fromValue: '135px'}], position: 4260, duration: 426 },
            { id: "eid235", tween: [ "style", "${_logoShadow}", "left", '136px', { fromValue: '149px'}], position: 4686, duration: 354 },
            { id: "eid273", tween: [ "style", "${_logoShadow}", "left", '149px', { fromValue: '135px'}], position: 5600, duration: 349 },
            { id: "eid275", tween: [ "style", "${_logoShadow}", "left", '134px', { fromValue: '149px'}], position: 5950, duration: 290 },
            { id: "eid347", tween: [ "style", "${_logoShadow}", "left", '-52px', { fromValue: '134px'}], position: 7500, duration: 546, easing: "easeInOutCubic" },
            { id: "eid348", tween: [ "style", "${_logoShadow}", "left", '163px', { fromValue: '-52px'}], position: 8046, duration: 453, easing: "easeOutBounce" },
            { id: "eid376", tween: [ "style", "${_logoShadow}", "left", '879px', { fromValue: '163px'}], position: 8948, duration: 447, easing: "easeOutCubic" },
            { id: "eid388", tween: [ "style", "${_logoShadow}", "left", '152px', { fromValue: '-89px'}], position: 10250, duration: 250 },
            { id: "eid407", tween: [ "style", "${_logoShadow}", "left", '146px', { fromValue: '152px'}], position: 10500, duration: 250, easing: "easeOutCubic" },
            { id: "eid54", tween: [ "style", "${_logoShadow}", "top", '410px', { fromValue: '410px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid19", tween: [ "style", "${_logo}", "opacity", '0.359375', { fromValue: '0.359375'}], position: 12391, duration: 0 },
            { id: "eid18", tween: [ "style", "${_E2}", "opacity", '0.2890625', { fromValue: '0.2890625'}], position: 12391, duration: 0 },
            { id: "eid17", tween: [ "style", "${_G}", "opacity", '0.2890625', { fromValue: '0.2890625'}], position: 12391, duration: 0 },
            { id: "eid212", tween: [ "style", "${_E2Shadow}", "top", '410px', { fromValue: '410px'}], position: 3810, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Eshadow}", "height", '11px', { fromValue: '11px'}], position: 580, duration: 0, easing: "easeOutBounce" },
            { id: "eid14", tween: [ "style", "${_D}", "opacity", '0.2890625', { fromValue: '0.2890625'}], position: 12391, duration: 0 },
            { id: "eid126", tween: [ "style", "${_D}", "top", '250px', { fromValue: '-97px'}], position: 1030, duration: 720, easing: "easeOutBounce" },
            { id: "eid284", tween: [ "style", "${_D}", "top", '333px', { fromValue: '250px'}], position: 6024, duration: 645, easing: "easeOutBounce" },
            { id: "eid7", tween: [ "style", "${_D}", "top", '328px', { fromValue: '333px'}], position: 6669, duration: 5722 },
            { id: "eid151", tween: [ "transform", "${_logo}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 2645, duration: 355 },
            { id: "eid153", tween: [ "transform", "${_logo}", "rotateZ", '-29deg', { fromValue: '15deg'}], position: 3000, duration: 150 },
            { id: "eid176", tween: [ "transform", "${_logo}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 3150, duration: 420 },
            { id: "eid224", tween: [ "transform", "${_logo}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 4239, duration: 305 },
            { id: "eid227", tween: [ "transform", "${_logo}", "rotateZ", '-29deg', { fromValue: '15deg'}], position: 4545, duration: 129 },
            { id: "eid229", tween: [ "transform", "${_logo}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 4674, duration: 361 },
            { id: "eid261", tween: [ "transform", "${_logo}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 5600, duration: 245 },
            { id: "eid264", tween: [ "transform", "${_logo}", "rotateZ", '-29deg', { fromValue: '15deg'}], position: 5846, duration: 103 },
            { id: "eid265", tween: [ "transform", "${_logo}", "rotateZ", '0deg', { fromValue: '-29deg'}], position: 5950, duration: 290 },
            { id: "eid102", tween: [ "transform", "${_logoShadow}", "scaleY", '1', { fromValue: '0.1'}], position: 0, duration: 750, easing: "easeOutBounce" },
            { id: "eid214", tween: [ "transform", "${_logoShadow}", "scaleY", '0.5', { fromValue: '1'}], position: 2645, duration: 355 },
            { id: "eid219", tween: [ "transform", "${_logoShadow}", "scaleY", '0.9', { fromValue: '0.5'}], position: 3325, duration: 675, easing: "easeOutBounce" },
            { id: "eid232", tween: [ "transform", "${_logoShadow}", "scaleY", '0.5', { fromValue: '1'}], position: 4260, duration: 299 },
            { id: "eid236", tween: [ "transform", "${_logoShadow}", "scaleY", '0.9', { fromValue: '0.5'}], position: 4834, duration: 570, easing: "easeOutBounce" },
            { id: "eid272", tween: [ "transform", "${_logoShadow}", "scaleY", '0.5', { fromValue: '1'}], position: 5600, duration: 245 },
            { id: "eid276", tween: [ "transform", "${_logoShadow}", "scaleY", '0.9', { fromValue: '0.5'}], position: 6071, duration: 467, easing: "easeOutBounce" },
            { id: "eid96", tween: [ "style", "${_logo}", "top", '333px', { fromValue: '-87px'}], position: 0, duration: 750, easing: "easeOutBounce" },
            { id: "eid148", tween: [ "style", "${_logo}", "top", '355px', { fromValue: '333px'}], position: 2500, duration: 145 },
            { id: "eid150", tween: [ "style", "${_logo}", "top", '44px', { fromValue: '355px'}], position: 2645, duration: 680, easing: "easeOutCubic" },
            { id: "eid175", tween: [ "style", "${_logo}", "top", '333px', { fromValue: '44px'}], position: 3325, duration: 675, easing: "easeOutBounce" },
            { id: "eid223", tween: [ "style", "${_logo}", "top", '355px', { fromValue: '333px'}], position: 4115, duration: 124 },
            { id: "eid226", tween: [ "style", "${_logo}", "top", '149.3px', { fromValue: '355px'}], position: 4239, duration: 434, easing: "easeOutCubic" },
            { id: "eid231", tween: [ "style", "${_logo}", "top", '144px', { fromValue: '149.3px'}], position: 4674, duration: 150 },
            { id: "eid230", tween: [ "style", "${_logo}", "top", '333px', { fromValue: '144px'}], position: 4824, duration: 580, easing: "easeOutBounce" },
            { id: "eid259", tween: [ "style", "${_logo}", "top", '355px', { fromValue: '333px'}], position: 5500, duration: 100 },
            { id: "eid263", tween: [ "style", "${_logo}", "top", '194.58px', { fromValue: '355px'}], position: 5600, duration: 245, easing: "easeOutCubic" },
            { id: "eid269", tween: [ "style", "${_logo}", "top", '199.29px', { fromValue: '194.58px'}], position: 5846, duration: 103 },
            { id: "eid266", tween: [ "style", "${_logo}", "top", '194px', { fromValue: '199.29px'}], position: 5950, duration: 121 },
            { id: "eid268", tween: [ "style", "${_logo}", "top", '333px', { fromValue: '194px'}], position: 6071, duration: 467, easing: "easeOutBounce" },
            { id: "eid132", tween: [ "transform", "${_E}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 853, duration: 136 },
            { id: "eid133", tween: [ "transform", "${_E}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 990, duration: 136 },
            { id: "eid138", tween: [ "transform", "${_E2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1912, duration: 111 },
            { id: "eid139", tween: [ "transform", "${_E2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 2024, duration: 111 },
            { id: "eid173", tween: [ "transform", "${_E2}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 3150, duration: 305 },
            { id: "eid174", tween: [ "transform", "${_E2}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 3455, duration: 235 },
            { id: "eid119", tween: [ "style", "${_E}", "top", '333px', { fromValue: '-91.74px'}], position: 580, duration: 750, easing: "easeOutBounce" },
            { id: "eid202", tween: [ "transform", "${_E2Shadow}", "scaleX", '1', { fromValue: '0.1'}], position: 3150, duration: 305 },
            { id: "eid206", tween: [ "transform", "${_E2Shadow}", "scaleX", '0.85', { fromValue: '1'}], position: 3455, duration: 115 },
            { id: "eid209", tween: [ "transform", "${_E2Shadow}", "scaleX", '1', { fromValue: '0.85'}], position: 3570, duration: 240 },
            { id: "eid247", tween: [ "style", "${_GShadow}", "left", '393.48px', { fromValue: '227px'}], position: 4674, duration: 381 },
            { id: "eid251", tween: [ "style", "${_GShadow}", "left", '416.44px', { fromValue: '393.48px'}], position: 5055, duration: 143 },
            { id: "eid255", tween: [ "style", "${_GShadow}", "left", '430px', { fromValue: '416.44px'}], position: 5199, duration: 300 },
            { id: "eid288", tween: [ "style", "${_GShadow}", "left", '556px', { fromValue: '430px'}], position: 6178, duration: 622, easing: "easeOutCubic" },
            { id: "eid356", tween: [ "style", "${_GShadow}", "left", '1149px', { fromValue: '556px'}], position: 8299, duration: 242 },
            { id: "eid373", tween: [ "style", "${_GShadow}", "left", '397.6px', { fromValue: '-76.8px'}], position: 9008, duration: 757, easing: "easeOutCubic" },
            { id: "eid394", tween: [ "style", "${_GShadow}", "left", '429.6px', { fromValue: '397.6px'}], position: 10589, duration: 404, easing: "easeOutCubic" },
            { id: "eid98", tween: [ "style", "${_logoShadow}", "opacity", '0.5', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBounce" },
            { id: "eid204", tween: [ "transform", "${_E2Shadow}", "scaleY", '1', { fromValue: '0.1'}], position: 3150, duration: 305 },
            { id: "eid207", tween: [ "transform", "${_E2Shadow}", "scaleY", '0.85', { fromValue: '1'}], position: 3455, duration: 115 },
            { id: "eid210", tween: [ "transform", "${_E2Shadow}", "scaleY", '1', { fromValue: '0.85'}], position: 3570, duration: 240 },
            { id: "eid16", tween: [ "style", "${_E}", "opacity", '0.2890625', { fromValue: '0.2890625'}], position: 12391, duration: 0 },
            { id: "eid239", tween: [ "style", "${_G}", "left", '445px', { fromValue: '227px'}], position: 4674, duration: 826, easing: "easeOutCubic" },
            { id: "eid286", tween: [ "style", "${_G}", "left", '565px', { fromValue: '445px'}], position: 6178, duration: 622, easing: "easeOutCubic" },
            { id: "eid357", tween: [ "style", "${_G}", "left", '1158px', { fromValue: '565px'}], position: 8299, duration: 242 },
            { id: "eid372", tween: [ "style", "${_G}", "left", '417.6px', { fromValue: '-48.8px'}], position: 9008, duration: 757, easing: "easeOutCubic" },
            { id: "eid395", tween: [ "style", "${_G}", "left", '449.6px', { fromValue: '417.6px'}], position: 10589, duration: 404, easing: "easeOutCubic" },
            { id: "eid12", tween: [ "style", "${_G}", "left", '454px', { fromValue: '449.6px'}], position: 10993, duration: 1398 },
            { id: "eid127", tween: [ "style", "${_G}", "top", '167px', { fromValue: '-97px'}], position: 1375, duration: 645, easing: "easeOutBounce" },
            { id: "eid240", tween: [ "style", "${_G}", "top", '330px', { fromValue: '167px'}], position: 4759, duration: 740, easing: "easeOutBounce" },
            { id: "eid13", tween: [ "style", "${_G}", "top", '329px', { fromValue: '330px'}], position: 5499, duration: 6892 },
            { id: "eid333", tween: [ "style", "${_DShadow}", "opacity", '1', { fromValue: '0'}], position: 5949, duration: 227 },
            { id: "eid337", tween: [ "style", "${_DShadow}", "opacity", '0.5', { fromValue: '1'}], position: 6176, duration: 85 },
            { id: "eid341", tween: [ "style", "${_DShadow}", "opacity", '1', { fromValue: '0.5'}], position: 6262, duration: 179 },
            { id: "eid179", tween: [ "style", "${_logo}", "left", '179px', { fromValue: '167px'}], position: 2500, duration: 650 },
            { id: "eid177", tween: [ "style", "${_logo}", "left", '164px', { fromValue: '179px'}], position: 3150, duration: 420 },
            { id: "eid221", tween: [ "style", "${_logo}", "left", '153px', { fromValue: '167px'}], position: 4115, duration: 559 },
            { id: "eid228", tween: [ "style", "${_logo}", "left", '164px', { fromValue: '153px'}], position: 4674, duration: 361 },
            { id: "eid260", tween: [ "style", "${_logo}", "left", '192px', { fromValue: '164px'}], position: 5500, duration: 450 },
            { id: "eid267", tween: [ "style", "${_logo}", "left", '164px', { fromValue: '192px'}], position: 5950, duration: 290 },
            { id: "eid345", tween: [ "style", "${_logo}", "left", '-20px', { fromValue: '164px'}], position: 7500, duration: 546, easing: "easeInOutCubic" },
            { id: "eid346", tween: [ "style", "${_logo}", "left", '192px', { fromValue: '-20px'}], position: 8046, duration: 453, easing: "easeOutBounce" },
            { id: "eid377", tween: [ "style", "${_logo}", "left", '908px', { fromValue: '192px'}], position: 8948, duration: 447, easing: "easeOutCubic" },
            { id: "eid389", tween: [ "style", "${_logo}", "left", '181px', { fromValue: '-60px'}], position: 10250, duration: 250 },
            { id: "eid408", tween: [ "style", "${_logo}", "left", '175px', { fromValue: '181px'}], position: 10500, duration: 250, easing: "easeOutCubic" },
            { id: "eid352", tween: [ "style", "${_E}", "left", '359.48px', { fromValue: '243px'}], position: 8209, duration: 65 },
            { id: "eid400", tween: [ "style", "${_E}", "left", '810px', { fromValue: '359.48px'}], position: 8274, duration: 254 },
            { id: "eid382", tween: [ "style", "${_E}", "left", '232.6px', { fromValue: '-48.8px'}], position: 9304, duration: 757, easing: "easeOutCubic" },
            { id: "eid391", tween: [ "style", "${_E}", "left", '253.6px', { fromValue: '232.6px'}], position: 10500, duration: 400, easing: "easeOutCubic" },
            { id: "eid1", tween: [ "style", "${_E}", "left", '257.6px', { fromValue: '253.6px'}], position: 10900, duration: 1491 },
            { id: "eid100", tween: [ "transform", "${_logoShadow}", "scaleX", '1', { fromValue: '0.1'}], position: 0, duration: 750, easing: "easeOutBounce" },
            { id: "eid213", tween: [ "transform", "${_logoShadow}", "scaleX", '0.5', { fromValue: '1'}], position: 2645, duration: 355 },
            { id: "eid220", tween: [ "transform", "${_logoShadow}", "scaleX", '0.9', { fromValue: '0.5'}], position: 3325, duration: 675, easing: "easeOutBounce" },
            { id: "eid234", tween: [ "transform", "${_logoShadow}", "scaleX", '0.5', { fromValue: '1'}], position: 4260, duration: 299 },
            { id: "eid237", tween: [ "transform", "${_logoShadow}", "scaleX", '0.9', { fromValue: '0.5'}], position: 4834, duration: 570, easing: "easeOutBounce" },
            { id: "eid274", tween: [ "transform", "${_logoShadow}", "scaleX", '0.5', { fromValue: '1'}], position: 5600, duration: 245 },
            { id: "eid277", tween: [ "transform", "${_logoShadow}", "scaleX", '0.9', { fromValue: '0.5'}], position: 6071, duration: 467, easing: "easeOutBounce" },
            { id: "eid194", tween: [ "style", "${_E2Shadow}", "left", '412px', { fromValue: '227px'}], position: 3150, duration: 305 },
            { id: "eid195", tween: [ "style", "${_E2Shadow}", "left", '464.37px', { fromValue: '412px'}], position: 3455, duration: 115 },
            { id: "eid205", tween: [ "style", "${_E2Shadow}", "left", '515px', { fromValue: '464.37px'}], position: 3570, duration: 240 },
            { id: "eid196", tween: [ "style", "${_E2Shadow}", "left", '524px', { fromValue: '515px'}], position: 3810, duration: 305 },
            { id: "eid289", tween: [ "style", "${_E2Shadow}", "left", '694px', { fromValue: '524px'}], position: 6209, duration: 706, easing: "easeOutCubic" },
            { id: "eid358", tween: [ "style", "${_E2Shadow}", "left", '1404px', { fromValue: '694px'}], position: 8328, duration: 211 },
            { id: "eid368", tween: [ "style", "${_E2Shadow}", "left", '497.6px', { fromValue: '-76.8px'}], position: 8871, duration: 757, easing: "easeOutCubic" },
            { id: "eid396", tween: [ "style", "${_E2Shadow}", "left", '535.6px', { fromValue: '497.6px'}], position: 10635, duration: 407, easing: "easeOutCubic" },
            { id: "eid332", tween: [ "transform", "${_DShadow}", "scaleX", '0.999', { fromValue: '0.1'}], position: 5949, duration: 227 },
            { id: "eid336", tween: [ "transform", "${_DShadow}", "scaleX", '0.8506', { fromValue: '0.999'}], position: 6176, duration: 85 },
            { id: "eid340", tween: [ "transform", "${_DShadow}", "scaleX", '1', { fromValue: '0.8506'}], position: 6262, duration: 179 },
            { id: "eid113", tween: [ "style", "${_Eshadow}", "opacity", '1', { fromValue: '0'}], position: 580, duration: 750, easing: "easeOutBounce" },
            { id: "eid53", tween: [ "style", "${_logoShadow}", "height", '11px', { fromValue: '11px'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid171", tween: [ "style", "${_E2}", "left", '542px', { fromValue: '249px'}], position: 3150, duration: 965, easing: "easeOutCubic" },
            { id: "eid287", tween: [ "style", "${_E2}", "left", '722px', { fromValue: '542px'}], position: 6209, duration: 706, easing: "easeOutCubic" },
            { id: "eid359", tween: [ "style", "${_E2}", "left", '1432px', { fromValue: '722px'}], position: 8328, duration: 211 },
            { id: "eid369", tween: [ "style", "${_E2}", "left", '505.6px', { fromValue: '-48.8px'}], position: 8871, duration: 757, easing: "easeOutCubic" },
            { id: "eid397", tween: [ "style", "${_E2}", "left", '543.6px', { fromValue: '505.6px'}], position: 10635, duration: 407, easing: "easeOutCubic" },
            { id: "eid10", tween: [ "style", "${_E2}", "left", '531.57px', { fromValue: '543.6px'}], position: 11042, duration: 1349 },
            { id: "eid58", tween: [ "style", "${_Eshadow}", "top", '410px', { fromValue: '410px'}], position: 580, duration: 0 },
            { id: "eid147", tween: [ "transform", "${_logo}", "scaleY", '0.5', { fromValue: '1'}], position: 2500, duration: 145 },
            { id: "eid149", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0.5'}], position: 2645, duration: 395 },
            { id: "eid222", tween: [ "transform", "${_logo}", "scaleY", '0.5', { fromValue: '1'}], position: 4115, duration: 124 },
            { id: "eid225", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0.5'}], position: 4239, duration: 206 },
            { id: "eid258", tween: [ "transform", "${_logo}", "scaleY", '0.5', { fromValue: '1'}], position: 5500, duration: 100 },
            { id: "eid262", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0.5'}], position: 5600, duration: 166 },
            { id: "eid115", tween: [ "transform", "${_Eshadow}", "scaleX", '1', { fromValue: '0.1'}], position: 580, duration: 750, easing: "easeOutBounce" },
            { id: "eid245", tween: [ "transform", "${_GShadow}", "scaleY", '0.9985', { fromValue: '0.1'}], position: 4674, duration: 381 },
            { id: "eid249", tween: [ "transform", "${_GShadow}", "scaleY", '0.85062', { fromValue: '0.9985'}], position: 5055, duration: 143 },
            { id: "eid253", tween: [ "transform", "${_GShadow}", "scaleY", '1', { fromValue: '0.85062'}], position: 5199, duration: 300 },
            { id: "eid134", tween: [ "transform", "${_D}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1292, duration: 131 },
            { id: "eid135", tween: [ "transform", "${_D}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1423, duration: 131 },
            { id: "eid282", tween: [ "transform", "${_D}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 5950, duration: 227 },
            { id: "eid285", tween: [ "transform", "${_D}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 6178, duration: 175 },
            { id: "eid9", tween: [ "style", "${_DShadow}", "top", '420px', { fromValue: '410px'}], position: 6441, duration: 5950 },
            { id: "eid244", tween: [ "style", "${_GShadow}", "opacity", '1', { fromValue: '0'}], position: 4674, duration: 381 },
            { id: "eid248", tween: [ "style", "${_GShadow}", "opacity", '0.5', { fromValue: '1'}], position: 5055, duration: 143 },
            { id: "eid252", tween: [ "style", "${_GShadow}", "opacity", '1', { fromValue: '0.5'}], position: 5199, duration: 300 },
            { id: "eid128", tween: [ "style", "${_E2}", "top", '85px', { fromValue: '-97px'}], position: 1690, duration: 609, easing: "easeOutBounce" },
            { id: "eid172", tween: [ "style", "${_E2}", "top", '333px', { fromValue: '85px'}], position: 3250, duration: 560, easing: "easeOutBounce" },
            { id: "eid11", tween: [ "style", "${_E2}", "top", '328px', { fromValue: '333px'}], position: 3810, duration: 8581 },
            { id: "eid353", tween: [ "style", "${_Eshadow}", "left", '810px', { fromValue: '231px'}], position: 8209, duration: 320 },
            { id: "eid383", tween: [ "style", "${_Eshadow}", "left", '210.6px', { fromValue: '-48.8px'}], position: 9304, duration: 757, easing: "easeOutCubic" },
            { id: "eid390", tween: [ "style", "${_Eshadow}", "left", '231.6px', { fromValue: '210.6px'}], position: 10500, duration: 400, easing: "easeOutCubic" },
            { id: "eid331", tween: [ "style", "${_DShadow}", "left", '363.69px', { fromValue: '227px'}], position: 5949, duration: 227 },
            { id: "eid335", tween: [ "style", "${_DShadow}", "left", '388.74px', { fromValue: '363.69px'}], position: 6176, duration: 85 },
            { id: "eid339", tween: [ "style", "${_DShadow}", "left", '425.38px', { fromValue: '388.74px'}], position: 6262, duration: 179 },
            { id: "eid342", tween: [ "style", "${_DShadow}", "left", '427px', { fromValue: '425.38px'}], position: 6441, duration: 227 },
            { id: "eid354", tween: [ "style", "${_DShadow}", "left", '957px', { fromValue: '427px'}], position: 8274, duration: 254 },
            { id: "eid380", tween: [ "style", "${_DShadow}", "left", '307.58px', { fromValue: '-48.8px'}], position: 9153, duration: 757, easing: "easeOutCubic" },
            { id: "eid392", tween: [ "style", "${_DShadow}", "left", '334.58px', { fromValue: '307.58px'}], position: 10538, duration: 404, easing: "easeOutCubic" },
            { id: "eid8", tween: [ "style", "${_DShadow}", "left", '344px', { fromValue: '334.58px'}], position: 10942, duration: 1449 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-26835172");
