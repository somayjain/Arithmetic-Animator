/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Trebuchet MS\'']='';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'drawing-kids-wallpapers',
            type:'image',
            rect:['0','0','100%','66.7%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"drawing-kids-wallpapers.jpg",'0px','0px','100%','auto']
         },
         {
            id:'Text2',
            type:'text',
            rect:['0px','22px','572px','80px','auto','auto'],
            opacity:0,
            text:"Arithmetic Animator",
            align:"center",
            font:['Georgia, Times New Roman, Times, serif',24,"rgba(218,214,160,1.00)","900","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_drawing-kids-wallpapers}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '14px'],
            ["style", "left", '-112px'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "height", '100%'],
            ["style", "opacity", '1'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '131.25%']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(218,214,160,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '0px'],
            ["style", "width", '572px'],
            ["style", "top", '12px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "font-size", '24px'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5117,
         autoPlay: true,
         timeline: [
            { id: "eid108", tween: [ "style", "${_Text2}", "opacity", '0.65625', { fromValue: '0.000000'}], position: 0, duration: 3500 },
            { id: "eid111", tween: [ "style", "${_Text2}", "opacity", '0.984375', { fromValue: '0.656250'}], position: 3500, duration: 1617 },
            { id: "eid109", tween: [ "style", "${_Text2}", "font-size", '50px', { fromValue: '24px'}], position: 0, duration: 3500 },
            { id: "eid114", tween: [ "style", "${_Text2}", "font-size", '50px', { fromValue: '50px'}], position: 5117, duration: 0 },
            { id: "eid104", tween: [ "style", "${_drawing-kids-wallpapers}", "left", '-121px', { fromValue: '-112px'}], position: 0, duration: 5117 },
            { id: "eid9", tween: [ "style", "${_drawing-kids-wallpapers}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text2}", "top", '12px', { fromValue: '12px'}], position: 5117, duration: 0 },
            { id: "eid13", tween: [ "style", "${_drawing-kids-wallpapers}", "width", '125%', { fromValue: '131.25%'}], position: 0, duration: 5000 },
            { id: "eid110", tween: [ "color", "${_Text2}", "color", 'rgba(93,82,87,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(218,214,160,1)'}], position: 0, duration: 3500 },
            { id: "eid103", tween: [ "style", "${_drawing-kids-wallpapers}", "top", '0px', { fromValue: '14px'}], position: 0, duration: 5117 },
            { id: "eid47", tween: [ "style", "${_drawing-kids-wallpapers}", "background-position", [-200,-200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 5000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-12656025");
