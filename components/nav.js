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
import { useRouter } from "next/router";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="navbar py-3 py-lg-4">
        <NavbarBrand className="ms-4" href="/">Codess Cafe</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/about" className={router.pathname == "/about" ? "active" : ""}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/objectives" className={router.pathname == "/objectives" ? "active" : ""}>Objectives</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tracks">Tracks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mentors" className={props.loc=="mentors"?"active":""}>Mentors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/testimonials">Testimonials</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/apply">Apply</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
