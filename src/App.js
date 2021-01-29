import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Home from './Home';
import Users from './Users';
import About from './About';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NaviBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
