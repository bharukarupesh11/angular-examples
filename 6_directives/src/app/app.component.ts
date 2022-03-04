import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Fields
  employees2; 
  canSave = true; // change the value to false to see the style binding effect
  courses: number[] = [1, 2];
  viewMode = 'map';

  books = [
    {id: 1, name: 'book1'},
    {id: 2, name: 'book2'},
    {id: 3, name: 'book3'}
  ];

  employees = [
    {id: 1, name: 'emp1'},
    {id: 2, name: 'emp2'},
    {id: 3, name: 'emp3'}
  ];

  
  // Methods
  onAdd() {
    let employeeNo = this.employees.length + 1
    this.employees.push({id: employeeNo, name: 'emp' + employeeNo});
  }

  onRemove(employee) {
    let index = this.employees.indexOf(employee);
    this.employees.splice(index, 1); // go to that index and delete 1 object
  }

  onChange(employee) {
    employee.name = 'Updated';
  }

  loadEmployees(){
   this.employees2 = [
      {id: 1, name: 'Rupesh'},
      {id: 2, name: 'Shubham'},
      {id: 3, name: 'Amit'}
    ];
  }

  trackEmployees(index, employee) {
    return employee ? employee.id: undefined;
  }

} // end of class here 
