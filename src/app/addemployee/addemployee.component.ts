import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControl, Validators} from '@angular/forms'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit() {
  }

  employeeForm= new FormGroup({
    // EmployeeId : new FormControl(""),
    EmployeeName : new FormControl("",Validators.required),
    Salary : new FormControl("",[Validators.required,Validators.min(10000)]),
    DateOfBirth : new FormControl("",[Validators.required]),
    City : new FormControl("",Validators.required),
  });

  dobValid =new Date();


  OnSubmit(){
    console.log(this.employeeForm.value);
    this.service.AddEmployee(this.employeeForm.value)
  }
}
