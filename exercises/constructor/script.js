var Person=function(name, age, nationality){
    this.name=name;
    this.age=age;
    this.nationality;
    this.job=function(){
        console.log(this.name+ " is working ");
    }
};
var nibal=new Person("nibal",29,"syrian")
    console.log(nibal);

var tabarak=new Person("tabarak",19,"iraqian")
console.log(tabarak);
tabarak.job()
