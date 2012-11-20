//Browser check
var isOpera = !!(window.opera && window.opera.version);  // Opera 8.0+
var isFirefox = testCSS('MozBoxSizing');                 // FF 0.8+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !isSafari && testCSS('WebkitTransform');  // Chrome 1+
var isIE = /*@cc_on!@*/false || testCSS('msTransform');  // At least IE6

function testCSS(prop) {
    return prop in document.documentElement.style;
}

sVar = 2;

if(isFirefox == true)
{
    sVar = 0;
}

else
{
	isFirefox = false;
	sp_bttn=document.getElementById('speech');
	sp_bttn.setAttribute( "class", "myButton2");
	sp_bttn.disabled=true;
}
//text

write = 0; 
function text()
{
	if(write == 0)
	{
		write = 1;
		wr_bttn=document.getElementById('text');
		wr_bttn.innerHTML = ("Turn Text On");
		wr_bttn.setAttribute( "class", "myButton2");
	}
	else
	{
		write = 0;
		wr_bttn=document.getElementById('text');
		wr_bttn.innerHTML = ("Turn Text Off");
		wr_bttn.setAttribute( "class", "myButton");
	}
}
function speech()
{
	if(sVar == 0)
	{
		sVar = 1;
		sp_bttn=document.getElementById('speech');
		sp_bttn.innerHTML = ("Turn Speech On");
		sp_bttn.setAttribute( "class", "myButton2");
		isFirefox = false;
	}
	else if(sVar == 1)
	{
		sVar = 0;
		sp_bttn=document.getElementById('speech');
		sp_bttn.setAttribute( "class", "myButton2");
		sp_bttn.innerHTML = ("Turn Speech Off");
		sp_bttn.setAttribute( "class", "myButton");
		isFirefox = true;
	}
}

/*JavaScript speak.js library file appended to the main function */
var speakWorker;
try {
  speakWorker = new Worker('js/speakWorker.js');
} catch(e) {
  console.log('speak.js warning: no worker support');
}

function speak(text, args) {
  var PROFILE = 1;

  function parseWav(wav) {
    function readInt(i, bytes) {
      var ret = 0;
      var shft = 0;
      while (bytes) {
        ret += wav[i] << shft;
        shft += 8;
        i++;
        bytes--;
      }
      return ret;
    }
    if (readInt(20, 2) != 1) throw 'Invalid compression code, not PCM';
    if (readInt(22, 2) != 1) throw 'Invalid number of channels, not 1';
    return {
      sampleRate: readInt(24, 4),
      bitsPerSample: readInt(34, 2),
      samples: wav.subarray(44)
    };
  }

  function playHTMLAudioElement(wav) {
    function encode64(data) {
      var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      var PAD = '=';
      var ret = '';
      var leftchar = 0;
      var leftbits = 0;
      for (var i = 0; i < data.length; i++) {
        leftchar = (leftchar << 8) | data[i];
        leftbits += 8;
        while (leftbits >= 6) {
          var curr = (leftchar >> (leftbits-6)) & 0x3f;
          leftbits -= 6;
          ret += BASE[curr];
        }
      }
      if (leftbits == 2) {
        ret += BASE[(leftchar&3) << 4];
        ret += PAD + PAD;
      } else if (leftbits == 4) {
        ret += BASE[(leftchar&0xf) << 2];
        ret += PAD;
      }
      return ret;
    }

    document.getElementById("audio").innerHTML=("<audio id=\"player\" src=\"data:audio/x-wav;base64,"+encode64(wav)+"\">");
    document.getElementById("player").play();
  }

  function playAudioDataAPI(data) {
    try {
      var output = new Audio();
      output.mozSetup(1, data.sampleRate);
      var num = data.samples.length;
      var buffer = data.samples;
      var f32Buffer = new Float32Array(num);
      for (var i = 0; i < num; i++) {
        var value = buffer[i<<1] + (buffer[(i<<1)+1]<<8);
        if (value >= 0x8000) value |= ~0x7FFF;
        f32Buffer[i] = value / 0x8000;
      }
      output.mozWriteAudio(f32Buffer);
      return true;
    } catch(e) {
      return false;
    }
  }

  function handleWav(wav) {
    var startTime = Date.now();
    var data = parseWav(wav); // validate the data and parse it
    // TODO: try playAudioDataAPI(data), and fallback if failed
    playHTMLAudioElement(wav);
    if (PROFILE) console.log('speak.js: wav processing took ' + (Date.now()-startTime).toFixed(2) + ' ms');
  }

  if (args && args.noWorker) {
    // Do everything right now. speakGenerator.js must have been loaded.
    var startTime = Date.now();
    var wav = generateSpeech(text, args);
    if (PROFILE) console.log('speak.js: processing took ' + (Date.now()-startTime).toFixed(2) + ' ms');
    handleWav(wav);
  } else {
    // Call the worker, which will return a wav that we then play
    var startTime = Date.now();
    speakWorker.onmessage = function(event) {
      if (PROFILE) console.log('speak.js: worker processing took ' + (Date.now()-startTime).toFixed(2) + ' ms');
      handleWav(event.data);
    };
    speakWorker.postMessage({ text: text, args: args });
  }
}
/*********************************************************************/	

