import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { type FormProps } from '@/utils';

const FormCheckbox = ({ name, label, defaultValue }: FormProps) => {
  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Checkbox
        id={name}
        name={name}
        defaultChecked={defaultValue === 'on' ? true : false}
      />
    </div>
  );
};

export default FormCheckbox;
