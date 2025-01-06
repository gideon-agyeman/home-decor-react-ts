import ProductsList from './ProductsList';
import { useLoaderData } from 'react-router';
import { useState } from 'react';
import type { ProductsResponse } from '@/utils';

import { Separator } from '../ui/separator';
import ProductGrid from '../shared/ProductGrid';
import ProductPageHeader from './ProductPageHeader';

export type ProductHeaderProps = {
  total: number;
  layout: string;
  setLayout: React.Dispatch<React.SetStateAction<string>>;
};

const ProductsContainer = () => {
  const data = useLoaderData() as ProductsResponse;
  const total = data?.meta?.pagination?.total ?? 0;

  const [layout, setLayout] = useState('grid');

  return (
    <>
      <ProductPageHeader total={total} layout={layout} setLayout={setLayout} />
      <Separator className="mt-4" />
      {total < 1 ? (
        <h5 className="text-2xl mt-16 text-center">
          Sorry, no products matched your search...
        </h5>
      ) : layout === 'grid' ? (
        <ProductGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
};

export default ProductsContainer;