/*********************** GLOBAL VARIABLES ***************************/

var n, m, flag=0, extra;
// width, height of canvas
var width, height, factor=0.9; 

// Number of cells of the matrix, width of each cell
var cells=10, cell_width;

// Variables for canvas, its context
var c , ctx;

// Speed of translation, butterfly size
var speed = 7, flap_speed=100, bsize;

var t=new Array(cells+1), tnew=new Array(cells+1);

var occupied=new Array(cells+1);

var i;
for(i=0; i<=cells; i++)
{
	t[i]=new Array(cells+1);
	tnew[i]=new Array(cells+1);
	occupied[i]=new Array(cells+1);
}
var state, langflag=1;

/********************************************************************/

function draw_canvas()
{
	c = document.getElementById("myCanvas");
	window.addEventListener('resize', resize, false);
	window.addEventListener('orientationchange', resize, false);
	document.getElementById('next').disabled = false; 


	state=0;
	n=window.sessionStorage.column;
	m=window.sessionStorage.row;

	n=parseInt(n);
	m=parseInt(m);
	if(n>m)
		flag=1;
	if(flag==0)
		extra=cells-m;
	else
		extra=cells-n;

	win_width=(window.innerWidth);
	win_height=(window.innerHeight);
	min=win_height;
	if(0.7*win_width < win_height)
		min=0.7*win_width;

	c.height=factor*min;
	c.width=factor*min;
	width=factor*min;
	height=factor*min;

	inst = document.getElementById("instructions");
	inst.setAttribute("style", "width:"+0.3*win_width+"px;float:right;margin-right:"+4+"%;margin-left:auto;margin-top:"+5+"%;");


	cell_width=width/(cells+1);
//	cell_width=Math.floor(width/(cells+1))+1;
	bsize=0.8*cell_width;

	ctx = c.getContext("2d");

	draw_matrix_lines();
	write_index();

	for(i=0; i<cells+1; i++)
	{
		for(j=0; j<cells+1; j++)
			occupied[i][j]=0;
	}
	document.getElementById("head").innerHTML= "Illustration - "+m+" X "+n;

}
function write_index()
{
	var i;
	ctx.font=(0.6*cell_width)+"px Georgia";
	ctx.fillStyle="#000000";
	for(i=1; i<=cells; i++)
		ctx.fillText(i,i*cell_width+0.2*cell_width,cell_width-0.3*cell_width);
	for(i=1; i<=cells; i++)
		ctx.fillText(i , cell_width-0.8*cell_width,  i*cell_width+0.7*cell_width );
}

function draw_matrix_lines()
{
	var x;
	for(x=cell_width; x <= width+2; x+=cell_width)
	{
		ctx.moveTo(x, cell_width);
		ctx.lineTo(x, width);
		ctx.moveTo(cell_width, x);
		ctx.lineTo(height, x);
	}
	ctx.stroke();
}		

function resize()
{
	win_width=(window.innerWidth);
	win_height=(window.innerHeight);
	min=win_height;
	if(0.6*win_width < win_height)
		min=0.6*win_width;

	c.height=factor*min;
	c.width=factor*min;
	width=factor*min;
	height=factor*min;

	inst = document.getElementById("instructions");
	inst.setAttribute("style", "width:"+0.3*win_width+"px;float:right;margin-right:"+4+"%;margin-left:auto;margin-top:"+5+"%;");

	cell_width=Math.floor(width/(cells+1))+1;

	bsize=0.8*cell_width;
	draw_matrix_lines()	
		write_index();
}

