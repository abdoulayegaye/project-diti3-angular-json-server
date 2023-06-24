import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL : string = "http://localhost:3000/employees";

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<Employee[]>(this.API_URL);
  }

  create(data : Employee){
    return this.http.post(this.API_URL, data);
  }

  get(id : number){
    return this.http.get<Employee>(this.API_URL+`/${id}`);
  }

  update(data : Employee){
    return this.http.put<Employee>(this.API_URL+`/${data.id}`, data);
  }

  delete(id : number){
    return this.http.delete(this.API_URL+`/${id}`);
  }
}
