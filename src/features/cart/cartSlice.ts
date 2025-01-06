import { CartItem } from '@/utils';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { EditCartPayload } from '@/utils';
import { defaultState, getCartFromLocalStorage } from './localStorage';
import { calculateCartTotals } from './calculateTotals';

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const existingItem = state.cartItems.find(
        (i) => i.cartID === newCartItem.cartID
      );
      if (existingItem) {
        existingItem.quantity += newCartItem.quantity;
      } else {
        state.cartItems.push(newCartItem);
      }
      calculateCartTotals(state);
      toast.success(`${newCartItem.title} added to cart`);
    },
    editItem: (state, action: PayloadAction<EditCartPayload>) => {
      const { cartID, quantity } = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartID === cartID);
      if (cartItem) {
        cartItem.quantity = quantity;
        calculateCartTotals(state);
        toast.success(`${cartItem.title} quantity updated`);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const cartID = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );
      calculateCartTotals(state);
      toast.success('Item removed from cart');
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },
  },
});

export const { addItem, editItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// import { CartState, CartItem } from '@/utils';
// import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import { EditCartPayload } from '@/utils';

// const defaultState: CartState = {
//   cartItems: [],
//   numItemsInCart: 0,
//   cartTotal: 0,
//   shipping: 500,
//   tax: 0,
//   orderTotal: 0,
// };

// const getCartFromLocalStorage = (): CartState => {
//   const cart = localStorage.getItem('cart');
//   return cart ? JSON.parse(cart) : defaultState;
// };

// const cartSlice = createSlice({
//   title: 'cart',
//   initialState: getCartFromLocalStorage(),
//   reducers: {
//     addItem: (state, action: PayloadAction<CartItem>) => {
//       const newCartItem = action.payload;
//       const item = state.cartItems.find((i) => i.cartID === newCartItem.cartID);
//       if (item) {
//         item.quantity += newCartItem.quantity;
//       } else {
//         state.cartItems.push(newCartItem);
//       }
//       state.cartTotal += Number(newCartItem.price) * newCartItem.quantity;
//       cartSlice.caseReducers.calculateTotals(state);
//       toast.success('item added to cart');
//     },
//     editItem: (state, action: PayloadAction<EditCartPayload>) => {
//       const { cartID, quantity } = action.payload;
//       const cartItem = state.cartItems.find((i) => i.cartID === cartID);
//       if (!cartItem) return;
//       state.numItemsInCart += quantity - cartItem.quantity;
//       state.cartTotal +=
//         Number(cartItem.price) * (quantity - cartItem.quantity);
//       cartItem.quantity = quantity;
//       cartSlice.caseReducers.calculateTotals(state);
//       toast.success('Quantity update successfully');
//     },
//     removeItem: (state, action: PayloadAction<string>) => {
//       const cartID = action.payload;
//       const cartItem = state.cartItems.find((i) => i.cartID === cartID);
//       if (!cartItem) return;
//       state.numItemsInCart -= cartItem.quantity;
//       state.cartTotal -= Number(cartItem.price) * cartItem.quantity;
//       cartSlice.caseReducers.calculateTotals(state);
//       toast.success('item removed from cart');
//     },
//     calculateTotals: (state) => {
//       state.tax = 0.1 * state.cartTotal;
//       state.orderTotal = state.tax + state.cartTotal + state.shipping;
//       localStorage.setItem('cart', JSON.stringify(state));
//     },
//     clearCart: () => {
//       localStorage.setItem('cart', JSON.stringify(defaultState));
//       return defaultState;
//     },
//   },
// });

// export const { addItem, editItem, removeItem, calculateTotals, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;
