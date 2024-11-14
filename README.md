# Menu91 Frontend

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Folder Structure Explanation (High Level)](#folder-structure-explanation-high-level)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Introduction

**Menu91** is an enterprise-level restaurant management frontend application built with **React** and **Bootstrap**. It helps restaurant businesses streamline their operations by providing a platform to manage orders, tables, menu items, and customer feedback efficiently. This frontend application is designed for high performance and scalability, following industry best practices.

---

## Features

- **Order Management**: View and manage new, local, and offline orders.
- **Menu Management**: Add, categorize, and manage dishes.
- **Table Management**: Handle table reservations and availability for dining.
- **Coupons and Discounts**: Manage customer coupons and discounts.
- **Analytics**: View business insights and metrics.
- **User Management**: Manage staff and customer accounts.
- **Feedback**: Collect and respond to customer feedback.
- **Settings**: Customize and configure app settings.

---

## Tech Stack

- **Frontend**: React, Bootstrap
- **State Management**: React Context API
- **Routing**: React Router, Axios
- **Styling**: CSS modules, Bootstrap
- **API**: REST API integration for backend communication

---

## Folder Structure

```
menu91-frontend/
├── public/                               # Public static assets and HTML template
│   ├── index.html                        # HTML template for React app
│   └── favicon.ico                       # Favicon for the application
├── src/                                  # Main source directory
│   ├── api/                              # API service modules
│   │   ├── auth.js                       # Authentication API calls
│   │   ├── orders.js                     # Orders API calls
│   │   ├── menu.js                       # Menu-related API calls
│   │   ├── analytics.js                  # Analytics API calls
│   │   └── ...                           # Additional API modules
│   ├── assets/                           # Static assets like images, icons, and fonts
│   ├── components/                       # Reusable components
│   │   ├── navbar/                       # Navbar component
│   │   │   ├── Navbar.js                 # Navbar component file
│   │   │   └── navbar.css                # Navbar component styles
│   │   ├── sidebar/                      # Sidebar component
│   │   │   ├── Sidebar.js                # Sidebar component file
│   │   │   └── sidebar.css               # Sidebar component styles
│   │   ├── footer/                       # Footer component
│   │   │   ├── Footer.js                 # Footer component file
│   │   │   └── footer.css                # Footer component styles
│   │   └── ...                           # Other reusable components
│   ├── config/                           # Configuration files
│   │   └── env.js                        # Environment-based configuration (API URLs, keys)
│   ├── constants/                        # App-wide constants
│   │   └── routes.js                     # Route paths for consistency
│   ├── contexts/                         # Context API for global state management
│   │   ├── authContext/                  # Authentication context
│   │   │   ├── AuthContext.js            # Auth context file
│   │   │   └── authContext.css           # Auth context related styles (if needed)
│   │   └── ...                           # Other contexts
│   ├── features/                         # Feature-specific components and pages
│   │   ├── dashboardPage/                # Dashboard main page
│   │   │   ├── DashboardPage.js          # Dashboard component file
│   │   │   └── dashboardPage.css         # Dashboard page styles
│   │   ├── newOrdersPage/                # New Orders page
│   │   │   ├── NewOrdersPage.js          # New Orders component file
│   │   │   └── newOrdersPage.css         # New Orders page styles
│   │   ├── myOrdersPage/                 # My Orders page
│   │   │   ├── MyOrdersPage.js           # My Orders component file
│   │   │   └── myOrdersPage.css          # My Orders page styles
│   │   ├── localOrdersPage/              # Local Orders page
│   │   │   ├── LocalOrdersPage.js        # Local Orders component file
│   │   │   └── localOrdersPage.css       # Local Orders page styles
│   │   ├── offlineOrdersPage/            # Offline Orders page
│   │   │   ├── OfflineOrdersPage.js      # Offline Orders component file
│   │   │   └── offlineOrdersPage.css     # Offline Orders page styles
│   │   ├── diningPage/                   # Dining page
│   │   │   ├── DiningPage.js             # Dining component file
│   │   │   └── diningPage.css            # Dining page styles
│   │   ├── takeAwayPage/                 # Take Away page
│   │   │   ├── TakeAwayPage.js           # Take Away component file
│   │   │   └── takeAwayPage.css          # Take Away page styles
│   │   ├── tablesPage/                   # Tables page
│   │   │   ├── TablesPage.js             # Tables component file
│   │   │   └── tablesPage.css            # Tables page styles
│   │   ├── addDishesPage/                # Add Dishes page
│   │   │   ├── AddDishesPage.js          # Add Dishes component file
│   │   │   └── addDishesPage.css         # Add Dishes page styles
│   │   ├── myMenuPage/                   # My Menu page
│   │   │   ├── MyMenuPage.js             # My Menu component file
│   │   │   └── myMenuPage.css            # My Menu page styles
│   │   ├── categoriesPage/               # Categories page
│   │   │   ├── CategoriesPage.js         # Categories component file
│   │   │   └── categoriesPage.css        # Categories page styles
│   │   ├── couponsPage/                  # Coupons page
│   │   │   ├── CouponsPage.js            # Coupons component file
│   │   │   └── couponsPage.css           # Coupons page styles
│   │   ├── profilePage/                  # Profile page
│   │   │   ├── ProfilePage.js            # Profile component file
│   │   │   └── profilePage.css           # Profile page styles
│   │   ├── settingsPage/                 # Settings page
│   │   │   ├── SettingsPage.js           # Settings component file
│   │   │   └── settingsPage.css          # Settings page styles
│   │   ├── analyticsPage/                # Analytics page
│   │   │   ├── AnalyticsPage.js          # Analytics component file
│   │   │   └── analyticsPage.css         # Analytics page styles
│   │   ├── usersPage/                    # Users page
│   │   │   ├── UsersPage.js              # Users component file
│   │   │   └── usersPage.css             # Users page styles
│   │   ├── feedbackPage/                 # Feedback page
│   │   │   ├── FeedbackPage.js           # Feedback component file
│   │   │   └── feedbackPage.css          # Feedback page styles
│   │   └── logoutPage/                   # Logout page
│   │       ├── LogoutPage.js             # Logout component file
│   │       └── logoutPage.css            # Logout page styles
│   ├── hooks/                            # Custom reusable hooks
│   │   ├── useAuth/                      # Authentication-related hook
│   │   │   ├── useAuth.js                # Auth hook file
│   │   │   └── useAuth.css               # Hook-related styles (if needed)
│   │   └── ...                           # Other custom hooks
│   ├── layouts/                          # Layouts for different parts of the app
│   │   ├── adminLayout/                  # Layout for admin dashboard
│   │   │   ├── AdminLayout.js            # Admin layout file
│   │   │   └── adminLayout.css           # Admin layout styles
│   │   └── ...                           # Other layouts as necessary
│   ├── pages/                            # Top-level pages for routing
│   │   ├── dashboard/                    # Dashboard landing page
│   │   │   ├── Dashboard.js              # Dashboard landing component file
│   │   │   └── dashboard.css             # Dashboard landing page styles
│   │   ├── login/                        # Login page
│   │   │   ├── Login.js                  # Login page component file
│   │   │   └── login.css                 # Login page styles
│   │   └── signup/                       # Signup page
│   │       ├── Signup.js                 # Signup page component file
│   │       └── signup.css                # Signup page styles
│   ├── utils/                            # Utility functions
│   │   ├── helpers.js                    # Helper functions for common tasks
│   │   └── formatters.js                 # Formatting utilities
│   ├── App.js                            # Main app component
│   ├── index.js                          # React app entry point
│   └── index.css                         # Global styles
└── README.md                             # Project documentation
```

---

## Folder Structure Explanation (High Level)

- **public**: Contains static assets and HTML templates.
- **src**: Contains all source files for the application.
  - **api**: Houses API modules for backend communication.
  - **assets**: Static assets (images, icons, fonts).
  - **components**: Reusable components across the application.
  - **config**: Configuration files for environment and settings.
  - **contexts**: React Context files for global state management.
  - **features**: Feature-specific components and pages.
  - **hooks**: Custom hooks for reusable logic.
  - **layouts**: Layouts for different sections (e.g., admin).
  - **pages**: Top-level routing pages.
  - **utils**: Utility functions.

---

## Installation

### Prerequisites

- **Node.js** and **npm** or **Yarn**

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/GitHub-Co-pilot-Enterprise-UAT/RMS.git
   cd RMS
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file.

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `build` directory to your preferred web server.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and submit a pull request.
4. Ensure that your code follows the project’s coding standards.

## Organizational Best Practices

1. **Modular Structure and Folder Organization**

   - Use a modular approach where components, services, and other parts are grouped under modules, which encourages reusability and maintainability.
   - Follow an ideal folder structure where different aspects like assets, localization files, shared components, and feature-specific components are organized logically for easy navigation and scalability.

2. **Coding Best Practices**

   - Naming conventions: Use Pascal case for components and camel case for functions/methods. Constants should be in uppercase.
   - Avoid excessive usage of state; manage it centrally and pass data through props.
   - DRY principle: Create reusable components to avoid redundancy.
   - Minimize unnecessary HTML `<div>` elements and comments in code.
   - Use ES6 features such as destructuring, spread operators, and arrow functions to write cleaner code.

3. **Component Decomposition and Reusability**

   - Decompose large components to maintain the Single Responsibility Principle (SRP).
   - Use functional components, preferably with React Hooks, unless there’s a specific need for class components.
   - Employ prop destructuring and define `propTypes` for better readability and type checking.

4. **Dynamic Rendering and Logic Minimization**

   - Use the `&&` operator and ternary expressions for conditional rendering.
   - Render lists with `.map()` and handle multiple props efficiently.
   - Minimize the logic in React lifecycle methods and in render methods for better performance.

5. **Security Considerations**

   - Implement secure authentication methods (JWT, OAuth, etc.) and protect against XSS, DDoS, SQL injection, and broken access control.
   - Avoid using `dangerouslySetInnerHTML` unless necessary, and sanitize user inputs with tools like DOMPurify.

6. **Testing and Code Quality**

   - Write unit tests for each component and aim for high code coverage.
   - Use ESLint or Prettier for consistent formatting, and make code commits that are small and logically organized.
   - Secure GitHub repositories with `.gitignore` and check in only necessary files.

7. **Security in HTTP and SQL Injection Prevention**
   - Implement secure HTTP authentication methods.
   - Use validation for API schemas to prevent SQL injection and consider SSL certificates for secure data transactions.
