import React, { useState, useEffect } from 'react';
import { Product } from './types';
import ProductList, { products } from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import AuthModal from './components/Auth/AuthModal';
import SearchModal from './components/SearchModal';
import WishlistModal from './components/WishlistModal';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import NotificationToast from './components/NotificationToast';
import Footer from './components/Footer';
import './i18n';

interface CartItem extends Product {
  quantity: number;
}

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [notification, setNotification] = useState<Notification>({
    message: '',
    type: 'success',
    isVisible: false
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedAuth = localStorage.getItem('isAuthenticated');

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
    if (savedAuth) {
      setIsAuthenticated(JSON.parse(savedAuth));
    }
  }, []);

  // Save to localStorage when data changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ message, type, isVisible: true });
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    if (!isAuthenticated) {
      setIsAuthOpen(true);
      return;
    }

    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
      showNotification(`Updated ${product.name} quantity in cart`, 'success');
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
      showNotification(`${product.name} added to cart`, 'success');
    }
  };

  const removeFromCart = (productId: number) => {
    const product = cartItems.find(item => item.id === productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
    if (product) {
      showNotification(`${product.name} removed from cart`, 'info');
    }
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const toggleWishlist = (product: Product) => {
    if (!isAuthenticated) {
      setIsAuthOpen(true);
      return;
    }

    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter(id => id !== product.id));
      showNotification(`${product.name} removed from wishlist`, 'info');
    } else {
      setWishlist([...wishlist, product.id]);
      showNotification(`${product.name} added to wishlist`, 'success');
    }
  };

  const removeFromWishlist = (productId: number) => {
    const product = products.find(p => p.id === productId);
    setWishlist(wishlist.filter(id => id !== productId));
    if (product) {
      showNotification(`${product.name} removed from wishlist`, 'info');
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleProductSelect = (product: Product) => {
    handleProductClick(product);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setIsAuthOpen(true);
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    showNotification('Order placed successfully! Thank you for your purchase.', 'success');
  };

  const getWishlistItems = () => {
    return products.filter(product => wishlist.includes(product.id));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        cartItemCount={cartItemCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onAuthClick={() => setIsAuthOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        isAuthenticated={isAuthenticated}
      />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <ProductList 
          onAddToCart={addToCart}
          onAddToWishlist={toggleWishlist}
          onProductClick={handleProductClick}
          wishlist={wishlist}
        />
      </main>

      <Footer />

      {/* Modals */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateCartQuantity}
        onCheckout={handleCheckout}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthenticated={() => setIsAuthenticated(true)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onProductSelect={handleProductSelect}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={getWishlistItems()}
        onRemoveFromWishlist={removeFromWishlist}
        onAddToCart={addToCart}
      />

      <ProductModal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        product={selectedProduct}
        onAddToCart={addToCart}
        onAddToWishlist={toggleWishlist}
        isInWishlist={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        total={cartTotal}
        onOrderComplete={handleOrderComplete}
      />

      <NotificationToast
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />
    </div>
  );
}

export default App;