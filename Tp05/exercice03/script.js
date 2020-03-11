
function somme(a){
    var s=0;
    console.log(t);
    for(let i=0;i<t.length;i++){
        s+=t[i];
    }
    return s;
}

var t=new Array();
do{
    var b=prompt("donnez un nombre : ");
    b=parseInt(b);
    console.log(b);
    if(! isNaN(b))
        t.push(b);
}while(! isNaN(b));

var so=somme(t);
console.log("la somme est :",so);
