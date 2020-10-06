import React from "react";
import icon from '../assets/user.svg'

const NavBar = () => (
  <nav className="panel-bg ">
    <ul>
      <li>
        <a href="#" className="azure Bookstore-CMS">
          Bookstore CMS
        </a>
      </li>
      <li>
        <a href="#" className="BOOKS ">
          BOOKS
        </a>
      </li>
      <li>
        <a href="#" className=" CATEGORIES">
          CATEGORIES
        </a>
      </li>
      <li>
        <img src={icon} className="azure Mask"></img>
      </li>
    </ul>
  </nav>
);

export default NavBar;
