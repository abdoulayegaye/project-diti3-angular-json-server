import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { domainToASCII } from 'url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees : Employee[] = [];

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
    this.empService.getAll().subscribe(data => {
      this.employees = data
      console.log(data)
    })
  }

}
