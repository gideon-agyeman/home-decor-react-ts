import { LayoutGrid, List } from 'lucide-react';
import { Button } from '../ui/button';

import { ProductHeaderProps } from './ProductsContainer';

const ProductPageHeader = ({
  layout,
  total,
  setLayout,
}: ProductHeaderProps) => {
  return (
    <section>
      <div className="flex justify-between items-center mt-8">
        <h4 className="font-medium text-md">
          {total} product{total > 1 && 's'}
        </h4>
        <div className="flex gap-x-1">
          <Button
            variant={layout === 'list' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setLayout('list')}
          >
            <List />
          </Button>
          <Button
            variant={layout === 'grid' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setLayout('grid')}
          >
            <LayoutGrid />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPageHeader;
