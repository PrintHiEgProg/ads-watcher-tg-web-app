import React from "react";

const Header = () => {
  return (
    <div className="header-card">
      <div className="level-badge">LVL 1</div>

      <div className="profile">
        <span className="name">egprog</span>
        <img
          src="https://storage.googleapis.com/a1aa/image/5d2b8e69-db2d-42d9-eebb-bd9591de93fd.jpg"
          alt="Profile"
          className="profile-pic"
        />
      </div>

      <div className="fish-balance">12 $FISH</div>
      <div className="usdt-balance">0.000000001</div>
    </div>
  );
};

export default Header;
