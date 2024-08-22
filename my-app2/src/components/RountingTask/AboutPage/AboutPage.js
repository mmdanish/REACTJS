import React from "react";
import "./AboutPage.css";
function AboutPage() {
  return (
    <div className="about-page">
      <h1>Commerce.js Demo Store</h1>
      <p className="para">
        This is an open source storefront built using Chec's headless
        architecture and the Commerce.js SDK. Commerce.js is a smarter, more
        efficient way to build eCommerce projects, and we hope you can see that
        as you explore this custom eCommerce project. Please build on top of,
        or pick apart, this project for your own use. Everything in this
        project, from the storefront, to the cart, checkout, and receipt, is
        100% customizable. To build more custom eCommerce projects, using a
        frontend framework or platform, head over to commerce.js.com.
      </p>
      <footer>
        <button className="documentation-button">Documentation</button>
        <button className="guides-button">Guides from the community</button>
      </footer>
    </div>
  );
}

export default AboutPage;
