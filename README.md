# StyleHub - Modern E-commerce Platform

StyleHub is a comprehensive, modern e-commerce platform built with React and TypeScript, offering a seamless shopping experience with advanced features and beautiful design.

## 🚀 Features

### 🛍️ Core Shopping Features
- **Product Catalog**: Browse 50+ products across multiple categories
- **Advanced Search**: Real-time product search with intelligent filtering
- **Category Filtering**: Filter by clothing, accessories, electronics, and footwear
- **Price Range Filter**: Adjustable price range slider
- **Product Sorting**: Sort by name, price (low to high/high to low), and newest
- **Product Quick View**: Detailed product modal with ratings and specifications
- **Shopping Cart**: Full cart management with quantity controls
- **Wishlist**: Save favorite products for later
- **Checkout Process**: Multi-step checkout with shipping and payment forms

### 👤 User Experience
- **User Authentication**: Complete login/signup system with password recovery
- **Persistent Data**: Cart and wishlist data saved in localStorage
- **Responsive Design**: Optimized for all device sizes
- **Interactive Notifications**: Toast notifications for user actions
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Loading States**: Professional loading indicators

### 🌐 Internationalization
- **Multi-language Support**: English, Spanish, and French
- **Language Switcher**: Easy language selection in navigation
- **Localized Content**: All text content properly translated

### 🎨 Design & UI
- **Modern Design**: Clean, professional interface with premium aesthetics
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Lucide Icons**: Beautiful, consistent iconography
- **Custom Animations**: Smooth transitions and hover effects
- **Color System**: Comprehensive color palette with proper contrast
- **Typography**: Well-structured text hierarchy

### 📱 Technical Features
- **React 18**: Latest React with hooks and modern patterns
- **TypeScript**: Full type safety throughout the application
- **Vite**: Fast development and build tooling
- **Component Architecture**: Modular, reusable components
- **State Management**: Efficient local state management
- **Performance Optimized**: Lazy loading and optimized renders

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Auth/            # Authentication components
│   │   └── AuthModal.tsx
│   ├── Cart.tsx         # Shopping cart component
│   ├── CheckoutModal.tsx # Checkout process
│   ├── Footer.tsx       # Site footer
│   ├── LanguageSelector.tsx # Language switcher
│   ├── Navbar.tsx       # Navigation bar
│   ├── NotificationToast.tsx # Toast notifications
│   ├── ProductList.tsx  # Product catalog
│   ├── ProductModal.tsx # Product details modal
│   ├── SearchModal.tsx  # Search functionality
│   └── WishlistModal.tsx # Wishlist management
├── i18n/                # Internationalization
│   ├── locales/         # Translation files
│   │   ├── en.json      # English translations
│   │   ├── es.json      # Spanish translations
│   │   └── fr.json      # French translations
│   └── index.ts         # i18n configuration
├── types.ts             # TypeScript type definitions
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and utilities
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: i18next with react-i18next
- **Build Tool**: Vite
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stylehub.git
   cd stylehub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages & Components

### Main Pages
- **Home/Shop**: Product catalog with filtering and sorting
- **Product Details**: Detailed product view with specifications
- **Cart**: Shopping cart management
- **Wishlist**: Saved products
- **Checkout**: Multi-step purchase process

### Modal Components
- **Authentication Modal**: Login/signup/password recovery
- **Search Modal**: Product search interface
- **Product Modal**: Quick product view
- **Checkout Modal**: Purchase flow
- **Wishlist Modal**: Wishlist management

### Navigation Components
- **Navbar**: Main navigation with cart/wishlist counters
- **Language Selector**: Multi-language support
- **Footer**: Site information and links

## 🎯 Key Features Breakdown

### Product Management
- 50+ products across 4 categories
- High-quality product images from Unsplash
- Detailed product information
- Star ratings and reviews
- Size selection for clothing items
- Quantity selection

### Shopping Cart
- Add/remove products
- Quantity adjustment
- Price calculations
- Persistent storage
- Empty state handling

### User Authentication
- Email/password authentication
- Form validation
- Password recovery
- Remember me functionality
- Authentication state persistence

### Search & Filtering
- Real-time search
- Category filtering
- Price range filtering
- Multiple sorting options
- No results state

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Accessible navigation

## 🌟 Advanced Features

### Notifications System
- Success notifications for actions
- Error handling with user feedback
- Auto-dismissing toasts
- Multiple notification types

### Data Persistence
- localStorage integration
- Cart state preservation
- Wishlist persistence
- Authentication state

### Performance Optimizations
- Efficient re-renders
- Optimized images
- Smooth animations
- Fast loading times

## 🎨 Design Philosophy

StyleHub follows modern design principles:
- **Minimalism**: Clean, uncluttered interface
- **Consistency**: Uniform spacing, colors, and typography
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **User-Centric**: Intuitive user flows and clear feedback
- **Mobile-First**: Responsive design for all devices

## 🔧 Customization

### Adding New Products
Products are defined in `src/components/ProductList.tsx`. Add new products to the `products` array with the following structure:

```typescript
{
  id: number,
  name: string,
  price: number,
  description: string,
  image: string,
  category: 'clothing' | 'accessories' | 'electronics' | 'footwear'
}
```

### Adding New Languages
1. Create a new translation file in `src/i18n/locales/`
2. Add the language to the `languages` array in `LanguageSelector.tsx`
3. Import and register the translations in `src/i18n/index.ts`

### Styling Customization
The project uses Tailwind CSS. Customize the design by:
- Modifying `tailwind.config.js` for theme customization
- Adding custom CSS classes in `src/index.css`
- Using Tailwind utility classes in components

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@stylehub.com
- Documentation: Check the README and code comments

## 🎉 Acknowledgments

- **Unsplash**: High-quality product images
- **Lucide**: Beautiful icon library
- **Tailwind CSS**: Utility-first CSS framework
- **React Community**: Excellent documentation and resources

---

Built with ❤️ using React, TypeScript, and modern web technologies.