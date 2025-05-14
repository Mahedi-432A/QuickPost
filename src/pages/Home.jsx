import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">QuickPost</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque culpa natus optio illo corporis iure unde ipsam laboriosam dignissimos aliquid neque quae modi, error perferendis molestiae ex dolores. Amet animi quo sunt esse sit nobis voluptatum laboriosam deserunt! Adipisci quisquam a vero harum quae, perferendis quaerat dignissimos praesentium suscipit quasi!
              </p>
              <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
