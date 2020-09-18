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
// import { useSelector, useDispatch } from 'react-redux';


const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const dispatch = useDispatch();
    // const notes = useSelector(state => state.notes.notes)

    
    // dispatch(inputActions.setInputTitle(item.title));
    

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
                        <span className='text-white'> {} </span>  
                    <NavLink className='text-white' href ='/login' >Login</NavLink>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;