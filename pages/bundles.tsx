import { NextPage } from "next";

import Layout from "../components/Layout";
import Cart from "../components/Cart";
import Header from "../components/studio/header";
import Navbar from "../components/studio/navbar";
import Products from "../components/Products";
import Footer from "../components/studio/footer";

const BundlesPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Cart>
          <Header />
          <Navbar />
          <main>
            <Products />
          </main>
          <Footer />
        </Cart>
      </Layout>
    </>
  );
};

export default BundlesPage;
