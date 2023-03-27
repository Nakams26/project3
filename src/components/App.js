//Styles
import "../App.css";

//Import routing
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

//Components
import Home from "./Home";
import UserSearch from "./UserSearch";
import Footer from "./Footer";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <header>
        <div className="wrapper flexHeader">
          {/* If you click on the logo at the top left, you get back to the welcome page */}
          <Link to="/">
            <h1>WTS?</h1>
          </Link>
          <p className="textTitle">BasketBall - Tennis - Hockey</p>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scores" element={<UserSearch />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
