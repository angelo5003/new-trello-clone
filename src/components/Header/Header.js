import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Trello Clone</h1>
      </div>
      <div className="add-column">
        <button>Add a Column</button>
      </div>
    </div>
  );
};

export default Header;
