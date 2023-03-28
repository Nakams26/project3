//Welcome page component
//This is the welcome page, where the user land, he need to click get in to have access to the main page where he can search for sport result

//Import Link
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="welcomeSection">
      <div className="wrapper flexWelcome">
        <h2>What's the Score?</h2>
        <p>Sports results, on demand.</p>
        {/* Click on "get in" to have access to the scores page */}
        <Link to="/scores">
          <p className="getIn">Get started!</p>
        </Link>
      </div>
    </section>
  );
};

export default Home;
