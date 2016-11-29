import React from 'react';

class EvaluationInfo extends React.Component{

	getData( _index ){
		let patient = patientList.getPatients();
		let ev = patient[ _index ].evaluation;
		let data = [];
		let xOffset = [ 0, -110, -160, 0, 160, 135 ];
		for( var i = 0, l = ev.length; i < l; i++ ){
			data[i] = [];
			ev[i].value.map( ( _item, _index ) => {
				let ratio = ( Number( _item.value ) / Number( _item.max ) ) * 100;
				(ratio > 100) ? 100 : ratio;
				data[ i ][ _index ] = {
					axis : _item.text,
					value : ratio.toFixed(2),
					xOffset : xOffset[ _index ]
				}
			});
		}
		return data;
	}

	setInitialData(){
		let data = this.getData(0);
		let width = $('#EvGraph').width();
		//console.log( this.getData(0) );

		RadarChart.defaultConfig.h = 400;
		RadarChart.defaultConfig.w = width;
		RadarChart.defaultConfig.maxValue = 100;
		setTimeout( ()=>{
			RadarChart.draw( '#EvGraph', data );	
		}, 1000);
		$(window).on('resize', () => {
			let width = $('#EvGraph').width();
			RadarChart.defaultConfig.w = width;
			RadarChart.draw( '#EvGraph', data );
		});
			
	}

	componentDidMount(){
		this.setInitialData();
	}

	componentWillReceiveProps( _nextPos ){
		let data = this.getData( _nextPos.index );
		RadarChart.draw("#EvGraph", data);	
	}

	render(){
		return(
				<div className="box" style={{ height:'500px' }}>
					<div className="box-header">평가 정보</div>
					<div id="EvGraph" className="box-body" style={{ height:'400px' }}></div>
					<div className="box-footer"></div>
				</div>
			);
	}
}

export default EvaluationInfo;