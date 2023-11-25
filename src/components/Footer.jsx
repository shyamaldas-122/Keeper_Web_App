import React from "react";
import '../App.css'
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Shyamal Das. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
