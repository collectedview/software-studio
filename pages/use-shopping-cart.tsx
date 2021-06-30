import { NextPage } from "next";
import Layout from "../components/Layout";

import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";

const DonatePage: NextPage = () => {
  return (
    <Layout>
      <Cart>
        <CartSummary />
      </Cart>
    </Layout>
  );
};

export default DonatePage;
