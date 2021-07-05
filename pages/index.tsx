import React from "react";
import { NextPage } from "next";

import Layout from "../components/Layout";
import Cart from "../components/Cart";

import Header from "../components/studio/header";
import Navbar from "../components/studio/navbar";
import Introduction from "../components/studio/introduction";
import Interest from "../components/studio/interest";
import Technology from "../components/studio/technology";
import Features from "../components/studio/features";
import InlineCallToAction from "../components/studio/inline-call-to-action";
import CallToAction from "../components/studio/call-to-action";
import Review from "../components/studio/review";
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
            <InlineCallToAction />
            <CallToAction />
            <Review />
          </main>
          <Footer />
        </Cart>
      </Layout>
    </>
  );
};

export default IndexPage;