function next()
{
	state++;

	if(state==0)
	{
		bttn=document.getElementById('next');
		bttn.setAttribute( "class", "myButton");
		bttn.disabled=false;
		draw_matrix_lines();
		write_index();
	}
	if(state==1)
	{
		bttn=document.getElementById('next');
		bttn.setAttribute( "class", "myButton");
		bttn.disabled=false;
		draw_matrix_lines();
		write_index();
		butterfly_matrix(m, n, "green");

		str="step0";
		txt=document.getElementById(str);
		txt.setAttribute("style", "display:block");
		say = "One.  Matrix is Filled With Animated "+sessionStorage.name+"s";

		if(langflag==1)
			document.getElementById('step1').innerHTML="1. Matrix is Filled With Animated "+sessionStorage.name+"s";
		
		else
			document.getElementById('step1').innerHTML="1.మాట్రిక్స్ యానిమేటెడ్ స్తువులతో  నింపుతారు.";

		if(isFirefox == true)
 		{
         		  speak(say,{amplitude : 75, pitch : 125, speed :125, wordgap : 1});
        	}
		if(write==0)
		{
			type("step1");
		}


	}
	else if(state==2)
	{
		bttn=document.getElementById('next');
		bttn.setAttribute( "class", "myButton");
		bttn.disabled=false;
		if(flag==0)
		{
			if(langflag==1)
				document.getElementById('step2').innerHTML="2. No of objects in a Row are "+m+".</br>Since it is just "+(cells-m)+" short of a 'Ten', let us shift objects in the last "+(cells-m)+" columns into the columns on the right of the original "+m+" columns.";
			else
				document.getElementById('step2').innerHTML="2. వరుసలో  "+m+"వస్తువులు ఉన్నాయి..</br> అది 'పదికి ' కేవలం "+(cells-m)+" తక్కువ కనుక, చివర "+(cells-m)+" కాలమ్ల  వస్తువులను, "+m+" కాలమ్ల యొక్క  క్రిందకి  వాటిని తరలించండి. ";
			say="2. Number of objects in a Row are "+m+". Since it is just "+(cells-m)+" short of a 'Ten', let us shift objects in the last "+(cells-m)+" columns into the columns on the right of the original "+m+" columns.";

			if(isFirefox == true)
			{
				speak(say,{amplitude : 75, pitch : 125, speed :125, wordgap : 1});
			}
			if(write == 0)
			{
				type("step2");
			}
		}
		else
		{
			if(langflag==1)
				document.getElementById('step2').innerHTML="2. No of objects in a Column is "+n+".</br>Since it is just "+(cells-n)+" short of a 'Ten', let us shift objects in the last "+(cells-n)+" columns into the rows below the original "+n+" rows.";
			else
				document.getElementById('step2').innerHTML="2. కాలమ్ లో  " +n+ " వస్తువులు ఉన్నాయి.. </br> అది 'పదికి ' కేవలం"+(cells-n)+" తక్కువ కనుక, చివర "+(cells-n)+" వరుసల వస్తువులను, "+n+" కాలమ్ల యొక్క కుడివైపు  వాటిని తరలించండి.";
			say="2. Number of objects in a Column are "+n+". Since it is just "+(cells-n)+" short of a 'Ten', let us shift objects in the last "+(cells-n)+" columns into the rows below the original "+n+" rows.";
			if(isFirefox == true)
			{
				speak(say,{amplitude : 35, pitch : 140, speed : 135,  wordgap : 5});
			}
			if(write == 0)
			{
				type("step2");
			}
		}

        
	}
	else if(state>=3 && state < 3+extra)
	{
		bttn=document.getElementById('next');
		bttn.setAttribute( "class", "myButton2");
		bttn.disabled=true;

		if(flag==0)
			transpose((state-3));
		else
			transpose_c((state-3));
		//	transpose(cells-m-1-(state-2));
	}
	else if(state==3+extra)
	{
		bttn=document.getElementById('next');
		bttn.setAttribute( "class", "myButton");
		bttn.disabled=false;
		highlight();
		if(flag==0)
		{
			if(langflag==1)
				document.getElementById('step3').innerHTML="3. The "+Math.floor(m*n/cells)+" rows of "+sessionStorage.name+"s"+" in Red Add Upto "+Math.floor(m*n/cells)*cells+".";
			else
				document.getElementById('step3').innerHTML="3. "+Math.floor(m*n/cells)+" వరుసల ఎరుపు  వస్తువుల  యొక్క మొత్తం విలువ "+Math.floor(m*n/cells)*cells;
			say="3. The "+Math.floor(m*n/cells)+" rows of "+sessionStorage.name+"s"+" in Red Add Upto "+Math.floor(m*n/cells)*cells+".";
			if(isFirefox == true)
			{
				speak(say,{amplitude : 35, pitch : 140, speed : 135,  wordgap : 5});
			}
			if(write == 0)
			{
				type("step3");
			}
		}
		else
		{
			if(langflag==1)
				document.getElementById('step3').innerHTML="3. The "+Math.floor(m*n/cells)+" columns of "+sessionStorage.name+"s"+" in Red Add Upto "+Math.floor(m*n/cells)*cells+".";
			else
				document.getElementById('step3').innerHTML="3. "+Math.floor(m*n/cells)+" కాలమ్ల  ఎరుపు వస్తువుల    యొక్క మొత్తం విలువ"+Math.floor(m*n/cells)*cells+".";
			say="3. The "+Math.floor(m*n/cells)+" columns of "+sessionStorage.name+"s"+" in Red Add Upto "+Math.floor(m*n/cells)*cells+".";
			if(isFirefox == true)
			{
				speak(say,{amplitude : 35, pitch : 140, speed : 135,  wordgap : 5});
			}
			if(write == 0)
			{
				type("step3");
			}
		}
	}

	else if(state==4+extra)
	{
		highlight_rem();
		if(langflag==1)
			document.getElementById('step4').innerHTML="4. The Remaining "+sessionStorage.name+"s"+" in Blue add Upto "+(m*n)%cells+"</br></br>"+"So, The ANSWER of "+m+"x"+n+" is "+m*n+".";
		else
			document.getElementById('step4').innerHTML="4. మిగిలిన నీలం  వస్తువుల యొక్క మొత్తం విలువ "+(m*n)%cells+". </br></br> కాబట్టి,  "+m+"x"+n+" యొక్క సమాధానం "+m*n+".";
		say="4. The Remaining "+sessionStorage.name+"s"+" in Blue add Upto "+(m*n)%cells +"So, The ANSWER of "+m+"multiplied by "+n+" is "+m*n+".";
		bttn=document.getElementById('next');
		bttn.setAttribute( "class", "myButton2");
		bttn.disabled=true;
		if(isFirefox == true)
        {
        speak(say,{amplitude : 35, pitch : 140, speed : 135,  wordgap : 5});
        }
	if(write == 0)
	{
		type("step4");
	}
	}
	else if(state==5+extra)
		state = 4+extra;
}
function language(num)
{
	if(num==1)
		langflag=1;
	else
		langflag=-1;
	if(langflag==-1)
	{
		if(state>=1)
			document.getElementById('step1').innerHTML="1.మాట్రిక్స్ యానిమేటెడ్ స్తువులతో  నింపుతారు.";
		if(state>=2)
		{
			if(flag==0)
				document.getElementById('step2').innerHTML="2. వరుసలో  "+m+"వస్తువులు ఉన్నాయి..</br> అది 'పదికి ' కేవలం "+(cells-m)+" తక్కువ కనుక, చివర "+(cells-m)+" కాలమ్ల  వస్తువులను, "+m+" కాలమ్ల యొక్క  క్రిందకి  వాటిని తరలించండి. ";
			else
				document.getElementById('step2').innerHTML="2. కాలమ్ లో  " +n+ " వస్తువులు ఉన్నాయి.. </br> అది 'పదికి ' కేవలం"+(cells-n)+" తక్కువ కనుక, చివర "+(cells-n)+" వరుసల వస్తువులను, "+n+" కాలమ్ల యొక్క కుడివైపు  వాటిని తరలించండి.";

		}
		if(state>=3+extra)
		{
			if(flag==0)
				document.getElementById('step3').innerHTML="3. "+Math.floor(m*n/cells)+" వరుసల ఎరుపు  వస్తువుల  యొక్క మొత్తం విలువ "+Math.floor(m*n/cells)*cells;
			else
				document.getElementById('step3').innerHTML="3. "+Math.floor(m*n/cells)+" కాలమ్ల  ఎరుపు వస్తువుల    యొక్క మొత్తం విలువ"+Math.floor(m*n/cells)*cells+".";


		}
		if(state>=4+extra)
		{
			document.getElementById('step4').innerHTML="4. మిగిలిన నీలం  వస్తువుల యొక్క మొత్తం విలువ "+(m*n)%cells+". </br></br> కాబట్టి,  "+m+"x"+n+" యొక్క సమాధానం "+m*n+".";
		}


	}
	else
	{
		if(state>=1)
			document.getElementById('step1').innerHTML="1. Matrix is Filled With Animated "+sessionStorage.name+"s";
		if(state>=2)
		{
			if(flag==0)
				document.getElementById('step2').innerHTML="2. No of objects in a Row are "+m+".</br>Since it is just "+(cells-m)+" short of a 'Ten', let us shift objects in the last "+(cells-m)+" columns into the columns on the right of the original "+m+" columns.";
			else
				document.getElementById('step2').innerHTML="2. No of objects in a Column is "+n+".</br>Since it is just "+(cells-n)+" short of a 'Ten', let us shift objects in the last "+(cells-n)+" columns into the rows below the original "+n+" rows.";

		}
		if(state>=3+extra)
		{
			if(flag==0)
				document.getElementById('step3').innerHTML="3. The "+Math.floor(m*n/cells)+" rows of "+sessionStorage.name+"s"+" in Red Add Upto "+Math.floor(m*n/cells)*cells+".";
			else
				document.getElementById('step3').innerHTML="3. The "+Math.floor(m*n/cells)+" columns of "+sessionStorage.name+"s"+" in Red Add Upto "+Math.floor(m*n/cells)*cells+".";


		}
		if(state>=4+extra)
		{
			document.getElementById('step4').innerHTML="4. The Remaining "+sessionStorage.name+"s"+" in Blue add Upto "+(m*n)%cells+"</br></br>"+"So, The ANSWER of "+m+"x"+n+" is "+m*n+".";
		}



	}

}

