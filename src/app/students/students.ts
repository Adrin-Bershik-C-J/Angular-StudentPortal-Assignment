// students/students.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

interface Student {
  name: string;
  email: string;
  age: number;
  department: string;
}

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
    DropdownModule,
  ],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  displayDialog = false;
  editIndex: number | null = null;

  departments = [
    { label: 'Computer Science', value: 'CS' },
    { label: 'Electronics', value: 'EC' },
    { label: 'Mechanical', value: 'ME' },
  ];

  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(45)]],
      department: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
  }

  editStudent(event: any) {
    this.editStudentByIndex(this.students.indexOf(event));
  }

  editStudentByIndex(index: number) {
    this.editIndex = index;
    const student = this.students[index];
    this.editForm.patchValue(student);
    this.displayDialog = true;
  }

  saveEdit() {
    if (this.editForm.valid && this.editIndex !== null) {
      this.students[this.editIndex] = this.editForm.value;
      localStorage.setItem('students', JSON.stringify(this.students));
      this.closeDialog();
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.editForm.controls).forEach((key) => {
        this.editForm.get(key)?.markAsTouched();
      });
    }
  }

  deleteStudent(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.students.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(this.students));
    }
  }

  closeDialog() {
    this.displayDialog = false;
    this.editIndex = null;
    this.editForm.reset();
  }

  getDepartmentLabel(value: string): string {
    const dept = this.departments.find((d) => d.value === value);
    return dept ? dept.label : value;
  }
}
