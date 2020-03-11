function member(id,name,grade){
    this.id="identifiant";
    this.name="nom";
    this.grade="grade";
    this.toString(){
        let str="";
        return str;
    }
}
function team(name,id){
    this.id="identifiant";
    this.name="nom";
    this.members=new Array();
    this.addmember(m){
        this.member.push(m);
    }
    this.toString(){
        let str ="";
        return str;
    }
}
var m1 =new member("rachid",15,"A");
var m2 =new member("ahmed",30,"B");
var m3 =new member("khaled",01,"C");

var est=new team()

