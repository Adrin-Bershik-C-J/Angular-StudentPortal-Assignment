// students/student-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
  ],
  template: `
    <h2>Student List</h2>
    <p-table [value]="students" (onRowSelect)="editStudent($event.data)" selectionMode="single">
      <ng-template pTemplate="header">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Department</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-student>
        <tr [pSelectableRow]="student">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.department }}</td>
        </tr>
      </ng-template>
    </p-table>

    <p-dialog header="Edit Student" [(visible)]="dialogVisible" [modal]="true" [closable]="false">
      <form [formGroup]="form" (ngSubmit)="saveStudent()" class="p-fluid">
        <div class="p-field">
          <label>Name</label>
          <input pInputText formControlName="name" />
        </div>
        <div class="p-field">
          <label>Email</label>
          <input pInputText formControlName="email" />
        </div>
        <div class="p-field">
          <label>Age</label>
          <input type="number" pInputText formControlName="age" />
        </div>
        <div class="p-field">
          <label>Department</label>
          <p-dropdown [options]="departments" formControlName="department"></p-dropdown>
        </div>
        <button pButton type="submit" label="Save" [disabled]="form.invalid"></button>
      </form>
    </p-dialog>
  `,
})
export class StudentListComponent {
  students = JSON.parse(localStorage.getItem('students') || '[]');
  dialogVisible = false;
  editIndex: number | null = null;

  departments = [
    { label: 'Computer Science', value: 'CS' },
    { label: 'Electronics', value: 'EC' },
    { label: 'Mechanical', value: 'ME' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(45)]],
      department: ['', Validators.required],
    });
  }

  editStudent(student: any) {
    this.editIndex = this.students.indexOf(student);
    this.form.patchValue(student);
    this.dialogVisible = true;
  }

  saveStudent() {
    if (this.form.valid && this.editIndex !== null) {
      this.students[this.editIndex] = this.form.value;
      localStorage.setItem('students', JSON.stringify(this.students));
      this.dialogVisible = false;
    }
  }
}
