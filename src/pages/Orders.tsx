import { OrdersResponse } from '@/utils';
import { useLoaderData } from 'react-router';
import { OrdersList, SectionTitle } from '@/components';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import OrdersPagePagination from '@/components/checkout-order-page/Pagination';

const Orders = () => {
  const { meta } = useLoaderData() as OrdersResponse;

  if (meta.pagination.total < 1)
    return (
      <div className="text-center">
        <SectionTitle text="No orders yet..!" />
        <Button asChild className="mt-4">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );

  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <OrdersPagePagination />
    </>
  );
};

export default Orders;
