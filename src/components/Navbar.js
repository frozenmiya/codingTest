import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

class HeaderNavbar extends React.Component {

	render(){
		return ( 
				<Navbar fluid={true} style={{ backgroundColor : '#fff' }}>
					<Navbar.Header>
						<Navbar.Brand>
							Rapael Rahap
						</Navbar.Brand>
						<Navbar.Toggle/>
					</Navbar.Header>
					<Navbar.Collapse>
					<Nav pullLeft>
						<NavItem><strong>+ Add Patient</strong></NavItem>
					</Nav>
				    <Nav pullRight>
				        <NavItem href="#">
				        	<span className="avatar w-32 blue-grey-800">
							{ this.props.name }<i className="on b-white bottom"></i></span>
				        </NavItem>
				    </Nav>
				    </Navbar.Collapse>
				  </Navbar>
		);
	}
}

export default HeaderNavbar;