import React from 'react';
import { ShoppingCart, Heart, Search, Menu, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  cartItemCount: number;
  wishlistCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onAuthClick: () => void;
  onSearchClick: () => void;
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  cartItemCount, 
  wishlistCount, 
  onCartClick, 
  onWishlistClick,
  onAuthClick,
  onSearchClick,
  isAuthenticated 
}) => {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">StyleHub</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.home')}</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.shop')}</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.categories')}</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.about')}</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={onSearchClick}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="h-6 w-6" />
            </button>
            <div className="relative">
              <button 
                onClick={onWishlistClick}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Heart className="h-6 w-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </div>
            <div className="relative">
              <button 
                onClick={onCartClick}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
            <button 
              onClick={onAuthClick}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;