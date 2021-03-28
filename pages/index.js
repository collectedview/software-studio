import React from "react";

import Header from "@components/header";
import Navbar from "@components/navbar";
import Introduction from "@components/introduction";
import Interest from "@components/interest";
import Technology from "@components/technology";
import Features from "@components/features";
import CallToAction from "@components/call-to-action";
import Footer from "@components/footer";

export default function Home() {
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
      </main>
      <Footer />
    </>
  );
}
