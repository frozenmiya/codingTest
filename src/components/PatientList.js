import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import PatientListItem from './PatientListItem';

class PatientList extends React.Component{

	render(){
		let patients = patientList.getPatients();
		let list = [];

		patients.map( ( _data, _index ) => {
			let currentPatient = patients[ _index ];
			let lastName = currentPatient.lastName;
			let name = lastName +' '+ currentPatient.firstName;
			let birth = currentPatient.birth;
			list.push( <PatientListItem key={ _index } lastName={ lastName } name={ name } birth={ birth } onShowData={ this.props.onShowData }/> );
		} );

		return(
				<ListGroup className="no-radius no-borders light lt">
					{ list }
				</ListGroup>
			);
	}
}

export default PatientList;