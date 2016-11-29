import React from 'react';

class TrainingTypeRatio extends React.Component{

	drawGraph( _missionData ){
		let chart = c3.generate({
			bindto : '#missionGraph',
			padding : {
				left : 80,
				right : 80,
				top : 80,
				bottom : 80
			},
			data : {
				json : [ _missionData.data ],
				keys : {
					value : _missionData.types
				},
				type : 'pie'
			}
		});

		let colors = [];
		let colorCodes = [ '#2ec7c7', '#b6a2de', '#0ec2aa' ];
		_missionData.types.map( ( _data, _index ) => {
			colors[ _data ] = colorCodes[ _index ];
			return colors;
		});
		chart.data.colors( colors );
	}

	getData( _index ){
		let patient = patientList.getPatients();
		let missionData = patient[ _index ].missionTypes;

		let data = {};
		let types = [];
		missionData.map((_e) => {
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
				<div className="box" style={{height:'500px'}}>
					<div className="box-header">훈련 유형 비율</div>
					<div id="missionGraph" className="box-body" style={{height:'400px'}}></div>
					<div className="box-footer"></div>
				</div>
			);
	}
}

export default TrainingTypeRatio;