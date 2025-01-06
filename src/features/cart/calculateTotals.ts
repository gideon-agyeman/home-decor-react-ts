import { CartState } from '@/utils';

export const calculateCartTotals = (state: CartState) => {
  state.numItemsInCart = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  state.cartTotal = state.cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  state.tax = 0.1 * state.cartTotal;
  state.orderTotal = state.tax + state.cartTotal + state.shipping;
  localStorage.setItem('cart', JSON.stringify(state));
};
