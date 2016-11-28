import React from 'react';

class TrainingTime extends React.Component{
	render(){
		let style1 = {
			height : '450px'
		};

		let style2 = {
            height: '400px'
        };

		return(
				<div>
					<div className="box" style={style1}>
						<div className="box-header">
							<h3>훈련시간</h3>
							<small></small>
						</div>
						<div id="d3Test" className="box-body" style={style2}>
						</div>
						<div className="box-footer"></div>
					</div>
				</div>
			);
	}
}

export default TrainingTime;