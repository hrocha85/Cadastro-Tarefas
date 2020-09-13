import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    NavbarText
} from 'reactstrap';

// import Home from '../../pages/home/home';


const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Tarfast!</NavbarBrand>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.ohenriquerocha.com.br">Site Pessoal</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/hrocha85">GitHub</NavLink>
                        </NavItem>
                    
                    </Nav>
                    <NavbarText>Login</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;