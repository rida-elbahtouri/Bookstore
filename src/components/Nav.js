import React from 'react';
import icon from '../assets/user.svg';

const NavBar = () => (
  <nav className="">
    <div className="panel-bg">
      <ul>
        <li>
          <span className="azure Bookstore-CMS">Bookstore CMS</span>
        </li>
        <li>
          <span className="BOOKS ">BOOKS</span>
        </li>
        <li>
          <span className=" CATEGORIES">CATEGORIES</span>
        </li>
        <li>
          <img alt="icon" src={icon} className="azure Mask" />
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
