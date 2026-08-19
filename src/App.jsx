import { useEffect, useState } from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import productsData from "./data/products";

function App() {
  // Store all products
  const [products] = useState(productsData);

  // Search, filter and sorting states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  // Shopping cart state
  const [cart, setCart] = useState([]);

  // Controls whether the cart is visible
  const [showCart, setShowCart] = useState(false);

  // Categories are created automatically from product data
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // Store filtered and sorted products
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Search, filter and sort products whenever the controls change
  useEffect(() => {
    let result = [...products];

    // Search by product name
    if (searchTerm.trim() !== "") {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    if (sortOrder === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortOrder === "name-az") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sortOrder === "name-za") {
      result.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    setFilteredProducts(result);
  }, [
    products,
    searchTerm,
    selectedCategory,
    sortOrder,
  ]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart((currentCart) => [
      ...currentCart,
      product,
    ]);
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (product) => product.id !== productId
      )
    );
  };

  // Reset search, category and sorting
  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOrder("default");
  };

  return (
    <div className="app">

      <Navbar
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)}
      />

      <main className="main-content">

        <section className="hero-section">
          <h1>Discover Amazing Products</h1>

          <p>
            Find the perfect products for your everyday needs.
          </p>
        </section>

        <section className="controls-section">

          <SearchBar
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
          />

          <FilterSort
            category={selectedCategory}
            sortOrder={sortOrder}
            categories={categories}
            onCategoryChange={setSelectedCategory}
            onSortChange={setSortOrder}
            onReset={handleReset}
          />

        </section>

        <div className="results-info">
          <p>
            Showing{" "}
            <strong>{filteredProducts.length}</strong>{" "}
            products
          </p>
        </div>

        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />

      </main>

      {showCart && (
        <Cart
          cart={cart}
          onRemove={handleRemoveFromCart}
          onClose={() => setShowCart(false)}
        />
      )}

    </div>
  );
}

export default App;

