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
import  {faTasks, faPlus,faEdit} from '@fortawesome/free-solid-svg-icons'


const AdminPanel = () => {
    return (
        <div className='container d-flex'>
            <Router>
                <Nav className="col-md-3 w-25 sidebar sidebar-contain">
                    {/* <div className="sidebar-sticky"></div> */}
                    <Nav.Item>
                        <h3 className='text-center'>NobomiMart</h3>
                        <Nav.Link><Link className="sideNav" to='/manageProduct'><FontAwesomeIcon icon={faTasks} /> Manage Product</Link></Nav.Link>
                        <Nav.Link><Link className="sideNav" to='/addProduct'><FontAwesomeIcon icon={faPlus} /> Add Product</Link></Nav.Link>
                        <Nav.Link><Link className="sideNav" to='/editProduct'><FontAwesomeIcon icon={faEdit} /> Edit Product</Link></Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/manageProduct">
                        <ManageProducts />
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct></AddProduct>
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )

};

export default AdminPanel;