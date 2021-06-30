import React from "react";

import products from "../data/products.json";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const Products = () => {
  const { addItem } = useShoppingCart();

  return (
    <>
      <section id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="content">
                <h2>Deploy your solution today</h2>
                <h4>Quickly iterable react framework in next.js</h4>
                <p className="lead">
                  Ventures ready to strike with the iron hot. Simplified React
                  architecture within Next.js server technology to reach the end
                  of the globe with ideas and concepts.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.sku} className="col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <img src={product.image} alt={product.name} />
                    <h4 className="card-title">Open Source Solution</h4>
                    <h2 className="card-title">{product.name}</h2>
                    <p className="card-text">
                      Download, Fork, Support, and Build in your own time with
                      the framework built for you on NPM.
                    </p>
                    <ul className="list-inline font-14 mt-3">
                      <li className="py-1">
                        <i className="far fa-check-square"></i> Single Page
                        Application
                      </li>
                      <li className="py-1">
                        <i className="far fa-check-square"></i> Loader &
                        Light/Dark Mode
                      </li>
                      <li className="py-1">
                        <i className="far fa-check-square"></i> Page Speed
                        Optimized
                      </li>
                      <li className="py-1">
                        <i className="far fa-check-square"></i> Server Side
                        Rendered
                      </li>
                    </ul>
                    <div className="content-group d-flex mt-auto align-items-center">
                      <span className="price content-group-item">
                        {formatCurrencyString({
                          value: product.price,
                          currency: product.currency,
                        })}
                      </span>
                      <div className="content-group-item ml-auto">
                        <button
                          className="btn btn-primary call-to-action"
                          onClick={() => addItem(product)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
