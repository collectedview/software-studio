import { NextPage } from "next";

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
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
