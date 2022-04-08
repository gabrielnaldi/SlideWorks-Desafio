import React from "react";

import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
} from 'reactstrap';


class Headers extends React.Component {
    render() {
        return (
            <div class="btn-group mx-auto">
                <Navbar
                    
                    color="light"
                    expand="md"
                    secondary
                >
                    <NavbarBrand href="/">
                        Bibble
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Features
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Pricing
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Gallery
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Team
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <div class="input-group rounded">
                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    <span class="input-group-text border-0" id="search-addon">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default Headers;