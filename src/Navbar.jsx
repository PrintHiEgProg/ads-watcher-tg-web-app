import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrophy, FaHome, FaGamepad, FaLeaf, FaMedal } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <div
        className="nav-icon gradient-bg gradient-purple"
        onClick={() => navigate("/liderboard")}
      >
        <FaTrophy className="text-white" />
      </div>
      <div
        className="nav-icon gradient-bg gradient-pink"
        onClick={() => navigate("/")}
      >
        <FaHome className="text-white" />
      </div>
      <div
        className="nav-icon gradient-bg gradient-blue"
        onClick={() => navigate("/game")}
      >
        <FaGamepad className="text-white" />
      </div>
      <div
        className="nav-icon gradient-bg gradient-orange"
        onClick={() => navigate("/")}
      >
        <FaMedal className="text-white" />
      </div>
    </div>
  );
};

export default Navbar;
