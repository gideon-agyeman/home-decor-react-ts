import { Input } from '../ui/input';
import { FormProps } from '@/utils';

type InputProps = FormProps & {
  type: string;
  id?: string;
};

const FormInput = ({ name, type, defaultValue, placeholder }: InputProps) => {
  return (
    <div className="mb-2">
      {/* <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label> */}
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
