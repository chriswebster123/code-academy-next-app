import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-16 px-8 bg-green-600 text-white w-full  sticky top-0 flex items-center justify-center">
      {/* mr is margin right, 2 is the space */}
      <span className="mr-2">SIDETRADE PRODUCTS </span>
      <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-blue-600">
        {/* can use icons from google, heroicons etc */}
        <span className="material-icons">shopping_cart</span>
      </div>
    </header>
  );
};

export default Header;
