import { useState,useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index"
import { NavLink } from "react-router-dom"
const NavbarComponent = () => {
    const [changeColor ,setChengeColor]=useState(false)

    const changeBackgroundColor = ()=>{
        if(window.scroll > 10){
            setChengeColor(true)
        }else{
            setChengeColor(false)
        }
    }

        useEffect (()=>{
            changeBackgroundColor()
            
            window.addEventListener("scroll",changeBackgroundColor)
        })
    return (
        <>
            <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className="fs-3 fw-bold">Jago Coding</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            {navLinks.map((link) => {
                                return <div className="nav-link" key={link.id}>

                                    <NavLink to={link.path} end className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""}>{link.text}</NavLink>
                                </div>


                            })}

                        </Nav>
                        <div className="text-center">
                            <button className="btn btn-outline-danger rounded-1 ">Join With Us</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent
