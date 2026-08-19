function Cart({ cart, onRemove, onClose }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="cart-overlay">
      <div className="cart-panel">

        <div className="cart-header">
          <h2>Shopping Cart</h2>

          <button
            className="close-button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>

            <button onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">

              {cart.map((product) => (
                <div
                  className="cart-item"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="cart-item-info">
                    <h4>{product.name}</h4>

                    <p>
                      ${product.price.toFixed(2)}
                    </p>

                    <button
                      className="remove-button"
                      onClick={() =>
                        onRemove(product.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

            </div>

            <div className="cart-total">
              <span>Total:</span>

              <strong>
                ${totalPrice.toFixed(2)}
              </strong>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;
