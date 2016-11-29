import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const defaultProps = {

};

class PatientInfo extends React.Component{

	setData( _index ){
		let patient = patientList.getPatients();
		let firstP = patient[ _index ];
		let fullName = firstP.lastName +' '+ firstP.firstName;
		let upperExtremityFunction = ( firstP.upperExtremityFunctionLt == 'N' ) ? '오른쪽' : '왼쪽';
		return {
			lastName : firstP.lastName,
			fullName : fullName,
			gender : firstP.gender,
			upperExtremityFunction : upperExtremityFunction,
			birth : firstP.birth,
			diagnosis : firstP.diagnosis,
			dateOfOnsetMonth : firstP.dateOfOnsetMonth
		}
	}

	constructor( _props ){
		super( _props );
		this.state = this.setData( 0 );
	}

	componentWillReceiveProps( _nextProps ){
		let patient = patientList.getPatients();
		let index = _nextProps.currentIndex;
		let firstP = patient[ index ];
		let fullName = firstP.lastName +' '+ firstP.firstName;
		let upperExtremityFunction = ( firstP.upperExtremityFunctionLt == 'N' ) ? '오른쪽' : '왼쪽';

		this.setState({
			lastName : firstP.lastName,
			fullName : fullName,
			gender : firstP.gender,
			upperExtremityFunction : upperExtremityFunction,
			birth : firstP.birth,
			diagnosis : firstP.diagnosis,
			dateOfOnsetMonth : firstP.dateOfOnsetMonth
		});
	}

	render(){
		return(
				<div className="row-col box" style={{ height:'195px' }}>
					<Col sm={4} md={4}>
						<div className="box-header">
							<h3>환자 정보</h3>
						</div>
						<div className="box-body  lt text-center">
							<span className="avatar w-56 blue-500"> 
									{ this.state.lastName }
								<i className="on b-white bottom"></i></span>
						</div>
						<div className="box-body lt text-center">
							<div className="text-md block">
								{ this.state.fullName }
							</div>
						</div>
					</Col>
		      	    <Col sm={4} md={4}>
		      	    	<div className="box-header"></div>
						<div className="box-body">
							<div>
								<span>성별</span> :
								
									<small> { this.state.gender }</small>
							</div>
							<div>
								<span>환측</span> : <small>{ this.state.upperExtremityFunction }</small>
							</div>
							<div>
								<span>생년월일</span> : <small>{ this.state.birth }</small>
							</div>
						</div>
		      	    </Col>
		      	    <Col sm={4} md={4}>
		      	    	<div className="box-header"></div>
						<div className="box-body">
							<div>
								<span>진단명</span> : <small>{ this.state.diagnosis }</small>
							</div>
							<div>
								<span>발병일</span> : <small> { this.state.dateOfOnsetMonth } </small>
							</div>
						</div>
		      	    </Col>
				</div>
				
			);
	}
}

PatientInfo.defaultProps = defaultProps;

export default PatientInfo;