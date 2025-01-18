import React from 'react';

export default function Last() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 pl-20 pr-5 py-24 mx-auto flex flex-col items-center md:flex-row md:items-start">
          <div className="flex-grow flex flex-wrap justify-center md:justify-start md:pr-20 -mb-10 text-center md:text-left">
            {/* Icons Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Icons
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Air Force 1</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Huarache</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Air Max 90</a>
                </li>
              </nav>
            </div>

            {/* Shoes Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Shoes
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">All Shoes</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Custom Shoes</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Running Shoes</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Jordan Shoes</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Air Max 95</a>
                </li>
              </nav>
            </div>

            {/* Clothing Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Clothing
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">All Clothing</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Modest Wear</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Hoodies & Pullovers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Shirts & Tops</a>
                </li>
              </nav>
            </div>

            {/* Kids' Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Kids'
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Infant & Toddler Shoes</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Kids' Shoes</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Kids' Jordan Shoes</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Kids' Basketball Shoes</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
