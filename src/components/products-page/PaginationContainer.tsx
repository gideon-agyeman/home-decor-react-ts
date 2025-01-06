import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { ProductResponseWithParams, paginationURL, URLPrevNext } from '@/utils';
import { useLoaderData, useLocation } from 'react-router';

const PaginationContainer = () => {
  const { meta } = useLoaderData() as ProductResponseWithParams;
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  if (pageCount < 2) return null;

  const pagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page;
    const url = paginationURL({ pathname, search, pageNumber });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

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
        {pagination}
        <PaginationItem>
          <PaginationNext to={nextURL} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;
