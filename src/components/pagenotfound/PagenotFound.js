import { useNavigate } from "react-router-dom";
import "./notFound.scss";

const PagenotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container pt-80">
      <p className="not-found-text ">404</p>
      <div className="not-found-body">
        <p className="sorry">Sorry , Page Not Found</p>
        <p className="bold-text-medium py-56">
          The page you requested could not be found
        </p>
        <button
          className="button-filled button-pink rounded"
          onClick={() => navigate("/")}
        >
          GO BACK HOME
        </button>
      </div>
    </div>
  );
};

export default PagenotFound;
