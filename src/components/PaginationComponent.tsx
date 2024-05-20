import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationComponentProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
};

function PaginationComponent({
  currentPage,
  setCurrentPage,
  maxPage,
}: PaginationComponentProps) {
  const paginationPages = getPaginationPages(currentPage, maxPage);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function decreasePage() {
    if (currentPage <= 1) return;

    setCurrentPage((currentPage) => currentPage - 1);
    scrollToTop();
  }

  function increasePage() {
    if (currentPage >= maxPage) return;

    setCurrentPage((currentPage) => currentPage + 1);
    scrollToTop();
  }

  function setPage(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > maxPage) return;

    setCurrentPage(pageNumber);
    scrollToTop();
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={decreasePage}
            disabled={currentPage <= 1}
          />
        </PaginationItem>

        {paginationPages.map((page, i) =>
          page ? (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => setPage(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={i}>
              <PaginationEllipsis />
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={increasePage}
            disabled={currentPage >= maxPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function getPaginationPages(currentPage: number, maxPage: number) {
  const leftSibling = Math.max(currentPage - 1, 1);
  const rightSibling = Math.min(currentPage + 1, maxPage);

  const paginationPages: (number | null)[] = [];

  if (leftSibling > 1) paginationPages.push(1);

  if (leftSibling > 2) paginationPages.push(null);

  for (let i = leftSibling; i <= rightSibling; ++i) paginationPages.push(i);

  if (rightSibling < maxPage - 1) paginationPages.push(null);

  if (rightSibling < maxPage) paginationPages.push(maxPage);

  return paginationPages;
}

export default PaginationComponent;
