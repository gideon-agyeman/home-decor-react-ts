import { useAppSelector } from '@/hooks';
import { CheckoutForm, SectionTitle, CartTotals } from '@/components';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const Checkout = () => {
  const { cartTotal } = useAppSelector((store) => store.cart);

  if (cartTotal == 0)
    return (
      <div className="text-center">
        <SectionTitle text="Your Cart is Empty" />
        <Button asChild className="mt-4">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-24 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
