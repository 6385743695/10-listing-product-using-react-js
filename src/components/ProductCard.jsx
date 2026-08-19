function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <span className="category-badge">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="description">
          {product.description}
        </p>

        <div className="product-bottom">
          <span className="price">
            ${product.price.toFixed(2)}
          </span>

          <button
            className="add-button"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
