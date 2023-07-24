# DevTees E-commerce

DevTees is an e-commerce website that specializes in selling T-shirts for software developers. The T-shirts feature fun quotes, IT humor, and programming jokes.

This project is built with React.js and uses the Context API for state management. It also incorporates React Router for navigation.

## Project Structure

- `App.js`: The main application component. It wraps the app in the `BrowserRouter` and `CartProvider`.
- `Cart.js`: A component that displays all the products in the user's cart. It allows the user to increment, decrement, or remove items.
- `CartContext.js`: This file exports `CartContext` and `CartProvider`. It provides context for the user's shopping cart throughout the application.
- `HomePage.js`: The home page of the website. It contains a brief description of the site and the products.
- `AboutPage.js`: This page provides information about the store and its mission.
- `ProductList.js`: This component fetches the product data and displays the list of all products.
- `NavBar.js`: A navigation bar component for easy site navigation.

## Features

- Browse all products.
- Add items to the cart, increment/decrement quantity of items, and remove items from the cart.
- View individual product details.
- Checkout function that displays a thank you message and clears the cart.
- A beautiful and responsive UI for a great user experience.

## Installation and Setup

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.

Visit http://localhost:3000 to view the application.

## Future Updates

- User authentication system.
- More product categories.
- Customer reviews and ratings for products.
- Improved checkout process with payment integration.

## License

This project is licensed under the MIT License.
