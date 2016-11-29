import React from 'react';
import HistoryData from './HistoryData';

const defaultProps = {
	index : 0
};

class TrainingHistory extends React.Component{
	constructor( _props ){
		super( _props );
		let patient = patientList.getPatients();
		let history = patient[0].contentHistory;
		this.state = {
			history : history
		}
	}

	componentWillReceiveProps( _nextPos ){
		const patient = patientList.getPatients();
		const history = patient[ _nextPos.index ].contentHistory;
		this.setState({
			history : history
		});
	}

	render(){
		const mapToComponent = ( _data ) => {
			return _data.map( ( _history, _i) => {
				return( <HistoryData history={ _history } key={ _i }/>);
			});
		}

		return(
				<div className="box" style={{ height:'450px' }}>
					<div className="box-header">
						<h3>훈련수행기록</h3>
						<small>6 finished</small>
					</div>
					<div className="box-tool"></div>
					<div className="box-body">
						<div className="scrollable hover" style={{ height: '310px' }}>
							<div className="streamline b-l m-l" style={{ left:'11px' }}>
									{ mapToComponent( this.state.history ) }
								</div>
							</div>
					</div>
					<div className="box-footer">
					</div>
				</div>
			
			);
	}
}

TrainingHistory.defaultProps = defaultProps;

export default TrainingHistory;