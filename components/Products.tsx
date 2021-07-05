import React from "react";

import products from "../data/products.json";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

import CartSummary from "../components/CartSummary";

const Products = () => {
  const { addItem } = useShoppingCart();

  return (
    <>
      <section id="products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="content">
                <h2>Pre-Bundled Technologies</h2>
                <h4>Purchase &amp; Deploy Pre-built Technologies</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.sku} className="col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{product.category}</h4>
                    <h2 className="card-title">{product.name}</h2>
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
              <div className="content-secondary">
                <CartSummary />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
