//Styles
import '../App.css';



//Components
import UserSearch from './UserSearch';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <UserSearch />
      <Footer />
    </div>
  );
}

export default App;
