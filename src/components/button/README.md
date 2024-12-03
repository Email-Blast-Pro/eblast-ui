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

### Button Component Props

| Prop Name | Type     | Description                                  | Default Value | Values                                                                                                                                                                                         |
| --------- | -------- | -------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onClick` | `func`   | Function to call when the button is clicked. | `null`        | `func`, `null`                                                                                                                                                                                 |
| `color`   | `string` | Defines the button color and state           | primary       | primary, primary-outline, secondary, secondary-ouline, success, success-outline, danger, danger-outline, warning, warning-ouline, info, info-outline, light, light-outline, dark, dark-outline |

<!-- | Prop Name  | Type     | Description                                                 | Default Value |
| ---------- | -------- | ----------------------------------------------------------- | ------------- |
| `onClick`  | `func`   | Function to call when the button is clicked.                | `null`        |
| `color`    | `string` | Defines the button color (e.g., 'primary', 'secondary').    | `'primary'`   |
| `size`     | `string` | Defines the button size (e.g., 'small', 'medium', 'large'). | `'medium'`    |
| `disabled` | `bool`   | If true, disables the button.                               | `false`       |
| `custom`   | `string` | Additional custom class for styling.                        | -->

### Example

```jsx
<Button
  onClick={() => alert("Button clicked!")}
  label="Click Me"
  color="primary"
  size="large"
/>
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
