import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ManageProducts from '../ManageProducts/ManageProducts';

const AdminPanel = () => {
    return (
        <div className='container d-flex'>
            <Router>
                <Nav className="col-md-6  bg-success sidebar"
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <div className="sidebar-sticky"></div>
                    <Nav.Item>
                        <Nav.Link><Link className="link" to='/manageProduct'>Manage Product</Link></Nav.Link>
                        <Nav.Link><Link className="link" to='/addProduct'>Add Product</Link></Nav.Link>
                        <Nav.Link><Link className="link" to='/editProduct'>Edit Product</Link></Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/manageProduct">
                        <ManageProducts />
                    </Route>
                    <Route path="/addProduct">
                        <AdminPanel />
                    </Route>
                </Switch>
            </Router>
        </div>
    )

};

export default AdminPanel;