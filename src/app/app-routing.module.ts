import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DetailsOfEmployeeComponent } from './details-of-employee/details-of-employee.component';

const routes: Routes = [
  {path:"EmployeeList",component:EmployeeListComponent},
  {path:"AddEmployee",component:AddemployeeComponent},
  {path:"DetailsOfEmployee",component:DetailsOfEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
