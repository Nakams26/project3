//Importing Styles
import "../App.css";

//Importing routes and links
import { Route, Routes } from "react-router-dom";

//Importing Components
import Header from "./Header";
import Home from "./Home";
import UserSearch from "./UserSearch";
import Footer from "./Footer";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* Adding routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scores" element={<UserSearch />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
