//Importing Styles

import "./styles/sass/style.scss"

//Importing routes and links
import { Route, Routes } from "react-router-dom";

//Importing Components
import Header from "./components/Header";
import UserSearch from "./components/UserSearch";
import Footer from "./components/Footer";
import Error from "./components/Error";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* Adding routes */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/scores" element={<UserSearch />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
