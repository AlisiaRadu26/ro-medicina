
var counter=document.getElementById('counter').getContext('2d');
var no=0; //Starting point
var pointToFill=4.72; //Point from where you want to fill the Circle
var cw=counter.canvas.width; //Return canvas width
var ch=counter.canvas.height; //Return canvas height
var diff; //find the different between current value (no) and trageted value (100)

function fillCounter(add_value) {

	var counter=document.getElementById('counter').getContext('2d');
//	var no=parseInt(add_value) + parseInt(start_point); //Starting point
	var start_point = document.getElementById('hidden_value').value;
  var no=parseInt(add_value) + parseInt(start_point); //Starting point
	// var pointToFill=4.72; //Point from where you want to fill the Circle
	//alert(pointToFill);
	var cw=counter.canvas.width; //Return canvas width
	var ch=counter.canvas.height; //Return canvas height
	var diff; //find the different between current value (no) and trageted value (100)
	var rest;

  diff=((no/1000)*Math.PI*2*10);

  counter.clearRect(0,0,cw,ch); //Clear canvas every time when function is call
  counter.lineWidth=15; //size of stroke
  counter.fillStyle='white'; //color that you want to fill in counter/Circle
  counter.strokeStyle='yellow'; //Stroke color
  counter.textAlign='center';
  counter.font="8 px monospace";  //set font size and face
  counter.fillText(no + ' din suma totala de 1000 ',100,110); //fillText(text,x)
  counter.beginPath();
  counter.arc(100,100,90,pointToFill,diff/10+pointToFill);
 // arc(x,y,radius,start,stop)
  counter.stroke(); //to fill stroke
  //now add condition

	if(no<1000){
		rest=1000-no;
		counter.fillText('Inca '+rest+' RON',100,130);
		counter.fillText('pentru reducere',100,140);
	}

  if(no>=1000) {
//	 counter.fillText(' ',100,110); //fillText(text,x)
counter.fillText('Felicitari!',100,130);
counter.fillText('Codul de reducere : ZFGHGZ20',100,140); //fillText(text,x)
  //clearTimeout(fill); //fill is a variable that call the function fillcounter()

  }
  document.getElementById('hidden_value').value = parseInt(start_point) + parseInt(add_value);
 // no++;
}
//now call the function
//var fill=setInterval(fillCounter,50); //call the fillCounter function after every
