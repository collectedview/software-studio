import React from "react";

import products from "../data/products.json";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

import CartSummaryFull from "../components/CartSummaryFull";

const Products = () => {
  const { addItem } = useShoppingCart();

  return (
    <>
      <section id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="content">
                <h2>Pre-Bundled Technologies</h2>
                <p className="lead">
                  Purchase &amp; deploy these pre-built technologies for your
                  brand, experience, and bring life to your product.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.sku} className="col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt={product.name}
                    />
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.description}</p>
                    <div className="content-group d-flex mt-auto align-items-center">
                      <span className="price content-group-item">
                        {formatCurrencyString({
                          value: product.price,
                          currency: product.currency,
                        })}
                      </span>
                    </div>
                    <button
                      className="btn btn-primary call-to-action"
                      onClick={() => addItem(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="content">
                <CartSummaryFull />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
