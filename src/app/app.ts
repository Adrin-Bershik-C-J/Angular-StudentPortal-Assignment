// app.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, RouterLink],
  template: `
    <div class="app-container">
      <p-menubar [model]="items"></p-menubar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f8f9fa;
    }
    
    .main-content {
      padding: 2rem 1rem;
    }
    
    :host ::ng-deep .p-menubar {
      border-radius: 0;
      margin-bottom: 0;
      background: #ffffff;
      border: 1px solid #dee2e6;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    :host ::ng-deep .p-menuitem-link {
      padding: 1rem 1.5rem;
      font-weight: 500;
    }
    
    :host ::ng-deep .p-menuitem-link:hover {
      background-color: #f8f9fa;
    }

    @media (max-width: 768px) {
      .main-content {
        padding: 1rem 0.5rem;
      }
    }
  `]
})
export class App {
  items = [
    { 
      label: 'Register Student', 
      icon: 'pi pi-user-plus',
      routerLink: '/register' 
    },
    { 
      label: 'View Students', 
      icon: 'pi pi-users',
      routerLink: '/students' 
    }
  ];
}