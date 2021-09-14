import Footer from "./Components/CommonComponents/Footer/Footer";
import Home from "./Pages/Home/Index";
import "./style/App.scss";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About/Index";
import Header from "./Components/CommonComponents/Header/Header";
import Contact from "./Pages/Contact/Index";
import PrivacyPolicy from "./Pages/PrivacyPolicy/Index";
import Opportunities from "./Pages/Opportunities/Opportunities";
function App() {
  return (
    <div className="wrapper">
      <Router basename="/">
        <Header />
        <div className="page_renderer">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/opportunities" exact>
              <Opportunities />
            </Route>
            <Route path="/contact-us" exact>
              <Contact />
            </Route>
            <Route path="/privacy-policy" exact>
              <PrivacyPolicy />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
