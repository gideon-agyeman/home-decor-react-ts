import { CartState } from '@/utils';

export const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

export const getCartFromLocalStorage = (): CartState => {
  try {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : defaultState;
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return defaultState;
  }
};
