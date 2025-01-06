import { formatPrice, type ProductsResponse } from '@/utils';
import { useLoaderData, Link } from 'react-router';
import { Card, CardContent } from '../ui/card';

const ProductsList = () => {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, company, image } = product.attributes;

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className="p-8 gap-y-4 grid md:grid-cols-3 ">
                <img
                  src={image}
                  alt={title}
                  className="h-64 w-ful md:h-48 md:w-48 rounded-md object-cover"
                />
                <div className="">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <p>{company}</p>
                </div>
                <p className="text-primary md:ml-auto">{formatPrice(price)}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
