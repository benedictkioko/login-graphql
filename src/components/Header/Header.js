import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";

function Header() {
  return (
    <nav className="md:flex hidden bg-gradient-to-tr from-gray-900 to-red-500">
      <div className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16"></div>
      </div>
    </nav>
  );
}

export default Header;
