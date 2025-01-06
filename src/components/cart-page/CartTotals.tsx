import { useAppSelector } from '@/hooks';
import { Card, CardTitle } from '../ui/card';
import CartTotalRow from './CartRow';

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (store) => store.cart
  );
  return (
    <Card className="p-8 bg-muted">
      <CartTotalRow label="Subtotal" amount={cartTotal} />
      <CartTotalRow label="Shipping" amount={shipping} />
      <CartTotalRow label="Tax" amount={tax} />
      <CardTitle>
        <CartTotalRow lastRow label="Order Total" amount={orderTotal} />
      </CardTitle>
    </Card>
  );
};

export default CartTotals;
