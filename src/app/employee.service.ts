import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private service:HttpClient) { }

baseUrl ="http://localhost:52872/api/employeedetails";

  GetEmployeeList():Observable<any>{
    return this.service.get<any>(this.baseUrl);
  }

  AddEmployee(employee){
    const body= JSON.stringify(employee);
    const headers =new HttpHeaders().set('Content-Type','application/json');
    return this.service.post(this.baseUrl,body,{headers}).toPromise();
  }

  GetEmployeeById(id):Observable<any>{
    return this.service.get<any>(this.baseUrl+"/"+id);
  }

  DeleteEmployee(id){
    return this.service.delete<any>(this.baseUrl+"/"+id).toPromise();
  }
}
