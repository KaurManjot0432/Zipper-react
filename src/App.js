import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Compress from './components/Compress';
import Decompress from './components/Decompress';


function App() {
  return (
    <Router>
    <Navbar/>
    <div className="container">
            <Switch>
              <Route exact path="/">
                <Compress />
              </Route>
              <Route exact path="/unzip">
                <Decompress />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
    <Footer/>
    </Router>
  );
}

export default App;
