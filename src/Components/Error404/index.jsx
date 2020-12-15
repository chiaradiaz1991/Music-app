
import error from '../../assets/error.png';

const Error404 = ()=> {
  return (
    <div className="errorContainer">
    <img className="errorImage" src={error} alt="" />
    <h3 className="errorContent">Opps! The artist is not on our database yet..</h3>
    </div>
  )
};

export default Error404;