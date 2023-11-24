# Product Widgets

## Overview

This readme provides an overview of the tasks accomplished in the project, outlining the structure, functionalities, and key decisions made during development.

### Project Setup

- **Vite Setup:**
  - Created the project using Vite.
  - Modified Vite settings, including path aliases and port configuration for better development experience.

### Directory Structure

- **Components:**
  - A new directory, `components`, was created to house reusable components.

- **Core:**
  - Another directory, `core`, was established for services and data modeling.
  - Realized that the data from the API is clean and doesn't require additional modeling or filtering.

### Components

- **Widget Component:**
  - Implemented a widget component for specific functionalities.
  
- **Wrapper Component:**
  - Created a wrapper that dynamically loads and organizes widgets from a backend service.

### Design Enhancements

- **Loading State:**
  - Enhanced user experience by implementing a loading state during data retrieval.

Note: We can enhance the experience even more, with implementing an error state that appears if the request failed

### Responsive Design

- **Desktop and Mobile Modes:**
  - Ensured the design is responsive by implementing both desktop and mobile modes.

### State Management

- **Local Component State:**
  - Opted not to use Vuex store.
  - Managed state locally within each component, avoiding unnecessary complexity.

### Testing

- **End-to-End Automation:**
  - Implemented E2E automation specs using Cypress to test key functionalities.

### Challenges

- **Storybook Integration:**
  - Encountered issues with Storybook integration due to dependencies and peer dependencies.
  - Currently unresolved; further investigation is needed.

### Project Setup

```sh
yarn
```

#### Compile and Hot-Reload for Development

```sh
yarn dev
```

#### Type-Check, Compile and Minify for Production

```sh
yarn build
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

#### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Conclusion

This readme provides an overview of the project, detailing the structure, components, design enhancements, and testing procedures. The decision not to use Vuex and manage state locally was made to maintain simplicity, given the project's requirements. Challenges with Storybook integration are acknowledged, and further investigation is recommended.
