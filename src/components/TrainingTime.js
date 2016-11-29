import React from 'react';

class TrainingTime extends React.Component{

	drawGraph( _xData, _yData ){
		let chart = c3.generate({
		    bindto: '#timeGraph',
		    padding: {
		    	right : 50
		    },
		    data: {
		    	x : 'x',
		        columns: [
		          _xData,
		          _yData
		        ],
		        type : 'line'
		    },
		    bar : {
		    	width : {
		    		ratio : 1
		    	}
		    },
		    axis : {
		    	x : {
		    		type : 'timeseries',
			    	tick : {
			    		count : 5,
			    		format : '%m-%d'
			    	}
		    	}
		    }
		});
	}

	getPlayData( _index ){
		let patient = patientList.getPatients();
		let playList = patient[ _index ].playTimeList;
		let dateTime = ['x'];
		let playTime = ['playTime'];

		for( let i = 0, l = playList.length; i < l; i++ ){
			dateTime.push( playList[i].datetime );
			playTime.push( playList[i].playTime );
		}

		return {
			dateTime, playTime
		};
	}

	componentWillReceiveProps( _nextProps ){
		let data = this.getPlayData( _nextProps.index );
		this.drawGraph( data.dateTime, data.playTime );
	}

	setInitialGraph(){
		let data = this.getPlayData( 0 );
		setTimeout( () => {
			this.drawGraph( data.dateTime, data.playTime );	
		}, 800 );
		
	}

	componentDidMount(){
		this.setInitialGraph();
	}


	render(){
		let style1 = {
			height : '450px'
		};

		let style2 = {
            height: '350px'
        };

		return(
				<div>
					<div className="box" style={ style1 }>
						<div className="box-header">
							<h3>훈련시간</h3>
							<small></small>
						</div>
						<div id="timeGraph" className="box-body" style={ style2 }>
						</div>
						<div className="box-footer"></div>
					</div>
				</div>
			);
	}
}

export default TrainingTime;