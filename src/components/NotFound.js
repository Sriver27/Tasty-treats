import { Link } from "react-router-dom";
import "../../index.css";

const NotFound = (props) => {
  const { setSearchText, setFilteredRestaurants, allRestaurants } = props;

  const handleClick = () => {
    setSearchText("");
    setFilteredRestaurants(allRestaurants);
  };
  return (
    <div className="not-found">
      <img
        src={require("../assets/img/error.jpg")}
        alt="Not Found"
        className="image"
      />

      <p className="error-text">Oops! Nothing Found here</p>
      <button className="error-button" onClick={handleClick}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
