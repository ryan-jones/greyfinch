import React from "react";
import Header from "./Header/Header.view.js";
import Footer from "./Footer/Footer.view.js";
import Layout from "./Layout.view.js";
const BaseLayout = ({ children }) => (
  <Layout>
    <Header />
    {children}
    <Footer />
  </Layout>
);

export default BaseLayout;
