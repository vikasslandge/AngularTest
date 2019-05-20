import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {

  constructor(private service:EmployeeService) { 
    this.service.GetEmployeeList().subscribe(s=>this.employeeList=s);
  }
employeeList =[];
emp :employee; 
  GetEmployeeList(){
      this.service.GetEmployeeList().subscribe(s=>this.employeeList=s);
  }
  
  DeleteEmployee(id){
    console.log(id);
    this.service.DeleteEmployee(id);
  }
  DetailsOfEmployee(id){
    this.service.GetEmployeeById(id).subscribe(s=>this.emp=s);
  }
}
