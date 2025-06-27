import React, { useState } from 'react';
import { Heart, Star, Eye } from 'lucide-react';
import { Product } from '../types';
import { useTranslation } from 'react-i18next';

const products: Product[] = [
  // Footwear
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    description: "Minimalist design meets maximum comfort",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 2,
    name: "Leather Chelsea Boots",
    price: 199.99,
    description: "Timeless style with modern comfort",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 3,
    name: "Running Performance Shoes",
    price: 129.99,
    description: "Engineered for speed and endurance",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 4,
    name: "Hiking Boots",
    price: 159.99,
    description: "All-terrain durability and support",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 5,
    name: "Canvas Slip-Ons",
    price: 49.99,
    description: "Casual comfort for everyday wear",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 6,
    name: "Leather Dress Shoes",
    price: 189.99,
    description: "Classic elegance for formal occasions",
    image: "https://images.unsplash.com/photo-1614253429340-98120bd6d753?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 7,
    name: "Sport Sandals",
    price: 79.99,
    description: "Adventure-ready comfort",
    image: "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },

  // Clothing
  {
    id: 8,
    name: "Premium Denim Jacket",
    price: 129.99,
    description: "Timeless style for any season",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 9,
    name: "Wool Overcoat",
    price: 299.99,
    description: "Luxurious warmth and style",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 10,
    name: "Cotton T-Shirt",
    price: 24.99,
    description: "Essential comfort basics",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 11,
    name: "Slim Fit Chinos",
    price: 79.99,
    description: "Versatile everyday pants",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 12,
    name: "Cashmere Sweater",
    price: 199.99,
    description: "Luxury comfort for cold days",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 13,
    name: "Leather Biker Jacket",
    price: 349.99,
    description: "Classic rebel style",
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 14,
    name: "Linen Shirt",
    price: 89.99,
    description: "Breathable summer essential",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 15,
    name: "Tailored Blazer",
    price: 249.99,
    description: "Professional sophistication",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 16,
    name: "Workout Leggings",
    price: 59.99,
    description: "Performance stretch fabric",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 17,
    name: "Hooded Sweatshirt",
    price: 69.99,
    description: "Cozy casual comfort",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },

  // Electronics
  {
    id: 18,
    name: "Wireless Headphones",
    price: 159.99,
    description: "Immersive sound, all-day comfort",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 19,
    name: "Smart Watch",
    price: 299.99,
    description: "Track your fitness and stay connected",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 20,
    name: "Vintage Camera",
    price: 449.99,
    description: "Capture moments with classic style",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 21,
    name: "Wireless Earbuds",
    price: 129.99,
    description: "True wireless freedom",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 22,
    name: "4K Action Camera",
    price: 299.99,
    description: "Adventure-ready recording",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 23,
    name: "Smart Speaker",
    price: 199.99,
    description: "Voice-controlled home assistant",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 24,
    name: "Gaming Controller",
    price: 69.99,
    description: "Precision gaming control",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 25,
    name: "Portable Power Bank",
    price: 49.99,
    description: "Fast-charging backup power",
    image: "https://images.unsplash.com/photo-1609592807825-98279e87e5af?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },

  // Accessories
  {
    id: 26,
    name: "Leather Weekender Bag",
    price: 199.99,
    description: "Perfect for short trips and daily commutes",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 27,
    name: "Designer Sunglasses",
    price: 129.99,
    description: "UV protection with style",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 28,
    name: "Leather Wallet",
    price: 79.99,
    description: "Slim profile, maximum functionality",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 29,
    name: "Minimalist Watch",
    price: 149.99,
    description: "Timeless elegance",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 30,
    name: "Canvas Backpack",
    price: 89.99,
    description: "Durable everyday carry",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 31,
    name: "Silk Neck Tie",
    price: 59.99,
    description: "Classic patterns and premium silk",
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 32,
    name: "Leather Belt",
    price: 49.99,
    description: "Full-grain leather craftsmanship",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a45?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 33,
    name: "Winter Scarf",
    price: 39.99,
    description: "Soft wool blend warmth",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 34,
    name: "Leather Gloves",
    price: 69.99,
    description: "Touchscreen-compatible luxury",
    image: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 35,
    name: "Weekend Duffle",
    price: 159.99,
    description: "Spacious travel companion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a89?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },

  // More Clothing
  {
    id: 36,
    name: "Wool Peacoat",
    price: 279.99,
    description: "Classic winter style",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 37,
    name: "Silk Dress Shirt",
    price: 119.99,
    description: "Luxurious formal wear",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },
  {
    id: 38,
    name: "Performance Polo",
    price: 49.99,
    description: "Moisture-wicking comfort",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600",
    category: "clothing"
  },

  // More Electronics
  {
    id: 39,
    name: "Bluetooth Speaker",
    price: 89.99,
    description: "Portable audio solution",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 40,
    name: "Fitness Tracker",
    price: 79.99,
    description: "24/7 activity monitoring",
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },
  {
    id: 41,
    name: "Wireless Mouse",
    price: 39.99,
    description: "Ergonomic precision control",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=600",
    category: "electronics"
  },

  // More Footwear
  {
    id: 42,
    name: "Leather Loafers",
    price: 149.99,
    description: "Sophisticated casual comfort",
    image: "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 43,
    name: "Athletic Training Shoes",
    price: 119.99,
    description: "Versatile workout performance",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },
  {
    id: 44,
    name: "Casual Sneakers",
    price: 69.99,
    description: "Everyday style and comfort",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600",
    category: "footwear"
  },

  // More Accessories
  {
    id: 45,
    name: "Leather Messenger Bag",
    price: 169.99,
    description: "Professional daily carry",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a78?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 46,
    name: "Classic Watch",
    price: 199.99,
    description: "Timeless analog design",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 47,
    name: "Travel Organizer",
    price: 29.99,
    description: "Keep essentials organized",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a91?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 48,
    name: "Laptop Sleeve",
    price: 39.99,
    description: "Protective tech carry",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a67?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 49,
    name: "Card Holder",
    price: 34.99,
    description: "Slim card organization",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  },
  {
    id: 50,
    name: "Passport Wallet",
    price: 44.99,
    description: "Travel document protection",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a84?auto=format&fit=crop&q=80&w=600",
    category: "accessories"
  }
];

interface ProductListProps {
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  onProductClick: (product: Product) => void;
  wishlist: number[];
}

const ProductList: React.FC<ProductListProps> = ({ 
  onAddToCart, 
  onAddToWishlist, 
  onProductClick,
  wishlist 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('product.categories.all') },
    { id: 'clothing', label: t('product.categories.clothing') },
    { id: 'accessories', label: t('product.categories.accessories') },
    { id: 'electronics', label: t('product.categories.electronics') },
    { id: 'footwear', label: t('product.categories.footwear') }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' }
  ];

  let filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Filter by price range
  filteredProducts = filteredProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Sort products
  filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 mb-12 rounded-2xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">StyleHub Collection</h1>
          <p className="text-xl md:text-2xl opacity-90">Discover Your Perfect Style</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-6">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Sort and Price Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Price Range:</label>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-32"
            />
            <span className="text-sm text-gray-600">${priceRange[0]} - ${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={() => onProductClick(product)}
                  className="bg-white text-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center space-x-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>Quick View</span>
                </button>
              </div>
              <button 
                onClick={() => onAddToWishlist(product)}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-200 ${
                  wishlist.includes(product.id)
                    ? 'bg-red-500 text-white scale-110'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-110'
                }`}
              >
                <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">(4.0)</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
                >
                  {t('product.addToCart')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  );
};

export { products };
export default ProductList;