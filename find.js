/*
Brian Leung
pd 7 Softdev
WORK 17 Moo?
*/
var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//randomize later
var targetX = Math.abs(Math.trunc(Math.random(6)*boxWidth));
var targetY = Math.abs(Math.trunc(Math.random(7)*boxHeight));
console.log("target: "+targetX+","+targetY);
console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
	return Math.sqrt(Math.pow(x1-x0,2)+Math.pow(y1-y0,2));
};

var maxDist = distance(0,0,boxWidth,boxHeight);	
console.log("maxDist: " + maxDist)


//This function will check the distance of the pointer to the invisible point
var findIt = function(e)
{
	console.log("x: "+e.clientX);
	console.log("y: "+e.clientY);
	var dust = distance(e.clientX,e.clientY,targetX,targetY);
	var actDist = Math.trunc(255*(maxDist-dust)/maxDist);
	console.log(rgb(actDist,actDist,actDist));
	box.style.backgroundColor = rgb(actDist,actDist,actDist);
};

//This function will check whether the pointer is in range of the target
var clicky = function(e)
{
	if (distance(e.clientX,e.clientY,targetX,targetY)<60)
	{
		var newhead = document.createElement("h1");
		newhead.innerHTML = "<b>YOU FOUND THE INVISIBLE COW!!!<b>";
		box.parentNode.replaceChild(newhead,box);

	}
}

//Converts the actDist to a hexcode for color
var rgb = function(r,g,b)
{	
	var newStr = r.toString(16);
	if (newStr.length <2)
	{
		newStr="0"+newStr;
	}

	return("#"+newStr+newStr+newStr);
};
/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
box.addEventListener("click", clicky);

