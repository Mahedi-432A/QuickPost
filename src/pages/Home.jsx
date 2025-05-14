import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

const Home = () => {
  const { posts, loading, error } = usePosts();
  const postList = posts.slice(0, 6);

  return (
    <>
      <section className="container mx-auto">
        <div className="hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">QuickPost</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                culpa natus optio illo corporis iure unde ipsam laboriosam
                dignissimos aliquid neque quae modi, error perferendis molestiae
                ex dolores. Amet animi quo sunt esse sit nobis voluptatum
                laboriosam deserunt! Adipisci quisquam a vero harum quae,
                perferendis quaerat dignissimos praesentium suscipit quasi!
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8 mx-auto">
        <h2 className="my-3 text-4xl font-bold text-center">Posts</h2>
        <div className="grid grid-cols-1 gap-4 my-5 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : error ? (
            <div role="alert" className="alert alert-error">
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
              {postList.map((post) => (
                <div className="shadow-xl card bg-base-100" key={post.id}>
                  <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <Link to="/posts" className="btn btn-primary">
          More Posts
        </Link>
      </section>
    </>
  );
};

export default Home;
