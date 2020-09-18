import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


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
                        <NavItem>
                                                    
                        </NavItem>                    
                    </Nav>
                        <span className='text-white'> Nome usuário </span>  
                    <NavLink className='text-white' href ='/login' >Login</NavLink>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;