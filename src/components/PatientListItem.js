import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const propsTypes = {
	onShowData : PropTypes.func
};

function createWarning( _funcName ){
	return () => console.log( _funcName + ' is not defined' );
}

const defaultProps = {
	onShowData : createWarning( 'onShowData' )
};

class PatientListItem extends React.Component{
	constructor( _props ){
		super( _props );
		this.onclick = this.onclick.bind(this);
	}

	onclick( _event ){
		var index = $( _event.currentTarget ).index();
		this.props.onShowData( index );
	}

	render(){
		return(
			    <ListGroupItem href="#" onClick={ this.onclick }>
			    	<div className="list-left">
	                    <span className="w-40 avatar blue-500"> { this.props.lastName } </span>
	                  </div>
	                  <div className="list-body">
	                    { this.props.name } 
	                    <small className="block">
	                     , { this.props.birth } </small>
	                  </div>
			    </ListGroupItem>
				   
			);
	}
}

PatientListItem.propsTypes = propsTypes;
PatientListItem.defaultProps = defaultProps;

export default PatientListItem;