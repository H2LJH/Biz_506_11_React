import React from 'react';
import { Link } from "react-router-dom";
import "../css/BBsNav.css";

const BBsNav = () => {
    return (
      <nav className="main_nav">
        <ul>
          <li>
            <Link to="/" className="nav_link">자유게시판</Link>
          </li>

          <li>
            <Link to="/notice" className="nav_link">공지사항</Link>
         </li>
        </ul>
      </nav>
    );
};

export default BBsNav;