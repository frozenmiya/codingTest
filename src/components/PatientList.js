import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import PatientListItem from './PatientListItem';

class PatientList extends React.Component{

	render(){
		let patients = patientList.getPatients();
		let list = [];
		for( var i = 0, l = patients.length; i < l; i++ ){
			let currentPatient = patients[i];
			let lastName = currentPatient.lastName;
			let name = currentPatient.firstName +' '+ lastName;
			let birth = currentPatient.birth;
			list.push( <PatientListItem index={i} lastName={lastName} name={name} birth={birth} onShowData={this.props.onShowData}/> );
		}
		return(
				<ListGroup className="no-radius no-borders light lt">
					{list}
				</ListGroup>
			);
	}
}

export default PatientList;