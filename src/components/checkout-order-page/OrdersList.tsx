import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { OrdersResponse } from '@/utils';
import { useLoaderData } from 'react-router';

const OrdersList = () => {
  const { data: orders, meta } = useLoaderData() as OrdersResponse;

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>
      <Table>
        <TableCaption>A list of your orders</TableCaption>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const { name, address, orderTotal, createdAt, numItemsInCart } =
              order.attributes;
            console.log(order);
            return (
              <TableRow key={order.id}>
                <TableCell>{name}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{numItemsInCart}</TableCell>
                <TableCell>{orderTotal}</TableCell>
                <TableCell>{new Date(createdAt).toDateString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersList;
