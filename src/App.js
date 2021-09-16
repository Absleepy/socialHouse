import Footer from "./Components/CommonComponents/Footer/Footer";
import Home from "./Pages/Home";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Header from "./Components/CommonComponents/Header/Header";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Opportunities from "./Pages/Opportunities";
import Opportunity from "./Pages/Opportunity";
import MembersOnlyClub from "./Pages/Members-only-club";
import Resources from "./Pages/Resources";
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
            <Route path="/opportunity/:id" exact>
              <Opportunity />
            </Route>
            <Route path="/members-only-club" exact>
              <MembersOnlyClub />
            </Route>
            <Route path="/resources" exact>
              <Resources />
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
