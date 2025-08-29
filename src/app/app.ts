// app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  items = [
    {
      label: 'Register Student',
      icon: 'pi pi-user-plus',
      routerLink: '/register',
    },
    {
      label: 'View Students',
      icon: 'pi pi-users',
      routerLink: '/students',
    },
  ];
}
