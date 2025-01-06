import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import { ProductQuantityProps, CartItemQuantityProps, Mode } from '@/utils';

const SelectQuantity = ({
  mode,
  quantity,
  setQuantity,
}: ProductQuantityProps | CartItemQuantityProps) => {
  const cartItemSelectInput = mode === Mode.CartItem;
  return (
    <div className="mt">
      <h4 className=" mb-2 capitalize">quantity</h4>
      <Select
        defaultValue={quantity.toString()}
        onValueChange={(value) => setQuantity(Number(value))}
      >
        <SelectTrigger
          className={cartItemSelectInput ? 'w-[75px]' : 'w-[150px]'}
        >
          <SelectValue placeholder={quantity} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItemSelectInput ? 20 : 10 }, (_, i) => {
            const value = (i + 1).toString();
            return (
              <SelectItem key={i} value={value}>
                {value}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectQuantity;
