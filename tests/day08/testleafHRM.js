"use strict";
class testleafHRM1 {
    empid;
    empname;
    fetchEmployeeDetails() {
        console.log(`the employee id is ${this.empid},the employee name is ${this.empname}`);
    }
    constructor(id, name) {
        this.empid = id;
        this.empname = name;
    }
}
//After creating object constructor will be invoked
const obj2 = new testleafHRM1(100, "Bhuvanesh");
console.log(obj2.empid);
obj2.fetchEmployeeDetails();
