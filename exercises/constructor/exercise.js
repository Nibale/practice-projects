var Employee =function(name,jobTitle,salary,status){
    this.name=name;
    this.jobTitle=jobTitle;
    this.salary=salary;
    this.status=status;
    this.printEmployeeForm = function(){
        console.log("name: "+ this.name);
        console.log("jobTitle "+ this.jobTitle);
        console.log("salary "+ this.salary);
        console.log("status "+ this.status);
    }
}
var employees=[];
var nibal=new Employee("nibal", 'teacher',600,"part time")
var alaa=new Employee("alaa", "designer", 900, "part time")
var hiba=new Employee("hiba", "accountant",800, "full time")
employees.push(nibal)
employees.push(alaa)
employees.push(hiba)
for(var i=0 ; i< employees.length ; i++){
 if(employees[i].salary>600){
     employees[i].printEmployeeForm();
 }
}
