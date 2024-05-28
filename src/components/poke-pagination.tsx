import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function PokePagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
    // Calculate the previous and next pages
    const previousPage = (currentPage - 1) > 0 ? currentPage - 1 : 1;
    const previousTwoPages = (currentPage - 2) > 0 ? currentPage - 2 : 1;
    const nextPage = (currentPage + 1) > totalPages ? totalPages : currentPage + 1;
    const nextTwoPages = (currentPage + 2) > totalPages ? totalPages : currentPage + 2;

    // Show only the current page and the two pages before and after it (if they exist), with ellipsis in between when needed
    return (
        <Pagination>
            <PaginationContent>
                <PaginationPrevious href={`/list/${previousPage}`} />
                <PaginationItem>
                    <PaginationLink href={`/list/1`} isActive={currentPage === 1}>1</PaginationLink>
                </PaginationItem>
                {currentPage > 4 && <PaginationEllipsis />}
                {currentPage > 3 && <PaginationItem><PaginationLink href={`/list/${previousTwoPages}`}>{previousTwoPages}</PaginationLink></PaginationItem>}
                {currentPage > 2 && <PaginationItem><PaginationLink href={`/list/${previousPage}`}>{previousPage}</PaginationLink></PaginationItem>}
                {currentPage > 1 && currentPage < totalPages
                    && <PaginationItem><PaginationLink href={`/list/${currentPage}`} isActive>{currentPage}</PaginationLink></PaginationItem>}
                {currentPage < totalPages - 1 && <PaginationItem><PaginationLink href={`/list/${nextPage}`}>{nextPage}</PaginationLink></PaginationItem>}
                {currentPage < totalPages - 2 && <PaginationItem><PaginationLink href={`/list/${nextTwoPages}`}>{nextTwoPages}</PaginationLink></PaginationItem>}
                {currentPage < totalPages - 3 && <PaginationEllipsis />}
                <PaginationItem>
                    <PaginationLink href={`/list/${totalPages}`} isActive={currentPage === totalPages}>{totalPages}</PaginationLink>
                </PaginationItem>
                <PaginationNext href={`/list/${nextPage}`} />
            </PaginationContent>
        </Pagination>
    );
}
