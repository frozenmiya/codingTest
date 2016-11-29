import React from 'react';

class HistoryData extends React.Component{
	drawStar(){
		let l = this.props.history.level;
		let star = '';
		for( let i = 0 ; i < l; i++ ){
			star += '★';
		}

		return star;
	}

	render(){
		let date = new Date( this.props.history.datetime );
		return(
				<div className="sl-item b-success">
					<div className="sl-icon">
						<i className="fa fa-check"></i>
					</div>
					<div className="sl-content">
						<div className="sl-date text-muted">
								{date.toString()}
						</div>
						<div>
							{ this.props.history.sessionTitle }&nbsp;
							:&nbsp;
							{ this.props.history.missionTitle }&nbsp;
							, 
							<span className="text-info">{ this.props.history.contentName }</span>.&nbsp;
							{ this.props.history.playTime }초 
							&nbsp;{this.drawStar()}
						</div>
					</div>
				</div>
			);
		
	}
}

export default HistoryData;