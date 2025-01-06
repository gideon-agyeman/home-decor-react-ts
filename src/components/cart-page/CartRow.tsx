import { CartRow } from '@/utils';
import { formatPrice } from '@/utils';
import { Separator } from '@radix-ui/react-dropdown-menu';

const CartTotalRow = ({ label, amount, lastRow }: CartRow) => {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatPrice(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2 border-t border-primary" />}
    </>
  );
};

export default CartTotalRow;
