function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          🛍️ Vishanzzcart
        </div>

        <button
          className="cart-button"
          onClick={onCartClick}
        >
          🛒 Cart
          <span className="cart-count">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
