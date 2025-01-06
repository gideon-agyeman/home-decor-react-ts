import { type LoaderFunction, redirect } from 'react-router';
import {
  SingleProductResponse,
  ProductsResponse,
  ProductResponseWithParams,
  OrdersResponse,
} from './types';
import { customFetch } from './customFetch';
import { type ReduxStore } from '@/store';

/**
 * SINGLE PRODUCT LOADER
 */
export const singleProductLoader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  try {
    const response = await customFetch<SingleProductResponse>(
      `/products/${params.id}`
    );
    return { ...response.data };
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw new Error('Failed to load product. Please try again later.');
  }
};

/**
 * ALL PRODUCTS LOADER
 */
const productsUrl = '/products';

export const productsPageLoader: LoaderFunction = async ({
  request,
}): Promise<ProductResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const response = await customFetch<ProductsResponse>(productsUrl, {
      params,
    });
    return { ...response.data, params };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to load products. Please try again later.');
  }
};

/**
 * FEATURED PRODUCTS LOADER
 */
const featuredproductsUrl = '/products?featured=true';

export const landingPageLoader: LoaderFunction =
  async (): Promise<ProductsResponse> => {
    try {
      const response = await customFetch<ProductsResponse>(featuredproductsUrl);
      return { ...response.data };
    } catch (error) {
      console.error('Failed to fetch featured products:', error);
      throw new Error(
        'Unable to load featured products. Please try again later.'
      );
    }
  };

/**
 * CHECKOUT LOADER
 */
export const checkoutPageLoader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
    const { user } = store.getState().user;

    if (!user) return redirect('/login');

    return null;
  };

/**
 * ORDERS LOADER
 */
export const orderPageLoader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    const { user } = store.getState().user;

    if (!user) return redirect('/login');

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch<OrdersResponse>('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      return { ...response.data };
    } catch (error) {
      console.error('Failed to fetch orders:', error);

      return null;
    }
  };
