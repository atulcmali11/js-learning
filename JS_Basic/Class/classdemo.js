export class Employee{
    constructor (EmpName,EmpLname){
        this.EmpName=EmpName;
        this.EmpLname=EmpLname;

    }
    
    print(params) {
        console.log(this.EmpName);
        console.log(this.EmpLname);
        
    }
    
}
export const msg="Hello world";
//const emp=new Employee('Atul','mali');
//emp.print();
//console.log(emp);

