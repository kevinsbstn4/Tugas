import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Navbar,NavLink,Nav,NavItem}from 'reactstrap';
import './navbar.css'

export default class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <Nav>
                        <NavItem className="mynav">
                            <NavLink tag={Link} to="/book"><p>Lihat Daftar Buku</p></NavLink>
                        </NavItem>
                        <NavItem className="mynav">
                            <NavLink tag={Link} to="/book/create"><p>halaman tambah daftar buku</p></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

