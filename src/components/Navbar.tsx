
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
}

const Navbar = ({ cartItemCount }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">ShopEasy</div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            <Link 
              to="/cart" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative"
            >
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
