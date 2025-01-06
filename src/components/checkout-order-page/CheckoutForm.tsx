import FormInput from '../shared/FormInput';
import { Form } from 'react-router';
import SubmitButton from '../shared/SubmitButton';

const CheckoutForm = () => {
  return (
    <Form method="POST" action="/checkout" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping info</h4>
      <FormInput placeholder="full name" type="text" name="name" id="name" />
      <FormInput
        placeholder="address"
        type="text"
        name="address"
        id="address"
      />
      <SubmitButton text="Place Order" className="mt-4" />
    </Form>
  );
};

export default CheckoutForm;
