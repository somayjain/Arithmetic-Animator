/*********************** GLOBAL VARIABLES ***************************/

var n, m, flag=0, checkflag=0, hintflag=0, rowflag=0, colflag=0;
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
var state, ctr, fstate;

/********************************************************************/

function draw_canvas()
{
	c = document.getElementById("myCanvas");
	window.addEventListener('resize', resize, false);
	window.addEventListener('orientationchange', resize, false);
	document.getElementById('next').disabled = false; 

	//c.addEventListener('mousemove', mouse_enter , false);	// Not doing anything with it now
	c.addEventListener('mousedown', mouse_enter , false);	// Not doing anything with it now

	state=0;
	n=window.sessionStorage.column_ex;
	m=window.sessionStorage.row_ex;

	n=parseInt(n);
	m=parseInt(m);
	if(n>m)
		flag=1;

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

	document.getElementById("head").innerHTML= "Exercise - "+m+" X "+n;
}
function mouse_enter(evt)
{
	x = evt.pageX - c.offsetLeft;
        y = evt.pageY - c.offsetTop;


	xindex =(x-13)/(cell_width);
	yindex= (y-40)/(cell_width);

	xindexint=Math.floor(xindex);
	yindexint=Math.floor(yindex);

	yfrac = yindex-yindexint;
	xfrac = xindex-xindexint;

//	message = "Mouse position: " + (x-13)/(cell_width) + "," + (y-40)/(cell_width);
	if(xindexint==0 && yindexint!=0 && yfrac>=0.1 && yfrac<=0.9)
	{
		check(yindexint, xindexint);
	}
	else if(xindexint!=0 && yindexint==0 && xfrac>=0.1 && xfrac<=0.9)
	{
		check(yindexint, xindexint);
	}

}
function remove_color(r, c)
{
	ctx.clearRect(r*cell_width-1, c*cell_width-1, cell_width+2, cell_width+2 ); 
	if(c==0)
	{
		ctx.font=(0.6*cell_width)+"px Georgia";
		ctx.fillStyle="#000000";
		ctx.fillText(r,r*cell_width+0.2*cell_width,cell_width-0.3*cell_width);
	}
	else
	{
		ctx.font=(0.6*cell_width)+"px Georgia";
		ctx.fillStyle="#000000";
		ctx.fillText(c, cell_width-0.8*cell_width,  c*cell_width+0.7*cell_width );

	}
}
function check(r, c)
{
	if(checkflag==0)
	{
		rowflag=0; colflag=0;
		if(r==0)
		{
			if(c==m)
			{
				colflag=1;
				remove_color(c, 0);
				transpose_c(0);
				extraa = cells-n-1;
				checkflag=1;
				state++;
				ctr=0;

				if(extraa!=0)
					fill_color(c-1, 0, "red");
				remove_color(0, n);
				fstate=cells-n-1+2;

				hint=document.getElementById('hint');
				hint.setAttribute( "class", "myButton2");
				hint.disabled=true;
			}
		}
		else
		{
			if(r==n)
			{
				rowflag=1;
				remove_color(0, r);
				transpose(0);
				extraa = cells-m-1;
				checkflag=1;
				state++;
				ctr=0;
				if(extraa!=0)
					fill_color(0, r-1, "red");
				
				remove_color(m, 0);
				fstate=cells-m-1+2;
				
				hint=document.getElementById('hint');
				hint.setAttribute( "class", "myButton2");
				hint.disabled=true;
			}
		}
	}
	else
	{
		if(rowflag==1)
		{
			if(ctr<extraa && r==n-ctr-1)
			{
				ctr++;
				state++;
				transpose(ctr);
				remove_color(0, r);
				if(ctr!=extraa)
				fill_color(0, r-1, "red");
				
				hint=document.getElementById('hint');
				hint.setAttribute( "class", "myButton2");
				hint.disabled=true;
			}
		}
		else
		{
			if(ctr<extraa && c==m-ctr-1)
			{
				ctr++;
				state++;
				transpose_c(ctr);
				remove_color(c, 0);
				if(ctr!=extraa)
				fill_color(c-1, 0, "red");
				
				hint=document.getElementById('hint');
				hint.setAttribute( "class", "myButton2");
				hint.disabled=true;
			}

		}
	}

}

function fill_color(x, y, color)
{
	ctx.globalAlpha=0.2;
	ctx.fillStyle=color;
	ctx.fillRect(x*cell_width, y*cell_width, cell_width-1, cell_width-1 ); 
	ctx.globalAlpha=1;
}
function next()
{
	state++;
	if(flag==0)
		extra=cells-m;
	else
		extra=cells-n;
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
		bttn.setAttribute("style", "display:none;");
		
		draw_matrix_lines();
		write_index();

		butterfly_matrix(m, n, "green");

		fill_color(0, n, "red");

		fill_color(m, 0, "red");
	}
}

