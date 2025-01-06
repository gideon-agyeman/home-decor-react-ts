import { Label } from '../ui/label';
import { Slider } from '../ui/slider';
import { formatPrice } from '@/utils';
import { useState } from 'react';
import { FormProps } from '@/utils';

const FormRange = ({ name, label, defaultValue }: FormProps) => {
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize flex justify-between">
        {label || name} <span>{formatPrice(selectedPrice)}</span>
      </Label>
      <Slider
        step={step}
        id={name}
        name={name}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectedPrice(value[0])}
        className="mt-4"
      />
    </div>
  );
};

export default FormRange;
