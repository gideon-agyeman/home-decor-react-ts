import { URLParams, Prev_Next, PrevNextURL } from './types';

export const paginationURL = ({
  search,
  pageNumber,
  pathname,
}: URLParams): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set('page', pageNumber.toString());
  return `${pathname}?${searchParams.toString()}`;
};

export const URLPrevNext = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: Prev_Next): PrevNextURL => {
  const prevPage = currentPage > 1 ? currentPage - 1 : pageCount;
  const nextPage = currentPage < pageCount ? currentPage + 1 : 1;

  const prevURL = paginationURL({ pageNumber: prevPage, pathname, search });
  const nextURL = paginationURL({ pageNumber: nextPage, pathname, search });
  return { prevURL, nextURL };
};
