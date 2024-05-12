import { Link } from "react-router-dom";

const Error = () => {
    return (
      <div className="   mx-96  ">
        <div className="flex flex-col ">
          <button>
            <Link to={"/"}>
              <span className="text-center">Back to Home</span>
            </Link>
          </button>
          <img src="../../public/404/404.gif" alt="" className="w-" />
        </div>
      </div>
    );
};

export default Error;