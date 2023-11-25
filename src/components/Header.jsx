import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import '../App.css'
function Header() {
  return (
    <header>
      <h1><HighlightIcon style={{ fontSize: '3rem', marginBottom:"-10px" }} className="head"/>Keeper</h1>
    </header>
  );
}

export default Header;