function type(str)
{
	txt=document.getElementById(str);
	txt.setAttribute("style", "display:block");
	txt1=new TypingText(txt);
	txt1.run();
}
function prev()
{
	bttn=document.getElementById('next');
	bttn.setAttribute( "class", "myButton");
	bttn.disabled=false;
	if(flag==0)
		extra=cells-m;
	else
		extra=cells-n;
	var i, j;
	if(state<=1)
	{
		txt=document.getElementById("step1");
		txt.setAttribute("style", "display:none");
		for(i=0; i<cells; i++)
		{
			for(j=0; j<cells; j++)
				clearTimeout(t[i][j]);
		}
		ctx.clearRect(0, 0, width, width);
		draw_matrix_lines();
		write_index();
	}
	else if(state>=2 && state <3+extra)
	{
		if(state==2)
		{
			txt=document.getElementById("step2");
			txt.setAttribute("style", "display:none");
		}
		else
		{
			if(flag==0)
				untranspose((state-3));
			else
				untranspose_c((state-3));
		}
		//	untranspose(cells-m-1-(state-2));
	}
	else if(state==3+extra)
	{
		unhighlight();
		txt=document.getElementById("step3");
		txt.setAttribute("style", "display:none");
	}
	else if(state==4+extra)
	{
		unhighlight_rem();
		txt=document.getElementById("step4");
		txt.setAttribute("style", "display:none");
		bttn=document.getElementById('next');
		bttn.setAttribute( "class", "myButton");
		bttn.disabled=false;
	}
	state--;
	if(state<0)
		state=0;
}
function highlight()
{
	r=Math.floor((n*m)/cells);
	if(flag==0)
	{
		loop1=cells;
		loop2=r;
	}
	else
	{
		loop1=r;
		loop2=cells;
	}
	for(i=1; i<=loop1; i++)
	{
		for(j=1; j<=loop2; j++)
		{
			clearTimeout(t[i][j]);
			draw_butterfly(i, j, "red");
		}
	}
}
function highlight_rem()
{
	r=Math.floor((n*m)/cells);
	if(flag==0)
	{
		loop1=m;
		loop2=cells-m;
	}
	else
	{
		loop1=n;
		loop2=cells-n;
	}
	for(i=r+1; i<=loop1; i++)
	{
		for(j=0; j<loop2; j++)
		{
			if(flag==0){
				clearTimeout(t[cells-j][i]);
				draw_butterfly(cells-j, i, "blue");
			}
			else{
				clearTimeout(t[i][cells-j]);
				draw_butterfly(i, cells-j, "blue");
			}
		}
	}
}

