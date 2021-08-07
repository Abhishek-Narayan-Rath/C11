var marks = [30,40,45,35];
var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400, 400);
  marks_average();
  weight_average();
}

function draw() {
  background(150);
}
function marks_average(){
 var sum= 0;

 for(var i=0; i<marks.length; i=i+1){
   sum=sum+ marks[i];
 }
 var avg=sum/marks.length;
 console.log(avg);
}
function weight_average(){
  var sum= 0;

  for(var i=0; i<weight.length; i=i+1){
    sum=sum+ weight[i];
  }
  var avg=sum/weight.length;
  console.log(avg);
 }
