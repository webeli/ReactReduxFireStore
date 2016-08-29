import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar style={{margin:'0px', border:'0px'}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span>React Redux Fire Store</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">FAQ</NavItem>
                            <NavItem eventKey={1} href="#">Help</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Navbar style={{border:'0px'}}>
                    <Navbar.Header>
                        <Navbar.Brand>

                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={3} title="Category 1" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Category 2" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Category 3" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="(5) items in Cart" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Item1</MenuItem>
                                <MenuItem eventKey={3.2}>Item2</MenuItem>
                                <MenuItem eventKey={3.2}>Item3</MenuItem>
                                <MenuItem eventKey={3.2}>Item4</MenuItem>
                                <MenuItem eventKey={3.2}>Item5</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Total Price: 0kr</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;