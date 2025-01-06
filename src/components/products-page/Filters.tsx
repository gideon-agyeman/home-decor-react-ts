import { useLoaderData, Form, Link } from 'react-router';
import FormInput from '../shared/FormInput';
import FormSelect from '../shared/FormSelect';
import { Button } from '../ui/button';
import { ProductResponseWithParams } from '@/utils';
import FormRange from '../shared/FormRange';
import FormCheckbox from '../shared/FormCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData() as ProductResponseWithParams;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        label="search product"
        name="search"
        type="search"
        defaultValue={search}
        id="search"
      />
      <FormSelect
        label="select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />
      <FormSelect
        label="select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />
      <FormSelect
        label="order by"
        name="order"
        options={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
      />
      <FormRange name="price" label="price" defaultValue={price} />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
};

export default Filters;
