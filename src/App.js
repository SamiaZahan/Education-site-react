import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/Home">
                <Home></Home>
              </Route>
              <Route exact path="/Services">
                <Services></Services>
              </Route>
              <Route exact path="/About">
                  <About></About>
              </Route>
              <Route exact path="/Contact">
                <Contact></Contact>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            
        </Router>
    </div>
  );
}

export default App;
