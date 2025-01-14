import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ThePagination = ({
  currentPage,
  totalPages,
}) => {
  const prevURL = `${url}?page=${currentPage > 1 ? currentPage - 1 : 1}`;
  const nextURL = `${url}?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const showEllipsis = currentPage >= 3 && currentPage <= totalPages - 2;

  return (
    <Pagination>
      <PaginationContent>
        {!isFirstPage && (
          <PaginationItem>
            <PaginationPrevious href={prevURL} />
          </PaginationItem>
        )}

        {showEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink href={nextURL}>{currentPage}</PaginationLink>
        </PaginationItem>

        {showEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {!isLastPage && (
          <PaginationItem>
            <PaginationNext href={nextURL} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default ThePagination;
