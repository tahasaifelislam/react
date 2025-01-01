import React from "react";
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
import { PanierProvider } from "./context/PanierContext"; // Importer le PanierProvider

function App() {
  return (
    <div className="App">
      <PanierProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/customize" exact component={CustomSandwich} />
            <Route path="/panier" exact component={Panier} />
          </Switch>
          <Footer />
        </Router>
      </PanierProvider>
    </div>
  );
}

export default App;