function prev()
{
	document.getElementById("ans").setAttribute("style", "display:none;");
	
	hint=document.getElementById('hint');
	hint.setAttribute( "class", "myButton");
	hint.disabled=false;

	if(rowflag==1)
		fstate=cells-m-1+2;
	else if(colflag==1)
		fstate=cells-n-1+2;
	if(flag==0)
		extra=cells-m;
	else
		extra=cells-n;
	var i, j;
	if(state<=1)
	{
		for(i=0; i<cells; i++)
		{
			for(j=0; j<cells; j++)
				clearTimeout(t[i][j]);
		}
		ctx.clearRect(0, 0, width, width);
		draw_matrix_lines();
		write_index();

		if(state==1)
		{
			bttn=document.getElementById('next');
			bttn.setAttribute("style", "display:inline;");
		}
	}
	else
	{
		if(state==fstate)
		{
			unhighlight_rem();
			unhighlight();
			draw_matrix_lines();
		}
		if(colflag==1)
		{
			draw_matrix_lines();
			untranspose_c(state-2);
			remove_color(m-state+1, 0);
			fill_color(m-state+2, 0, "red");
			ctr--;
			if(ctr==-1)
			{
				ctr=0;
				checkflag=0;
				fill_color(0, n, "red");
			}
		}
		else
		{
			draw_matrix_lines();
			untranspose(state-2);
			remove_color(0,n-state+1);
			fill_color(0,n-state+2, "red");
			ctr--;
			if(ctr==-1)
			{
				ctr=0;
				checkflag=0;
				fill_color(m,0, "red");
			}
		}
	}
	state--;
	if(state<0)
		state=0;
}

