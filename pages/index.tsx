import { NextPage } from "next";

import Layout from "../components/Layout";
import Cart from "../components/Cart";

import Header from "../components/studio/header";
import Navbar from "../components/studio/navbar";
import Introduction from "../components/studio/introduction";
import Interest from "../components/studio/interest";
import Technology from "../components/studio/technology";
import Features from "../components/studio/features";
import CallToAction from "../components/studio/call-to-action";
import Review from "../components/studio/review";
import Products from "../components/products";
import Footer from "../components/studio/footer";

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Cart>
          <Header />
          <Navbar />
          <main>
            <Introduction />
            <Interest />
            <Technology />
            <Features />
            <CallToAction />
            <Review />
            <Products />
          </main>
          <Footer />
        </Cart>
      </Layout>
    </>
  );
};

export default IndexPage;
