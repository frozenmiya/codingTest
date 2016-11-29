import React from 'react';

class TrainingActionRatio extends React.Component{

	drawGraph( _motionData ){
		let chart = c3.generate({
			bindto : '#motionGraph',
			padding : {
				left : 40,
				right : 40,
				top : 40,
				bottom : 40
			},
			data : {
				json : [ _motionData.data ],
				keys : {
					value : _motionData.types
				},
				type : 'pie'
			}
		});

		let colors = [];
		let colorCodes = [ '#2ec7c7', '#b6a2de', '#6989ff', '#6dc788', '#f57a97' ];
		_motionData.types.map( ( _data, _index ) => {
			colors[ _data ] = colorCodes[ _index ];
			return colors;
		});
		chart.data.colors( colors );
	}

	getData( _index ){
		let patient = patientList.getPatients();
		let motionData = patient[ _index ].motionTypes;

		let data = {};
		let types = [];
		motionData.map((_e) => {
		    types.push(_e.name);
		    data[_e.name] = _e.value;
		});

		return {
			data, types
		}    

	}

	setInitalData(){
		let data = this.getData( 0 );
		setTimeout( () => {
			this.drawGraph( data );
		}, 1000); 
	}

	componentDidMount(){
		this.setInitalData();
	}

	componentWillReceiveProps( _nexPos ){
		let data = this.getData( _nexPos.index );
		this.drawGraph( data );
	}


	render(){
		return(
				<div className="box" style={{height:'450px'}}>
					<div className="box-header">훈련 동작 비율</div>
					<div id="motionGraph" className="box-body" style={{height:'350px'}}></div>
					<div className="box-footer"></div>
				</div>
				
				);
	}
}

export default TrainingActionRatio;