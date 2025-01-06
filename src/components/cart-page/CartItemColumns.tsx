import { useAppDispatch } from '@/hooks';
import { CartItem, formatPrice, Mode } from '@/utils';
import { Button } from '../ui/button';
import { editItem, removeItem } from '@/features/cart/cartSlice';
import SelectQuantity from '../single-product-page/SelectQuantity';

const CartItemColumns = ({
  image,
  title,
  company,
  price,
  productColor,
  cartID,
  quantity,
}: CartItem) => {
  const dispatch = useAppDispatch();

  const setQuantity = (value: number) => {
    dispatch(editItem({ cartID, quantity: value }));
  };

  return (
    <>
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-4 md:ml-12 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm">{company}</h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            style={{
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              background: productColor,
            }}
          ></span>
        </p>
      </div>
      <div>
        <SelectQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          mode={Mode.CartItem}
        />
        <Button
          variant="link"
          className="-ml-4"
          onClick={() => {
            dispatch(removeItem(cartID));
          }}
        >
          remove
        </Button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </>
  );
};

export default CartItemColumns;