function unhighlight()
{
	r=Math.floor((n*m)/cells);
	if(flag==0)
	{
		loop1=cells;
		loop2=r;
	}
	else
	{
		loop1=r;
		loop2=cells;
	}

	for(i=1; i<=loop1; i++)
	{
		for(j=1; j<=loop2; j++)
		{
			clearTimeout(t[i][j]);
			draw_butterfly(i, j, "green");
		}
	}

}
function unhighlight_rem()
{
	r=Math.floor((n*m)/cells);
	if(flag==0)
	{
		loop1=m;
		loop2=cells-m;
	}
	else
	{
		loop1=n;
		loop2=cells-n;
	}

	for(i=r+1; i<=loop1; i++)
	{
		for(j=0; j<loop2; j++)
		{
			if(flag==0)
			{
				clearTimeout(t[cells-j][i]);
				draw_butterfly(cells-j, i, "green");
			}
			else
			{
				clearTimeout(t[i][cells-j]);
				draw_butterfly(i, cells-j, "green");
			}
		}
	}
}
/******* CREATES A BUTTERFLY MATRIX ******/
function butterfly_matrix(n, m, color)
{
	var i, j;
	for(i=1; i<=n; i++)
	{
		for(j=1; j<=m; j++)
		{
			draw_butterfly(i , j, color);
		}
	}
}
/*****************************************/


