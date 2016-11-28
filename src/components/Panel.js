import React from 'react';
import { Modal } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

class LeftPanel extends React.Component{
	constructor( _props ){
		super( _props );
		this.state = {
			count : 3
		};
	}

	componentDidMount(){
		console.log( 'componentDidMount' );
	}

	render(){
		let panelStyle = {
			backgroundColor : '#fff'
		}

		return(
				<div className="static-modal app-aside folded md nav-expand" style={panelStyle}>
					<Navbar>
						<Navbar.Header>
					      <Navbar.Brand>
					        <a href="#">
					        	<span className="hidden-folded inline">Rapael rehab</span>
					        </a>
					      </Navbar.Brand>
					    </Navbar.Header>
					</Navbar>

					<Nav stacked>
						<NavItem href="#">
							<span className="pull-left w-40 img-circle blue-grey-800">{this.props.lastName}</span> 
							<span className="clear hidden-folded p-x"> 
							<span className="block _500">{this.props.name}</span> 
							<small className="block text-muted">
							<i className="fa fa-circle text-success m-r-sm"></i>online</small></span>
						</NavItem>
						<br />
						<br />
					    <NavItem eventKey={2} href="#">
					    	<Glyphicon glyph="align-justify" />
					    	&nbsp;
					    	<span className="nav-text">&nbsp;환자리스트&nbsp;</span>
					    	&nbsp;
					    	<Label bsStyle="success">{this.state.count}</Label>
					    </NavItem>
					</Nav>
					
				</div>
			);
	}
}

export default LeftPanel;