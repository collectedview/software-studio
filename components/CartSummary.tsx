import React, { useState, useEffect } from "react";

import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/api-helpers";

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetchPostJSON(
      "/api/checkout_sessions/cart",
      cartDetails
    );

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  return (
    <form onSubmit={handleCheckout}>
      <p suppressHydrationWarning>
        <h4>Total: {formattedTotalPrice}</h4>
      </p>
      <div className="content-group d-flex mt-auto align-items-center">
        <div className="content-group-item featured">
          <button
            className="btn btn-primary call-to-action"
            type="submit"
            disabled={cartEmpty || loading}
          >
            Checkout
          </button>
        </div>
        <div className="content-group-item">
          <button
            className="btn btn-primary call-to-action"
            type="button"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </form>
  );
};

export default CartSummary;
