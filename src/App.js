import Footer from "./Components/CommonComponents/Footer/Footer";
import Home from "./Pages/Home/Index";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Pages/Home/About/Index";
import Header from "./Components/CommonComponents/Header/Header";
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
