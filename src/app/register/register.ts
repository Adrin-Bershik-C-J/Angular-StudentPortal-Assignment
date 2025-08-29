// register/student-registration.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// If dropdown not working, replace with <select>. Keeping import for now.
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
  ],
  template: `
    <h2>Student Registration</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="p-fluid">
      <div class="p-field">
        <label>Name</label>
        <input pInputText formControlName="name" />
        <small *ngIf="form.controls['name'].invalid && form.controls['name'].touched">
          Name is required (min 3 chars).
        </small>
      </div>

      <div class="p-field">
        <label>Email</label>
        <input pInputText formControlName="email" />
        <small *ngIf="form.controls['email'].invalid && form.controls['email'].touched">
          Enter a valid email.
        </small>
      </div>

      <div class="p-field">
        <label>Age</label>
        <input type="number" pInputText formControlName="age" />
        <small *ngIf="form.controls['age'].invalid && form.controls['age'].touched">
          Age must be between 16 and 45.
        </small>
      </div>

      <div class="p-field">
        <label>Department</label>
        <p-dropdown [options]="departments" formControlName="department"></p-dropdown>
        <small *ngIf="form.controls['department'].invalid && form.controls['department'].touched">
          Department is required.
        </small>
      </div>

      <button pButton type="submit" label="Register" [disabled]="form.invalid"></button>
    </form>
  `,
  styles: [
    `
      form {
        max-width: 400px;
        margin: auto;
      }
      small {
        color: red;
      }
    `,
  ],
})
export class StudentRegistrationComponent {
  departments = [
    { label: 'Computer Science', value: 'CS' },
    { label: 'Electronics', value: 'EC' },
    { label: 'Mechanical', value: 'ME' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(45)]],
      department: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const students = JSON.parse(localStorage.getItem('students') || '[]');
      students.push(this.form.value);
      localStorage.setItem('students', JSON.stringify(students));
      this.router.navigate(['/students']);
    }
  }
}
