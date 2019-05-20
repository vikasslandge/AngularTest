import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import {employee} from 'src/app/employee';
@Component({
  selector: 'app-details-of-employee',
  templateUrl: './details-of-employee.component.html',
  styleUrls: ['./details-of-employee.component.css']
})
export class DetailsOfEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit() {
  }
  emp :employee;
  
  employeeList=[];
  searchForm = new FormGroup({
    EmployeeId: new FormControl("",Validators.required)
  });
  OnSubmit(){
    this.service.GetEmployeeById(this.searchForm.value.EmployeeId).subscribe(s=>this.emp=s);
  
  }
}
