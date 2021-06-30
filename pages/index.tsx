import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

import Header from "../components/studio/header";
import Navbar from "../components/studio/navbar";
import Introduction from "../components/studio/introduction";
import Interest from "../components/studio/interest";
import Technology from "../components/studio/technology";
import Features from "../components/studio/features";
import CallToAction from "../components/studio/call-to-action";
import Review from "../components/studio/review";
import Footer from "../components/studio/footer";

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Introduction />
        <Interest />
        <Technology />
        <Features />
        <CallToAction />
        <Review />
        <Layout>
          <ul className="card-list">
            <li>
              <Link href="/donate-with-checkout">
                <a className="card checkout-style-background">
                  <h2 className="bottom">Donate with Checkout</h2>
                  <img src="/checkout-one-time-payments.svg" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/donate-with-elements">
                <a className="card elements-style-background">
                  <h2 className="bottom">Donate with Elements</h2>
                  <img src="/elements-card-payment.svg" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/use-shopping-cart">
                <a className="card cart-style-background">
                  <h2 className="bottom">Use Shopping Cart</h2>
                  <img src="/use-shopping-cart.png" />
                </a>
              </Link>
            </li>
          </ul>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
