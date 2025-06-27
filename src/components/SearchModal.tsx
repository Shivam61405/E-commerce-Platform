import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, products, onProductSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered.slice(0, 8)); // Limit to 8 results
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl w-full max-w-2xl mx-4 shadow-2xl">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-lg border-none outline-none"
              autoFocus
            />
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            <div className="p-4 space-y-2">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onProductSelect(product);
                    onClose();
                  }}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : searchTerm.trim() ? (
            <div className="p-8 text-center text-gray-500">
              No products found for "{searchTerm}"
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              Start typing to search products...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;