var a= Math.random()*100;
a=parseInt(a);
alert(a);
var s=0;
while((a!=b)&&(s<5)){
   var b=prompt("donnez votre nombre : ");
    b=parseInt(b);
    if(a<b){
        alert("Plus Petite ");
    }
    else if(a>b){
        alert("Plus Grand ");
    }
    s++;
    var x=5-s;
    alert("vous reste "+x+" essay");
}
if(a===b)
    alert("vous avez gagnez !!! "+s+" essay");
else
    alert("vous avez Perdue");