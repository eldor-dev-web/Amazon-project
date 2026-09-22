# Amazon E-Commerce Full-Scale Clone

A comprehensive, production-grade e-commerce web application inspired by Amazon, built with modern JavaScript (ES6+), HTML5, and CSS3. This project features a robust modular architecture, dynamic state management, automated unit testing, and a fully functional backend structure.

---

## 🚀 Key Features & Architecture

* **Dynamic Product Catalog:** Renders products dynamically from structured data models with interactive purchase and rating components.
* **Advanced Shopping Cart:** Real-time cart calculations, item quantity updates, dynamic shipping/delivery option selection, and secure checkout simulation.
* **Order Tracking & Management:** Complete order lifecycle simulation including unique order IDs, timestamp tracking, detailed summaries, and "Buy it again" functionality.
* **Modular Codebase:** Clean separation of concerns with dedicated folders for scripts, utilities, components, and data management.
* **Automated Unit Testing:** Includes robust test suites (`tests/`) using testing frameworks to ensure calculation and checkout logic reliability.

---

## 📁 Project Structure

```text
Amazon-Project/
├── backend/          # Server-side logic and configurations
├── data/             # Static datasets for products, cart, and orders
├── images/           # Asset repository (product images, icons, logos)
├── scripts/          # Core application logic (checkout, tracking, amazon frontend)
│   ├── checkout/     # Checkout process management
│   └── utils/        # Utility functions (money formatting, date calculations)
├── styles/           # Global and page-specific CSS stylesheets
├── tests/            # Automated unit tests for business logic
├── amazon.html       # Main storefront page
├── checkout.html     # Cart and checkout management page
├── orders.html       # User orders history and details page
└── tracking.html     # Package tracking interface