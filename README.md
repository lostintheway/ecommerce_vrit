# My E-commerce Website

This is a simple e-commerce website built with Next.js, TypeScript, and React. The application includes product listings, a shopping cart, and functionality to add and remove items from the cart.

## Setup Instructions

Before begin, install following:

- Node.js (>=v14.0.0)
- npm/yarn/pnpm (package manager)

step 1:
npm install

# or

yarn install

# or

pnpm install

# or

bun install

step 2:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

###

Technology Choices and Rationale

1. Next.js
   We chose Next.js as the framework for this project because it offers:
   Server-Side Rendering (SSR) and Static Site Generation (SSG) capabilities out of the box, making it ideal for SEO and fast page loads.
   API Routes, which allow us to build a full-stack application with a single framework, making it easy to handle server-side logic like managing the shopping cart or interacting with external APIs.
   File-based routing for simple page navigation and dynamic route generation, which reduces boilerplate code.

2. React
   We are using React as the UI library because it:
   Supports component-based architecture, allowing us to build reusable and maintainable components (like the product listing, cart, and buttons).
   Has a large ecosystem of tools, libraries, and community support.
   Allows declarative rendering, simplifying state management and the UI logic.

3. TypeScript
   TypeScript provides static typing for the JavaScript code, which:
   Improves code quality by catching errors during development.
   Provides better IDE support, making it easier to refactor and navigate the codebase.
   Helps with long-term maintainability, especially in larger projects.

4. CSS Modules
   For styling, we use either:
   CSS Modules, which provide scoped CSS for each component, reducing the chances of style conflicts.

5. Playwright
   We use Playwright for testing the application to ensure it behaves correctly and offers a good user experience.
   Automate browser interactions for end-to-end testing.
   Test the app on multiple browsers (Chromium, Firefox, WebKit).
   Simulate real user interactions

### Known Limitations/Trade-offs

1.  Lack of Authentication

    Currently, there is no user authentication or login functionality in this app. All cart data is stored in the client-side state, meaning the cart is reset if the page is refreshed.
    No Backend Integration

    This app is purely front-end and does not persist cart data or products on a backend server. We could integrate a backend or use serverless functions to persist data.
    Mobile Responsiveness

    While basic mobile responsiveness is implemented, some aspects of the UI might not be fully optimized for all screen sizes. Further improvements can be made to enhance the mobile experience.

2.  Limited Product Data

    The product data is hardcoded, and the app does not interact with an external database or API to fetch product data dynamically. In a production environment, this should be replaced with a backend API or a headless CMS.
    Performance

    The app does not include advanced optimizations like image compression, lazy loading, or caching strategies that could improve performance, especially for a large number of products.

#### Future Improvements

1.  User Authentication

    Add user login and registration functionality, allowing users to persist their cart and order history between sessions.
    Backend Integration

    Integrate with a backend service (e.g., Node.js, Express, Firebase, or a headless CMS) to fetch products dynamically and persist the cart data across sessions.
    Improve Mobile Responsiveness

    Further refine the UI for better responsiveness on all devices, especially mobile devices with smaller screens.

2.  Add Unit and Integration Tests

    Expand the test coverage by adding more unit tests for individual components and integration tests for key workflows (e.g., adding products to the cart).
    State Management

    Implement a more scalable state management solution, like Redux or Zustand, to manage the cart state, especially for more complex scenarios (e.g., cart persistence across pages).

3.  Performance Enhancements

    Implement performance optimizations, such as lazy loading of images and content, to improve page load times for larger product catalogs.
