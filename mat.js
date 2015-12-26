var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
chinese = chinese.split("");

c.height = window.innerHeight;
c.width = window.innerWidth;

var fontsize = 20;
var columns = c.width/fontsize;

var drops = [];

for(var x=0; x<columns; x++)
{
    var text = chinese[Math.floor(Math.random()*chinese.length)];
    var s = Math.random();
    drops[x] = { x:x, y:1, c: text, p: text, s:1, f: fontsize};
}

function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);

    for(var x=0;x<columns;x++)
    {
	var text = chinese[Math.floor(Math.random()*chinese.length)];
	drops[x].c = text;

	if(drops[x].y*fontsize >= 0 && drops[x].y*fontsize < c.height)
	{
	    ctx.font = (drops[x].f) + "px arial";
	    ctx.fillStyle = "#fff";
	    ctx.fillText(drops[x].c, x*fontsize, drops[x].y*fontsize);
	    
	    ctx.font = drops[x].f + "px arial";
	    ctx.fillStyle = "#0ff";
	    ctx.fillText(drops[x].p, x*fontsize, (drops[x].y-drops[x].s)*fontsize);
	}
	
	drops[x].p = drops[x].c;
	
	drops[x].y += drops[x].s;
	if(drops[x].y*fontsize >= c.height && Math.random() > 0.9)
	{
	    drops[x].s = 0.3+Math.random()*0.7;
	    drops[x].y = -1000*Math.random();
	}
    }
}

setInterval(draw, 33);


