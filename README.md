# 📘 README – Gatsby Fake Products Store

## Author

**Carlos Edgardo López Barrera**



## Project Overview

This project is a fake e-commerce store built with Gatsby.js.
It fetches products from the [Fake Store API](https://fakestoreapi.com/) at build time and generates:

* A main product listing page (grid layout with images, prices, categories, and descriptions).
* Individual product detail pages, dynamically created with `createPages`.
* Responsive UI styled with Tailwind CSS.
* Utility functions for price formatting and reusable components like `Layout`.


## Features

* **Product List** – Displays all products from the Fake Store API in a grid.
* **Product Detail Page** – Each product has its own page (`/products/:id`) with full details.
* **Dynamic Routing** – Gatsby `createPages` is used to generate product pages at build time.
* **API Integration** – Products are fetched from [Fake Store API](https://fakestoreapi.com/).
* **Responsive UI** – Built with Tailwind CSS, optimized for mobile and desktop.

## Images and Product Data

All product data (titles, descriptions, prices, categories, and images) comes directly from the [Fake Store API](https://fakestoreapi.com/).
The API provides product images via a public URL, which are displayed directly in the app without additional configuration.

Example response from the API:

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}
```

---

## How It Works

1. **Data Sourcing**

   * In `gatsby-node.js`, the `sourceNodes` API fetches products from the Fake Store API.
   * Each product is transformed into a Gatsby node of type `FakeProduct`.

2. **Dynamic Page Creation**

   * The `createPages` API generates a product page for each item.
   * Pages are created under `/products/:id`.

3. **GraphQL Queries**

   * Gatsby exposes `allFakeProduct` for the list page.
   * Each product detail page uses `fakeProduct(id_original: { eq: $id })` to query a single product.

4. **UI Rendering**

   * The product list is rendered on the homepage (`src/pages/index.js`).
   * Product detail pages are rendered with a template (`src/templates/product.js`).
   * Tailwind CSS provides styling, responsive grid, and hover effects.

---

## Technologies Used

* [**Gatsby.js**](https://www.gatsbyjs.com/) – React-based static site generator.
* [**React**](https://reactjs.org/) – Component-based UI library.
* [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first CSS framework.
* [**Fake Store API**](https://fakestoreapi.com/) – Free fake API for testing and prototyping e-commerce apps.
* [**Node Fetch**](https://www.npmjs.com/package/node-fetch) – To fetch API data at build time.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Carloslpez219/gatsby-products.git
cd gatsby-products
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run develop
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Serve the Production Build

```bash
npm run serve
```

---

## Project Structure

```
gatsby-products/
 ├── gatsby-config.js        # Gatsby configuration
 ├── gatsby-node.js          # Fetch products & create dynamic pages
 ├── src/
 │   ├── components/
 │   │   └── Layout.js       # Reusable layout wrapper
 │   ├── pages/
 │   │   └── index.js        # Main product listing
 │   ├── templates/
 │   │   └── product.js      # Product detail page template
 │   ├── utils/
 │   │   └── format.js       # Currency formatting
 ├── tailwind.config.js      # Tailwind setup
 ├── postcss.config.js       # PostCSS setup
 ├── package.json
```

---