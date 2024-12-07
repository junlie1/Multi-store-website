import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function DefaultComponent({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultComponent;
