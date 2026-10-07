class testleafHRM{
empid : number
empname:string

fetchEmployeeDetails(){
    console.log(`the employee id is ${this.empid},the employee name is empname ${this.empname}`);

}

constructor(id:number, name:string) {
this.empid = id
this.empname = name

}
}

//After creating object constructor will be invoked
const obj = new testleafHRM(100, "Bhuvanesh")
console.log(obj.empid);
obj.fetchEmployeeDetails()
