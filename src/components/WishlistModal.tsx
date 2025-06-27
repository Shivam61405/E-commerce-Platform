import React from 'react';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveFromWishlist: (productId: number) => void;
  onAddToCart: (product: Product) => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold flex items-center">
            <Heart className="h-6 w-6 mr-2 text-red-500" />
            Wishlist
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          {wishlistItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p>Your wishlist is empty</p>
              <p className="text-sm mt-2">Add items you love to see them here</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="text-lg font-semibold mt-1">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="flex-1 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => onRemoveFromWishlist(item.id)}
                      className="px-4 py-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;