/***** DRAW BUTTERFLY AT x,y *********/
function draw_butterfly(x, y, color)
{
	var butterfly =new Array();
	var za;
	for(za=0;za<(window.sessionStorage.num);za++)
	{
		butterfly[za]= new Image();
		butterfly[za].src='./image_library/'+ (window.sessionStorage.name) + (za+0)+'.gif';
	}
	flap(butterfly, flap_speed , 0, x , y, color);
/*	butterfly[0]= document.getElementById("b0");
	butterfly[1]= document.getElementById("b1");
	butterfly[2]= document.getElementById("b2");
	butterfly[3]= document.getElementById("b3");
	*/

} 
/***************************************/

// For more speed of flapping wings, put wait value less.
// counter is the number of images available in stopmotion of butterfly
// x, y are coordinates where it has to flap wings
function flap(butterfly, wait, counter, x, y, color)
{
	// clear the previously drawn butterfly

	ctx.clearRect(x*cell_width+1, y*cell_width+1, cell_width-2, cell_width-2);
	ctx.globalAlpha=0.2;
	ctx.fillStyle=color;
	ctx.fillRect(x*cell_width, y*cell_width, cell_width-1, cell_width-1 ); 
	ctx.globalAlpha=1;

	// draw the  new butterfly
	offset = (cell_width - bsize)/2;
	ctx.drawImage(butterfly[counter], x*cell_width+offset, y*cell_width+offset, bsize, bsize );

	// call function again after 'wait' ms
	t[x][y]=setTimeout(function(){flap(butterfly,wait, (counter+1)%(window.sessionStorage.num), x, y, color)} , wait);
	occupied[x][y]=1;
}

function transpose(i)
{
	var j, count=0;
	for(j=m; j>m-n+1+i; j--)
	{
		translation(j, n-i, cells-i, m-j+1);
		count++;
	}
	for(k=0; k<m-count; k++)
	{
		translation(m-count-k, n-i, cells-i, m-k);
	}
}
function transpose_c(i)
{
	var j, count=0;
	for(j=1; j<m-i; j++)
	{
		translation(m-i, n+1-j, j, cells-i); 
		count++;
	}
	for(k=0; k<n-count; k++)
	{
		translation(m-i, n-count-k, n-k, cells-i);
	}

}

