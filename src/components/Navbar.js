import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

class HeaderNavbar extends React.Component {

	render(){
		return ( 
				<Navbar collapseOnSelect fluid={true} style={{backgroundColor : '#fff'}}>
					<Nav>
						<NavItem><strong>+ Add Patient</strong></NavItem>
					</Nav>
				    <Nav pullRight>
				        <NavItem eventKey={1} href="#">
				        	<span className="avatar w-32 blue-grey-800">
							{this.props.name}<i className="on b-white bottom"></i></span>
				        </NavItem>
				    </Nav>
				  </Navbar>
		);
	}
}

export default HeaderNavbar;