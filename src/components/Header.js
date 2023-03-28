//Importing link to reroute to the home page when clicking on the logo
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper flexHeader">
        {/* If you click on the logo at the top left, you get back to the welcome page */}
        <Link to="/">
          <h1>WTS?</h1>
        </Link>
        <p className="textTitle">BasketBall - Tennis - Hockey</p>
      </div>
    </header>
  );
};

export default Header;
