import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PatientList from './PatientList';
import PatientInfo from './PatientInfo';
import TrainingTime from './TrainingTime';
import TrainingHistory from './TrainingHistory';
import EvaluationInfo from './EvaluationInfo';
import TrainingActionRatio from './ratio/TrainingAction';
import TrainingTypeRatio from './ratio/TrainingType';
import HeaderNavbar from './Navbar';

import { connect } from 'react-redux';
import * as actions from '../actions';

class ContentBody extends React.Component{

	render(){

		return(	
					<div className="app-content box-shadow-z0">
						<HeaderNavbar name={loginUser.lastName}/>
						<Grid fluid={true}>
						    <Row className="show-grid">
						      <Col sm={2}>
						      	  	<PatientList onShowData={ this.props.refreshData } />
						      </Col>
							      <Col sm={10}>
							      		<div className="padding">
										    <Row className="show-grid">
										      <Col xs={12} md={12}>
										      	  <PatientInfo currentIndex={ this.props.index }/>
										      </Col>
										    </Row>

										    <Row className="show-grid">
										      <Col md={6}>
										      	  <TrainingTime />
										      </Col>
										      <Col md={6}>
										      	  <TrainingHistory index={ this.props.index }/>
										      </Col>
										    </Row>

										    <Row className="show-grid">
										      <Col xs={12} md={12}>
										      	<TrainingActionRatio />
										      </Col>
										    </Row>

										    <Row className="show-grid">
										      <Col md={6}>
										      	  <TrainingTypeRatio />
										      </Col>
										      <Col md={6}>
										          <EvaluationInfo />
										      </Col>
										    </Row>
									    </div>
							      </Col>
						      
						    </Row>
						</Grid>
					</div>
			);
	}
}

const mapStateToProps = ( _state ) => {
	return {
		index : _state.index
	}
}

const mapDispatchToProps = ( _dispatch ) => {
	return {
		refreshData : ( _index ) => { _dispatch( actions.showData( _index ) ) }
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( ContentBody );