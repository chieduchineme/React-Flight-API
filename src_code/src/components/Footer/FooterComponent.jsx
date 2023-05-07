import React from "react";

function FooterComponent() {
  return (
    <div className="footer text-left py-3 " style={{backgroundColor : 'black', position: 'static'}}>
      © 2013 - 2023 The OpenSky Network |{" "}
      <a href="https://opensky-network.org/index.php/about/terms-of-use">
        Terms of Use
      </a>{" "}
      |{" "}
      <a href="https://opensky-network.org/index.php/about/privacy-policy">
        Privacy Policy
      </a>{" "}
      | <a href="https://opensky-network.org/index.php/about/faq"> FAQ</a> |
      <a href="https://opensky-network.org/index.php/about/contact">Contact</a>{" "}
    </div>
  );
}

export default FooterComponent;
