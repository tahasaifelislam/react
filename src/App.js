import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomSandwich from "./pages/CustomSandwich";
import Panier from "./pages/Panier";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/CustomSandwich" exact component={CustomSandwich} />
          <Route path="/Panier" exact component={Panier} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
