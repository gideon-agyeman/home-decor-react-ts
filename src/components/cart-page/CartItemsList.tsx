import { useAppSelector } from '@/hooks';
import { Card } from '../ui/card';
import CartItemColumns from './CartItemColumns';

const CartItemsList = () => {
  const { cartItems } = useAppSelector((store) => store.cart);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { image, title, price, company, productColor, quantity, cartID } =
          cartItem;
        return (
          <Card key={cartID} className="flex flex-row  gap-4 p-6 mb-8">
            <CartItemColumns
              image={image}
              title={title}
              company={company}
              price={price}
              cartID={cartID}
              productColor={productColor}
              quantity={quantity}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default CartItemsList;
