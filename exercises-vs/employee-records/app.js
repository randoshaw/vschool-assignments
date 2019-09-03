const employees = [];

function EmployeeFunc (name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";

}

EmployeeFunc.prototype.printEmployeeForm = function () {
    console.log(this)
}


const em1 = new EmployeeFunc ("Margo", "Manager", "$60/hour");
const em2 = new EmployeeFunc ("Chloe", "Vice-President", "$70/hour");
const em3 = new EmployeeFunc ("Nathan", "Founder & CEO", "$1000/hour");

em2.status = "Part Time";
em3.status = "Contract"

employees.push(em1);
employees.push(em2);
employees.push(em3);

employees.forEach(item => item.printEmployeeForm());