# ECommerce Project (Vite + React)

## Overview
This project is an ECommerce application built using Vite and React. The application leverages the Context API for centralized state management and integrates Algolia for search functionality.

## Features
### Context API Integration
- **Centralized Cart Store**: Utilizes the Context API to manage the cart state, ensuring a single source of truth and easier state management across different components.
- **Context Provider**: A `CartContext` provider wraps the application, making the cart state accessible to all components.

### Example Usage
- **BtnComponent**: A button component to add, increase, and decrease the count of items in the cart using the centralized cart store.
- **useContext Hook**: Access and manipulate the cart state within components using the `useContext` hook.

### Functional Components
- **Add to Basket**: Functionality to add items to the basket.
- **Increase and Decrease Count**: Functions to increase and decrease the count of items in the cart.
- **Remove from Basket**: Logic to remove items from the cart when the count is zero.

### Enhanced User Experience
- **Dynamic Updates**: Ensures that the cart updates dynamically across all components whenever changes are made.
- **Improved State Management**: Simplifies state management by leveraging the Context API, reducing the need for prop drilling and improving code maintainability.

### Algolia Integration
- **Search Functionality**: Integrates Algolia for advanced search capabilities, providing users with fast and relevant search results.
