// assets
import error from "../../assets/error.png";

const Error404 = () => {
  return (
    <div className="errorContainer">
      <h3 className="errorContent">Opps! The artist is not found..</h3>
      <img className="errorImage" src={error} alt="" />
    </div>
  );
};

export default Error404;
