# Button Component

> Eblast UI Documentation

## Overview

Eblast UI is a component library for the Eblast platform. This repository contains reusable UI components, starting with the implementation of the Button component. The goal of the library is to create consistent, maintainable, and easily customizable UI elements that can be used across the Eblast platform.

The current branch, `issue-1-button-component`, focuses on the development of the Button component, which will serve as the foundation for other UI components.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Button Component](#button-component)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the Eblast UI component library, you'll need to set up a local development environment and install the required dependencies.

### Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Email-Blast-Pro/eblast-ui.git
   cd eblast-ui
   ```

2. **Install dependencies:**

   If you are using npm:

   ```bash
   npm install
   ```

   Or if you are using yarn:

   ```bash
   yarn install
   ```

3. **Run the development server:**

   To start the local development environment and view the components in action, run:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   This should open the application in your browser, where you can see the components being developed.

## Folder Structure

Here’s a brief overview of the folder structure in this repository:

```
/eblast-ui
│
├── /src                   # Source code for components and assets
│   ├── /components        # Reusable UI components (Button, etc.)
│   │   └── Button.js      # The Button component implementation
│   │
│   ├── /styles            # SCSS or CSS files for component styling
│   │   └── Button.scss    # Styles for the Button component
│   │
│   ├── /utils             # Utility functions or hooks used across components
│   │   └── buttonUtils.js # Utility functions for Button component
│   │
│   └── /index.js          # Entry point for the application
│
├── /public                # Public assets (images, icons, etc.)
│   └── index.html         # HTML entry point
│
├── /docs                  # Documentation files (this file)
│   └── README.md          # Main README file
│
├── package.json           # Project metadata and dependencies
└── .gitignore             # Git ignore rules
```

## Button Component

The Button component is one of the primary UI elements in the Eblast UI library. This component can be customized with various props to fit different use cases, including different styles, sizes, and actions.

### Usage

To use the `Button` component in your project, follow these steps:

1. **Import the component:**

   ```javascript
   import { Button } from "eblast-ui";
   ```

2. **Add the button to your UI:**

   ```jsx
   <Button onClick={handleClick} color="primary" size="large">
     Click Me
   </Button>
   ```

### Button Component Props

| Prop Name   | Type     | Description                                                 | Default Value |
| ----------- | -------- | ----------------------------------------------------------- | ------------- |
| `onClick`   | `func`   | Function to call when the button is clicked.                | `null`        |
| `color`     | `string` | Defines the button color (e.g., 'primary', 'secondary').    | `'primary'`   |
| `size`      | `string` | Defines the button size (e.g., 'small', 'medium', 'large'). | `'medium'`    |
| `disabled`  | `bool`   | If true, disables the button.                               | `false`       |
| `className` | `string` | Additional custom class for styling.                        | `''`          |

### Styling

The button styles are controlled via the `Button.scss` file. The styles are modular and based on the selected `color` and `size` props. If you want to customize the button further, you can either override these styles or create additional styles in your own project.

```scss
.button {
  &.primary {
    background-color: blue;
    color: white;
  }

  &.secondary {
    background-color: grey;
    color: black;
  }

  &.large {
    padding: 12px 20px;
    font-size: 16px;
  }

  &.small {
    padding: 6px 10px;
    font-size: 12px;
  }
}
```

### Example

```jsx
<Button onClick={() => alert("Button clicked!")} color="primary" size="large">
  Click Me
</Button>
```

This will render a blue button that is large-sized with the text "Click Me". When clicked, it will display an alert message.

## Contributing

We welcome contributions to improve the Eblast UI component library. If you would like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Implement your changes
4. Write tests (if applicable)
5. Open a pull request to the main repository

Make sure to follow the coding style guidelines and include relevant test coverage for your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This documentation should help you get started with the repository and understand how to use and contribute to the Button component and the overall project. Let me know if you'd like to add more details or modify anything!
