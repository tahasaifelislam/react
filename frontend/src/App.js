import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/SignUp";
import Cart from "./pages/Cart";  // Import Cart page
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Use Switch and Route for v5

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch> {/* Switch should be used here */}
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/cart" exact component={Cart} /> {/* Add Cart route */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
