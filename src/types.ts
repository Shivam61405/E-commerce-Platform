export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'clothing' | 'accessories' | 'electronics' | 'footwear';
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface WishlistItem {
  productId: number;
  userId: string;
}