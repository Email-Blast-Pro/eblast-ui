# Button Component

> Eblast UI Documentation

## Overview

The `<Button />` component is one of the primary UI elements in the Eblast UI library. This component can be customized with various props to fit different use cases, including different styles, sizes, and actions.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Button Component](#button-component)
- [Contributing](#contributing)

## Folder Structure

Here’s a brief overview of the folder structure in this repository:

```
/eblast-ui
│
├── /src                   # Source code for components and assets
│   ├── /components        # Reusable UI components (Button, etc.)
│   ├── /button            # Reusable UI components (Button, etc.)
│   │   └── button.js      # The Button component implementation
│   │   └── button.css     # Styles for the Button component
│   |   └── README.md      # Main README file
│
├── package.json           # Project metadata and dependencies
└── .gitignore             # Git ignore rules
```

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
