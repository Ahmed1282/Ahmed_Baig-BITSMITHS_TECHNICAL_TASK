const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
    return (
      <div className="flex justify-center space-x-6 mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  