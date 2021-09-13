import React from "react";

let YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright {YEAR}</p>
    </footer>
  );
}

export default Footer;
