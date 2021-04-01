import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import Home from '../Home/Home';
import ManageProducts from '../ManageProducts/ManageProducts';
import './AdminPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const AdminPanel = () => {
    return (
        <div className='container'>
            <Header></Header>
            <div className='d-flex mt-3'>
                <Router>
                    <Nav className="col-md-3 w-25 sidebar sidebar-contain">
                        <Nav.Item>
                            <h3 className='text-center logo'>NobomiMart</h3>
                            <Nav.Link><Link className="sideNav" to='/manageProduct'><FontAwesomeIcon icon={faTasks} /> Manage Product</Link></Nav.Link>
                            <Nav.Link><Link className="sideNav" to='/addProduct'><FontAwesomeIcon icon={faPlus} /> Add Product</Link></Nav.Link>
                            <Nav.Link><Link className="sideNav" to='/editProduct'><FontAwesomeIcon icon={faEdit} /> Edit Product</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <PrivateRoute path="/manageProduct">
                            <ManageProducts />
                        </PrivateRoute>
                        <PrivateRoute path="/addProduct">
                            <AddProduct></AddProduct>
                        </PrivateRoute>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )

};

export default AdminPanel;