import { useState } from 'react';
import Link from 'next/link'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
  import logo from '../static/logo.svg'
  import 'bootstrap/dist/css/bootstrap.min.css'


  const NavBar = () => {
    const [ open, setOpen ] = useState(false);

    return (
      <div>
        <Navbar className="navme" fixed="top" dark expand="md">
          <NavbarBrand href="/">
          <img 
              alt="Vivalinda"
               src={logo}
               className="logo"
               width="150px"
               height="auto"
               />
          </NavbarBrand>
          <NavbarToggler id="button1" aria-label="Botão Menu" aria-pressed="false" onClick={() => setOpen( !open )} />
          <Collapse isOpen={open} navbar>
            <Nav className="ml-auto navme" navbar>
            <Link  href="/">
                <NavItem>
                <NavLink  id="link1" role="link" aria-label="Home" aria-labelledby="link1" href="" >Home</NavLink>
                </NavItem>
              </Link>
              <Link  href="/parcerias">
                <NavItem>
                <NavLink  id="link2" role="link" aria-label="Parcerias" aria-labelledby="link2" href="" >Parcerias</NavLink>
                </NavItem>
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
        <style global jsx>{`
           .navme{
            background-color: #212121;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }

  export default NavBar
