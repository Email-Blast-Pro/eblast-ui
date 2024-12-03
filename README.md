# Eblast UI Documentation

> Email Blast Pro UI Design System

## Overview

Eblast UI is a component library design system for the Eblast platform. This repository contains reusable UI components, starting with the implementation of the Button component. The goal of the library is to create consistent, maintainable, and easily customizable UI elements that can be used across the Eblast platform.

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

## Folder Structure

Here’s a brief overview of the folder structure in this repository:

```
/eblast-ui
│
├── /src                        # Source code for components and assets
│   ├── /components             # Reusable UI components (Header, Footer, Button, etc.)
│   │   └── Button              # The Button component implementation
|
│   ├── /context                # Reusable UI components (Header, Footer, Button, etc.)
│   │   └── Button              # The Button component implementation
│
│   ├── /styles                 # CSS files for component styling
│   │   └── /colors             # Styles for the colors component
│   │   |   └── colors.css      # Styles for the colors component
│   │   └── /global             # Styles for the global component
│   │   |   └── global.css      # Styles for the Button component
│   │   └── /layout             # Styles for the layout component
│   │   |   └── lauout.css      # Styles for the layout component
│
├── /public                     # Public assets (images, icons, etc.)
│   └── index.html              # HTML entry point
│
└── README.md                   # Main README file
├── package.json                # Project metadata and dependencies
└── .gitignore                  # Git ignore rules
```
