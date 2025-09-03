import { Component } from '@angular/core';

@Component({
  selector: 'app-student-body',
  templateUrl: './student-body.component.html',
  styleUrls: ['./student-body.component.scss']
})
export class StudentBodyComponent {
students = [
    { id: 1, name: 'John Doe', age: 16, class: '10th' },
    { id: 2, name: 'Jane Smith', age: 15, class: '9th' },
    { id: 3, name: 'Alice Johnson', age: 17, class: '11th' },
    { id: 4, name: 'Bob Brown', age: 16, class: '10th' }
  ];
}
