# ECommerce Training Project (Vite + React)

## DAY-7
![screencapture-localhost-5173-checkout-2024-07-12-18_22_33](https://github.com/user-attachments/assets/c0f67289-002b-4803-a137-85b172a0444e)

On Day 7 of the ECommerce Training Project, we focused on improving state management across the application by implementing the Context API for a centralized cart store.

### Context API Integration
- Centralized Cart Store: We introduced a centralized store for managing the cart using the Context API. This ensures a single source of truth for the cart state, making it easier to manage and update across different components.
- Context Provider: Created a CartContext provider to wrap the application and provide cart state to all components within the app.
### Example Usage
- BtnComponent: Implemented the BtnComponent to add, increase, and decrease the count of items in the cart using the centralized cart store.
- useContext Hook: Utilized the useContext hook to access and manipulate the cart state within components.
### Functional Components
- Add to Basket: Added functionality to add items to the basket.
- Increase and Decrease Count: Implemented functions to increase and decrease the count of items in the cart.
- Remove from Basket: Included logic to remove items from the cart when the count is zero.
### Enhanced User Experience
- Dynamic Updates: Ensured that the cart updates dynamically across all components whenever changes are made.
- Improved State Management: Simplified state management by leveraging the Context API, reducing the need for prop drilling and improving code maintainability.

These enhancements aim to provide a more consistent and maintainable state management solution, improving the overall scalability and usability of the application.