function transpose(i)
{
	var j, count=0;
	for(j=m; j>m-n+1+i; j--)
	{
		if(j<=0)
			break;

		translation(j, n-i, cells-i, m-j+1);
		count++;
	}
	for(k=0; k<m-count; k++)
	{
		if(m-count-k<=0)
			break;
		translation(m-count-k, n-i, cells-i, m-k);
	}
}
function transpose_c(i)
{
	var j, count=0;
	for(j=1; j<m-i; j++)
	{
		if(n+1-j <=0)
			break;
		translation_c(m-i, n+1-j, j, cells-i); 
		count++;
	}
	for(k=0; k<n-count; k++)
	{
		if(n-count-k <=0)
			break;
		translation_c(m-i, n-count-k, n-k, cells-i);
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
	for(j=cells; j>0; j--)
	{
		clearTimeout(tnew[j][n-i]);
		clearTimeout(t[cells-i][cells-j+1]);

		occupied[cells-i][cells-j+1]=0;

		ctx.clearRect((cells-i)*cell_width+1, (cells-j+1)*cell_width+1, cell_width-2, cell_width-2);
		for(ab=1; ab<=cells; ab++)
		{
			ctx.clearRect(ab * cell_width + 1, (n-i)*cell_width+1, cell_width-2, cell_width-2 );
		}
	}
	for(j=m; j>0; j--)
		flap(butterfly, flap_speed, 0, j, n-i, "green");
}
function untranspose_c(i)
{
	var butterfly =new Array();
	var za;
	for(za=0;za<window.sessionStorage.num;za++)
	{
		butterfly[za]= new Image();
		butterfly[za].src='./image_library/'+ window.sessionStorage.name + (za+0)+'.gif';
	}

	for(j=cells; j>0; j--)
	{
		clearTimeout(tnew[m-i][j]);
		clearTimeout(t[cells-j+1][cells-i]);
		occupied[cells-j+1][cells-i]=0;

		for(ab=1; ab<=cells; ab++)
			ctx.clearRect((m-i) * cell_width + 1, (ab)*cell_width+1, cell_width-2, cell_width-2 );
		ctx.clearRect((cells-j+1)*cell_width+1, (cells-i)*cell_width+1, cell_width-2, cell_width-2);
	}

	for(j=n; j>0; j--)
		flap(butterfly, flap_speed, 0, m-i, j, "green");
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
	flap_to(butterfly, flap_speed-30, 0, i*cell_width, j*cell_width, x*cell_width, y*cell_width, i, j, x, y);
}
function translation_c(i, j, x, y)
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
	flap_to_c(butterfly, flap_speed-30, 0, i*cell_width, j*cell_width, x*cell_width, y*cell_width, i, j, x, y);
}
function flap_to_c(butterfly, wait, counter, x, y, xnew, ynew, i ,j, xx, yy)
{
	xint=Math.floor(x/(cell_width-1));
	yint=Math.floor(y/(cell_width-1));
	offset = (cell_width - bsize)/2;
	if(xint==0)
		xint=1;
	if( xint ==xx && yint==yy && ( Math.abs(xnew-x) < speed) )
	{
		t[xx][yy]=setTimeout(function(){flap(butterfly,flap_speed, (counter+1)%(window.sessionStorage.num), xx, yy, "green")} , wait);
		occupied[xx][yy]=1;


		if(state==fstate && j==1)
		{
			document.getElementById("ans").setAttribute("style", "display:inline;");	
			document.getElementById("tens").value='';
			document.getElementById("ones1").value='';
			document.getElementById("ones2").value='';
			document.getElementById("final").value='';

			hint=document.getElementById('hint');
			hint.setAttribute( "class", "myButton");
			hint.disabled=false;

		}

	}
	else if(y<ynew)
	{
		ctx.clearRect(x+2, y-speed, cell_width-2, cell_width+speed);
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
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
			tnew[i][j]=setTimeout(function(){flap_to_c(butterfly,wait, (counter+1)%(window.sessionStorage.num), x+speed, y, xnew, ynew, i, j, xx, yy)} , wait);

		}
		else if(x>xnew)
		{
			ctx.clearRect(x, y, cell_width+1, cell_width-5);
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
	{
		t[xx][yy]=setTimeout(function(){flap(butterfly,flap_speed, (counter+1)%window.sessionStorage.num, xx, yy, "green")} , wait);
		occupied[xx][yy]=1;
		if(state==fstate && i==1)
		{
			document.getElementById("ans").setAttribute("style", "display:inline;");
			document.getElementById("tens").value='';
			document.getElementById("ones1").value='';
			document.getElementById("ones2").value='';
			document.getElementById("final").value='';
			
			hint=document.getElementById('hint');
			hint.setAttribute( "class", "myButton");
			hint.disabled=false;
		}
	}
	else if(x<xnew)
	{
		row=Math.floor((x+speed+cell_width)/cell_width);
		if( row<=cells && (row-1)>=1 && occupied[row][j]!=1 && occupied[row-1][j]!=1)
		{
			ctx.clearRect(x-2*speed, y, cell_width+speed, cell_width);
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
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
			tnew[i][j]=setTimeout(function(){flap_to(butterfly,wait, (counter+1)%window.sessionStorage.num, x, y+speed, xnew, ynew, i, j, xx, yy)} , wait);

		}
		else if(y>ynew)
		{
			ctx.clearRect(x, y, cell_width+1, cell_width);
			ctx.drawImage(butterfly[counter], x+offset, y+offset, bsize, bsize );
			ctx.stroke();
			tnew[i][j]=setTimeout(function(){flap_to(butterfly,wait, (counter+1)%(window.sessionStorage.num), x, y-speed, xnew, ynew, i, j, xx, yy)} , wait);
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
/******* CREATES A BUTTERFLY MATRIX ******/
function butterfly_matrix(n, m, color)
{
	var i, j;
	for(i=1; i<=n; i++)
	{
		for(j=1; j<=m; j++)
			draw_butterfly(i , j, color);
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

function highlight()
{
	r=Math.floor((n*m)/cells);
	if(rowflag==1)
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
	if(rowflag==1)
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
			if(rowflag==1){
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
	if(rowflag==1)
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
	if(rowflag==1)
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
			if(rowflag==1)
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
function checkans()
{
	var tensValue = document.getElementById('tens').value;
	var one1Value = document.getElementById('ones1').value;
	var one2Value = document.getElementById('ones2').value;
	var fans = document.getElementById('final').value;

	if(tensValue=="" || one1Value=="" || one2Value=="" || fans =="")
		alert('Write The Complete Answer');
	
	if(tensValue == Math.floor((m*n)/(cells)))
	{
		res= (m*n)%cells;
		if(one1Value==fstate-1)
		{
			if(one2Value == Math.floor(res/one1Value) && fans == m*n)
			{
				alert('Correct Answer');
				window.location = "./../web/select_exercise.html";

			}
			else
				alert('Wrong Answer');

		}
		else if(one2Value==fstate-1)
		{
			if(one1Value == Math.floor(res/one2Value) && fans ==m*n)
			{
				alert('Correct Answer');
				window.location = "./../web/select_exercise.html";
			}
			else
				alert('Wrong Answer');
		}
		else
			alert('Wrong Answer');
	}
	else
	{
		alert('Wrong Answer');
	}
}
function generate_hint()
{
	if(state==0)
	{
		alert('You Need To Fill In The Matrix With Objects to Carry Out Multiplication.');
	}
	else if(state==1)
	{
		alert('You Need to Fill A Complete \'Ten\' by Moving Objects in one Row to a Column or a Column to a Row.');
	
	}
	else if(state <fstate)
	{
		if(rowflag==0)
			alert('Move The Next Row to the Next Available Column.');
		else
			alert('Move The Next Column to the Next Available Row.');

	}
	else if(state==fstate)
	{
		alert('See The Group of Objects in respective colors.');
		highlight();
		highlight_rem();
		hintflag=1;
		draw_matrix_lines();
	}

}
