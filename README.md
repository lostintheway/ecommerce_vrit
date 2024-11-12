# My E-commerce Website

This is a simple e-commerce website built with Next.js, TypeScript, and React. The application includes product listings, a shopping cart, and functionality to add and remove items from the cart.

## Setup Instructions

Before you begin, install following:

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
