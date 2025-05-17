import usePostPagination from "../hooks/usePostPagination";

const Posts = () => {
  const {
    data: posts,
    loading,
    error,
    page,
    setPage,
    totalPages,
  } = usePostPagination();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // ---------------------------------------------
  const getPagination = (currentPage, totalPages) => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all pages if not too many
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first
      pages.push(1);

      if (currentPage > 4) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 2);
      const end = Math.min(totalPages - 1, currentPage + 2);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        pages.push("...");
      }

      // Always show last
      pages.push(totalPages);
    }

    return pages;
  };

  const paginationItems = getPagination(page, totalPages);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="mb-8 text-4xl font-bold">All Posts</h1>

        <div className="flex flex-col gap-4 my-5">
          {loading ? (
            <span className="mx-auto loading loading-spinner loading-lg"></span>
          ) : error ? (
            <div role="alert" className="text-center alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-current shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! {error}</span>
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <div className="shadow-xl card bg-base-100" key={post.id}>
                  <div className="card-body">
                    <h2 className="card-title">
                      {post.id}. {post.title}
                    </h2>
                    <p>{post.body}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* pagination controls */}
        <div className="flex gap-1 mb-10 join">
          <button className="join-item btn" onClick={handlePrevPage}>
            «
          </button>

          {paginationItems.map((item, idx) =>
            item === "..." ? (
              <button key={idx} className="join-item btn btn-disabled">
                ...
              </button>
            ) : (
              <button
                key={idx}
                className={`join-item btn ${page === item ? "btn-active" : ""}`}
                onClick={() => handlePageChange(item)}
              >
                {item}
              </button>
            )
          )}

          <button className="join-item btn" onClick={handleNextPage}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
