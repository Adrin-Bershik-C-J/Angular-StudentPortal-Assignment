# Angular Student Portal

A modern student management application built with Angular 18+ and PrimeNG UI components. This application allows users to register new students and manage existing student records with full CRUD operations.

## Features

- **Student Registration**: Add new students with form validation
- **Student Management**: View, edit, and delete student records
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Data Validation**: Comprehensive form validation with error messages
- **Modern UI**: Clean interface built with PrimeNG components
- **Local Storage**: Persistent data storage using browser localStorage

## Technologies Used

- **Angular 18+** - Frontend framework
- **PrimeNG** - UI component library
- **TypeScript** - Programming language
- **Reactive Forms** - Form handling and validation
- **Angular Router** - Client-side routing
- **CSS3** - Styling and responsive design

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Adrin-Bershik-C-J/Angular-StudentPortal-Assignment.git
```

2. Navigate to the project directory:
```bash
cd Angular-StudentPortal-Assignment
```

3. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

## Application Structure

```
src/
├── app/
│   ├── register/          # Student registration component
│   ├── students/          # Student list and management component
│   ├── app.ts            # Root component
│   ├── app.routes.ts     # Application routing
│   └── app.config.ts     # Application configuration
├── styles.css            # Global styles
└── index.html           # Main HTML file
```

## Features Overview

### Student Registration
- **Form Fields**: Name, Email, Age, Department
- **Validation Rules**:
  - Name: Required, minimum 3 characters
  - Email: Required, valid email format
  - Age: Required, between 16-45 years
  - Department: Required selection from dropdown
- **Department Options**: Computer Science, Electronics, Mechanical

### Student Management
- **View Students**: Sortable table with pagination (10 records per page)
- **Edit Students**: In-place editing with validation
- **Delete Students**: Confirmation dialog before deletion
- **Responsive Table**: Adapts to different screen sizes

## Data Storage

The application uses browser localStorage to persist student data. Data is automatically saved when:
- New students are registered
- Existing student records are updated
- Students are deleted

## Build

Run the build command to create a production build:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run unit tests:

```bash
ng test
```

Run end-to-end tests:

```bash
ng e2e
```

## Code Quality

Run linting:

```bash
ng lint
```

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Author

**Adrin Bershik C J**
- GitHub: [@Adrin-Bershik-C-J](https://github.com/Adrin-Bershik-C-J)

## Acknowledgments

- Built with Angular framework
- UI components provided by PrimeNG
- Icons from PrimeIcons library
