import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import AdminPanel from './component/AdminPanel/AdminPanel';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import CheckOut from './component/CheckOut/CheckOut';
import OrderMange from './component/OrderMange/OrderMange';
import NotFound from './component/NotFound/NotFound';
import ManageProducts from './component/ManageProducts/ManageProducts';
import AddProduct from './component/AddProduct/AddProduct';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/adminPanel">
            <AdminPanel />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <OrderMange />
          </PrivateRoute>
          <Route path="/manageProduct">
            <AdminPanel />
          </Route>
          <Route path="/addProduct">
            <AdminPanel/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/buy-product/:id">
            <CheckOut />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
