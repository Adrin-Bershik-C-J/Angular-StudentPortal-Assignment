// register/register.ts
import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class StudentRegistrationComponent {
  departments = [
    { label: 'Computer Science', value: 'CS' },
    { label: 'Electronics', value: 'EC' },
    { label: 'Mechanical', value: 'ME' },
  ];

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(45)]],
      department: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const students = JSON.parse(localStorage.getItem('students') || '[]');
      students.push(this.registerForm.value);
      localStorage.setItem('students', JSON.stringify(students));
      this.registerForm.reset();
      this.router.navigate(['/students']);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.registerForm.controls).forEach((key) => {
        this.registerForm.get(key)?.markAsTouched();
      });
    }
  }

  get f() {
    return this.registerForm.controls;
  }
}
