// app.routes.ts
import { Routes } from '@angular/router';
import { StudentRegistrationComponent } from './register/register';
import { StudentListComponent } from './students/students';

export const routes: Routes = [
  { path: 'register', component: StudentRegistrationComponent },
  { path: 'students', component: StudentListComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];
