import React from 'react';

class Footer extends React.Component{

	render(){
		return(
				<div className="app-footer">
					<div>
						<div className="p-a text-xs">
						  <div className="pull-right text-muted">
						    © Copyright <strong>NEOFECT</strong> 
						    <a><i className="fa fa-long-arrow-up p-x-sm"></i></a>
						  </div>
						</div>
					</div>
				</div>
			);
	}
}

export default Footer;