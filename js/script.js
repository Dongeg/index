window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.width=document.documentElement.clientWidth|| document.body.clientWidth;
	canvas.height=document.documentElement.clientHeight|| document.body.clientHeight;
	var context=canvas.getContext("2d");
    var sky_style=context.createLinearGradient(0,0,0,canvas.height-5);
    sky_style.addColorStop(0.0,"black");
    sky_style.addColorStop(1.0,"#035");
    context.fillStyle=sky_style;
    context.fillRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<200;i++){
    	var radius=Math.random()*5+5;
    	var dx=canvas.width*Math.random();
    	var dy=canvas.height*Math.random()*0.65;
    	var a=360*Math.random();
	    drew_star(context,radius,dx,dy,a);
  }
    fillMoon(context,2,dx,dy,100,0);
    drawLand(context,0,600,440,500,760,700,canvas.width,600);
    context.lineTo(canvas.width,canvas.height);
    context.lineTo(0,canvas.height);
    context.fillStyle="black";
    context.fill();
}
//画星星
function drew_star(cxt,R,x,y,rot){
    cxt.save();
    cxt.translate(x,y);
    cxt.fillStyle="yellow"
    //cxt.rotate(rot/180*Math.PI);
    var grd=cxt.createRadialGradient(x,y,R*2/3,x,y,R);
    grd.addColorStop(0.0,"yellow");
    grd.addColorStop(1.0,"#f1f27e");
    //cxt.fillStyle=grd;
    cxt.scale(R,R);
    starPath(cxt);
	cxt.fill();
	cxt.restore();
}
function starPath(cxt){
	cxt.beginPath();
	for(var i=0;i<5;i++){
		cxt.lineTo(Math.cos((18+i*72)/180*Math.PI),
		          -Math.sin((18+i*72)/180*Math.PI));
		cxt.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
		          -Math.sin((54+i*72)/180*Math.PI)*0.5);
		
	}
	cxt.closePath();
	
}
//画月亮
function fillMoon(cxt,d,x,y,R,rot,fillColor){
	cxt.save();
	cxt.translate(x,y);
	cxt.rotate(rot*Math.PI/180);
	cxt.scale(R,R);
	pathMoon(cxt,d);
	cxt.fillStyle=fillColor||"#fb5";
	cxt.fill();
	cxt.restore();
}
function pathMoon(cxt,d){
	cxt.beginPath();
	cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
	moveTo(0,-1);
	cxt.quadraticCurveTo(1.2,0,0,1);
	cxt.closePath();
}
//画草地
function drawLand(cxt,sx,sy,x1,y1,x2,y2,x3,y3){
	cxt.save();
	cxt.beginPath();
	cxt.moveTo(sx,sy);
	cxt.bezierCurveTo(x1,y1,x2,y2,x3,y3);
	
	cxt.restore();
	cxt.stroke();
	
}