function untranspose(i)
{
	
	var butterfly =new Array();
	var za;
	for(za=0;za<(window.sessionStorage.num);za++)
	{
		butterfly[za]= new Image();
		butterfly[za].src='./image_library/'+window.sessionStorage.name+ (za+0)+'.gif';
	}
/*	var butterfly =new Array();
	// getting butterfly images
	butterfly[0]= document.getElementById("b0");
	butterfly[1]= document.getElementById("b1");
	butterfly[2]= document.getElementById("b2");
	butterfly[3]= document.getElementById("b3");*/

	for(j=m; j>0; j--)
	{
		clearTimeout(tnew[j][n-i]);
		clearTimeout(t[cells-i][m-j+1]);

		occupied[cells-i][m-j+1]=0;

		ctx.clearRect((cells-i)*cell_width+1, (m-j+1)*cell_width+1, cell_width-2, cell_width-2);
		for(ab=1; ab<=cells; ab++)
		{
			ctx.clearRect(ab * cell_width + 1, (n-i)*cell_width+1, cell_width-2, cell_width-2 );
		}
		flap(butterfly, flap_speed, 0, j, n-i, "green");
	}
}
function untranspose_c(i)
{
/*	var butterfly =new Array();
	// getting butterfly images
	butterfly[0]= document.getElementById("b0");
	butterfly[1]= document.getElementById("b1");
	butterfly[2]= document.getElementById("b2");
	butterfly[3]= document.getElementById("b3");*/

	var butterfly =new Array();
	var za;
	for(za=0;za<window.sessionStorage.num;za++)
	{
		butterfly[za]= new Image();
		butterfly[za].src='./image_library/'+ window.sessionStorage.name + (za+0)+'.gif';
	}

	for(j=n; j>0; j--)
	{
		clearTimeout(tnew[m-i][j]);
		clearTimeout(t[n-j+1][cells-i]);
		occupied[n-j+1][cells-i]=0;

		ctx.clearRect((n-j+1)*cell_width+1, (cells-i)*cell_width+1, cell_width-2, cell_width-2);
		for(ab=1; ab<=cells; ab++)
		{
			ctx.clearRect((m-i) * cell_width + 1, (ab)*cell_width+1, cell_width-2, cell_width-2 );
		}
		flap(butterfly, flap_speed, 0, m-i, j, "green");
	}
}

function translation(i, j, x, y)
{
	clearTimeout(t[i][j]);

	occupied[i][j]=0;
	var butterfly =new Array();
	var za;
	for(za=0;za<window.sessionStorage.num;za++)
	{
		butterfly[za]= new Image();
		butterfly[za].src='./image_library/'+ window.sessionStorage.name + (za+0)+'.gif';
	}

/*	var butterfly =new Array();
	// getting butterfly images
	butterfly[0]= document.getElementById("b0");
	butterfly[1]= document.getElementById("b1");
	butterfly[2]= document.getElementById("b2");
	butterfly[3]= document.getElementById("b3");*/

	
	if(flag==0)
		flap_to(butterfly, flap_speed-30, 0, i*cell_width, j*cell_width, x*cell_width, y*cell_width, i, j, x, y);
	else
		flap_to_c(butterfly, flap_speed-30, 0, i*cell_width, j*cell_width, x*cell_width, y*cell_width, i, j, x, y);

}
function flap_to_c(butterfly, wait, counter, x, y, xnew, ynew, i ,j, xx, yy)
{
	xint=Math.floor(x/(cell_width-1));
	yint=Math.floor(y/(cell_width-1));
	offset = (cell_width - bsize)/2;
	if( xint ==xx && yint==yy && ((xnew-x)<speed && (x-xnew)<speed) )
	{
		t[xx][yy]=setTimeout(function(){flap(butterfly,flap_speed, (counter+1)%(window.sessionStorage.num), xx, yy, "green")} , wait);
		occupied[xx][yy]=1;
		if(j==1)
		{
			bttn=document.getElementById('next');
			bttn.setAttribute( "class", "myButton");
			bttn.disabled=false;
		}
	}
	else if(y<ynew)
	{
		ctx.clearRect(x+2, y-speed, cell_width-2, cell_width+speed);
		//			ctx.globalAlpha=0.2;
		//			ctx.fillStyle="green";
		//			ctx.fillRect(x, y, cell_width, cell_width-1 ); 
		//			ctx.globalAlpha=1;
		ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
		ctx.stroke();
		tnew[i][j]=setTimeout(function(){flap_to_c(butterfly,wait, (counter+1)%(window.sessionStorage.num), x, y+speed, xnew, ynew, i, j, xx, yy)} , wait);
	}
	else
	{
		if(y!=ynew)
			ctx.clearRect(x, ynew-5, cell_width+5, cell_width+5);
		y=ynew;

		if(x<xnew)
		{
			ctx.clearRect(x, y, cell_width+1, cell_width-5);
			//			ctx.globalAlpha=0.2;
			//		ctx.fillStyle="green";
			//		ctx.fillRect(x, y, cell_width-1, cell_width ); 
			//		ctx.globalAlpha=1;
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
			tnew[i][j]=setTimeout(function(){flap_to_c(butterfly,wait, (counter+1)%(window.sessionStorage.num), x+speed, y, xnew, ynew, i, j, xx, yy)} , wait);

		}
		else if(x>xnew)
		{
			ctx.clearRect(x, y, cell_width+1, cell_width-5);
			//		ctx.globalAlpha=0.2;
			//		ctx.fillStyle="green";
			//		ctx.fillRect(x, y, cell_width-1, cell_width ); 
			//		ctx.globalAlpha=1;
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
			tnew[i][j]=setTimeout(function(){flap_to_c(butterfly,wait, (counter+1)%(window.sessionStorage.num), x-speed, y, xnew, ynew, i, j, xx, yy)} , wait);
		}
	}

}

