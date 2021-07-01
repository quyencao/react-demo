import React, { ReactElement } from "react";
import { Link } from 'react-router-dom';

const NavLink: React.FC = (): ReactElement => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </div>
  );
};

export default NavLink;