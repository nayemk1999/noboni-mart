import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import AdminPanel from './component/AdminPanel/AdminPanel';
import Header from './component/Header/Header';

function App() {

  return (
    <Router>
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/adminPanel">
          <AdminPanel />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
