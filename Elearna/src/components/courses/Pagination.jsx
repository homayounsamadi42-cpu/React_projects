export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Course pages">
      <button type="button" className="pagination-arrow" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} aria-label="Previous page">←</button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          type="button"
          key={page}
          className={`pagination-number ${page === currentPage ? "active" : ""}`}
          aria-current={page === currentPage ? "page" : undefined}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button type="button" className="pagination-arrow" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} aria-label="Next page">→</button>
    </nav>
  );
}