function flap_to(butterfly, wait, counter, x, y, xnew, ynew, i ,j, xx, yy)
{
	xint=Math.floor(x/(cell_width-1));
	yint=Math.floor(y/(cell_width-1));
	offset = (cell_width - bsize)/2;
	if( xint ==xx && yint==yy && ((ynew-y)<speed && (y-ynew)<speed) )
//	if( xint ==xx && yint==yy )
	{
		t[xx][yy]=setTimeout(function(){flap(butterfly,flap_speed, (counter+1)%window.sessionStorage.num, xx, yy, "green")} , wait);
		if(i==1)
		if(i==1)
		occupied[xx][yy]=1;
		{
			bttn=document.getElementById('next');
			bttn.setAttribute( "class", "myButton");
			bttn.disabled=false;
		}
	}
	else if(x<xnew)
	{
		row=Math.floor((x+speed+cell_width)/cell_width);
		if( row<=cells && (row-1)>=1 && occupied[row][j]!=1 && occupied[row-1][j]!=1)
		{
			ctx.clearRect(x-2*speed, y, cell_width+speed, cell_width);
			//			ctx.globalAlpha=0.2;
			//			ctx.fillStyle="green";
			//			ctx.fillRect(x, y, cell_width, cell_width-1 ); 
			//			ctx.globalAlpha=1;
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
		}
		else if(row <=cells && (row-1)>=1 && occupied[row][j]==1 && occupied[row-1][j-1]==0)
			ctx.clearRect((row-1)*cell_width, y, cell_width+speed, cell_width+speed);
		tnew[i][j]=setTimeout(function(){flap_to(butterfly,wait, (counter+1)%(window.sessionStorage.num), x+speed, y, xnew, ynew, i, j, xx, yy)} , wait);
	}
	else
	{
		if(x!=xnew)
			ctx.clearRect(xnew-5, y, cell_width+5, cell_width+5);
		x=xnew;

		if(y<ynew)
		{
			ctx.clearRect(x, y, cell_width+1, cell_width);
			//			ctx.globalAlpha=0.2;
			//		ctx.fillStyle="green";
			//		ctx.fillRect(x, y, cell_width-1, cell_width ); 
			//		ctx.globalAlpha=1;
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
			tnew[i][j]=setTimeout(function(){flap_to(butterfly,wait, (counter+1)%window.sessionStorage.num, x, y+speed, xnew, ynew, i, j, xx, yy)} , wait);

		}
		else if(y>ynew)
		{
			ctx.clearRect(x, y, cell_width+1, cell_width);
			//		ctx.globalAlpha=0.2;
			//		ctx.fillStyle="green";
			//		ctx.fillRect(x, y, cell_width-1, cell_width ); 
			//		ctx.globalAlpha=1;
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
			tnew[i][j]=setTimeout(function(){flap_to(butterfly,wait, (counter+1)%(window.sessionStorage.num), x, y-speed, xnew, ynew, i, j, xx, yy)} , wait);
		}
	}
}

