import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Compress from './components/Compress';
import Decompress from './components/Decompress';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <Router>
      <Navbar />
      <Alert alert={alert} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Compress showAlert={showAlert}/>
          </Route>
          <Route exact path="/unzip">
            <Decompress showAlert={showAlert}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
