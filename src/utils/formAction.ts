import { ActionFunction, redirect } from 'react-router';
import { customFetch, OrderDetails, UserData } from '@/utils';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { type ReduxStore } from '@/store';
import { login } from '@/features/user/userSlice';
import { formatPrice } from '@/utils';
import { clearCart } from '@/features/cart/cartSlice';

/**
 * REGISTER USER ACTION
 */
export const registerUserAction: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData) as UserData;

  if (!userData.username || !userData.email || !userData.password) {
    toast.error('Please fill in all fields.');
    return null;
  }

  try {
    await customFetch.post('/auth/local/register', userData);
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : 'Failed to register user';
    toast.error(errorMessage);
    return null;
  }
};

/**
 * LOGIN USER ACTION
 */

export const loginUserAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const userInput = Object.fromEntries(formData);

    try {
      const { data }: AxiosResponse = await customFetch.post(
        '/auth/local',
        userInput
      );
      const {
        jwt,
        user: { username },
      } = data;

      store.dispatch(login({ username, jwt }));
      return redirect('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error.message || 'Login failed.');
      } else {
        toast.error('An unexpected error occurred.');
      }

      return null;
    }
  };

/**
 * CHECKOUT ACTION
 */
export const checkoutFormAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const { user } = store.getState().user;
    if (!user) return redirect('/login');

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;

    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

    const orderDetails: OrderDetails = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      await customFetch.post(
        '/orders',
        { data: orderDetails },
        { headers: { Authorization: `Bearer ${user.jwt}` } }
      );
      store.dispatch(clearCart());
      toast.success('Your order was successful..!');
      return redirect('/orders');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error.message || 'Order failed');
      } else {
        toast.error('An unexpected error occurred.');
      }
      return null;
    }
  };
