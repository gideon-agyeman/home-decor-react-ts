export type ProductsResponse = {
  data: Product[];
  meta: ProductsMeta;
};

export type SingleProductResponse = {
  data: Product;
  meta: object;
};

export type Product = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  image: string;
  price: string;
  shipping: boolean;
  colors: string[];
};

export type ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type Params = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  shipping?: string;
  page?: number;
};

export type ProductResponseWithParams = ProductsResponse & { params: Params };

export type FormProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

type Constants = {
  search: string;
  pathname: string;
};

export type URLParams = Constants & { pageNumber: number };

export type Prev_Next = Constants & { currentPage: number; pageCount: number };

export type PrevNextURL = { prevURL: string; nextURL: string };

export enum Mode {
  SingleProduct = 'singleProduct',
  CartItem = 'cartItem',
}

export type ProductQuantityProps = {
  mode: Mode.SingleProduct;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export type CartItemQuantityProps = {
  mode: Mode.CartItem;
  quantity: number;
  setQuantity: (value: number) => void;
};

export type CartItem = {
  cartID: string;
  productID?: number;
  image: string;
  title: string;
  price: string;
  quantity: number;
  productColor: string;
  company?: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type EditCartPayload = { cartID: string; quantity: number };

export type CartRow = {
  label: string;
  amount: number;
  lastRow?: boolean;
};

export type User = {
  username: string;
  jwt: string;
};

export type UserState = {
  user: User | null;
};

export type UserData = {
  username: string;
  email: string;
  password: string;
};

export type OrderDetails = {
  name: string;
  address: string;
  chargeTotal: number;
  orderTotal: string;
  cartItems: CartItem[];
  numItemsInCart: number;
};

export type OrdersResponse = {
  data: Order[];
  meta: OrdersMeta;
};

export type OrdersMeta = { pagination: Pagination };

export type Order = {
  id: number;
  attributes: {
    name: string;
    address: string;
    cartItems: CartItem[];
    orderTotal: string;
    numItemsInCart: number;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
};
