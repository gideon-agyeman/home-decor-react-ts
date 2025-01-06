/* eslint-disable prefer-const */
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { OrdersResponse, paginationURL, URLPrevNext } from '@/utils';
import { useLoaderData, useLocation } from 'react-router';

const OrdersPagePagination = () => {
  const { meta } = useLoaderData() as OrdersResponse;
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();

  //   const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  if (pageCount < 2) return null;

  const pageLink = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = paginationURL({ pathname, search, pageNumber });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const ellipsis = (key: string): React.ReactNode => (
    <PaginationItem key={key}>
      <PaginationEllipsis />
    </PaginationItem>
  );

  const pagination = () => {
    let pages: React.ReactNode[] = [];
    pages.push(pageLink({ pageNumber: 1, isActive: page === 1 }));
    if (page > 2) {
      pages.push(ellipsis('dots-1'));
    }
    if (page !== 1 && page !== pageCount) {
      pages.push(pageLink({ pageNumber: page, isActive: true }));
    }
    if (page < pageCount - 1) {
      pages.push(ellipsis('dots-2'));
    }
    pages.push(
      pageLink({ pageNumber: pageCount, isActive: page === pageCount })
    );
    return pages;
  };

  const { prevURL, nextURL } = URLPrevNext({
    currentPage: page,
    pageCount,
    pathname,
    search,
  });

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevURL} />
        </PaginationItem>
        {pagination()}
        <PaginationItem>
          <PaginationNext to={nextURL} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default OrdersPagePagination;
