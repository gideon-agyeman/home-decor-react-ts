import { useLoaderData, Link } from 'react-router';
import {
  formatPrice,
  type SingleProductResponse,
  Mode,
  CartItem,
} from '@/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SelectColor, SelectQuantity } from '@/components';
import { useAppDispatch } from '@/hooks';
import { addItem } from '@/features/cart/cartSlice';

const SingleProduct = () => {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { title, image, price, description, colors, company } =
    product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const cartItem: CartItem = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    quantity,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem(cartItem));
  };

  return (
    <section>
      <div className="flex  h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg  lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {formatPrice(price)}
          </p>
          <p className="mt-6 leading-8">{description}</p>
          <SelectColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          <SelectQuantity
            mode={Mode.SingleProduct}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <Button size="lg" className="mt-10" onClick={addToCart}>
            Add to Bag
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
