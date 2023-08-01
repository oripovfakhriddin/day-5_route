import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="main__header">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  )
}