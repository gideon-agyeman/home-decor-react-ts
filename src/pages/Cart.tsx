import { useAppSelector } from '@/hooks';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { CartItemsList, CartTotals, SectionTitle } from '@/components';
import { Separator } from '@radix-ui/react-dropdown-menu';

const Cart = () => {
  const { user } = useAppSelector((store) => store.user);
  const { numItemsInCart } = useAppSelector((store) => store.cart);

  if (numItemsInCart === 0) {
    return (
      <div className="text-center">
        <SectionTitle text="Your Cart is Empty" />
        <Button asChild className="mt-4">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  const renderCheckoutButton = () => {
    return (
      <Button asChild className="mt-8 w-full">
        {user ? (
          <Link to="/checkout">Proceed to Checkout</Link>
        ) : (
          <Link to="/login">Login to Continue</Link>
        )}
      </Button>
    );
  };

  return (
    <section>
      <SectionTitle text="Shopping Cart" />
      <Separator className="my-4" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {renderCheckoutButton()}
        </div>
      </div>
    </section>
  );
};

export default Cart;
