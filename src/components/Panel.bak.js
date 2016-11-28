import React from 'react';

class LeftPanel extends React.Component{

	render(){

		return(
				<div id="aside" className="app-aside modal fade folded md nav-expand">
					<div className="left navside white dk">
						<div className="navbar">
							<div>
								<a className="navbar-brand" href="/clinician/main">
									<img src="" />
									
									<img src="" alt="." className="hide" />
									<span className="hidden-folded inline">Rapael rehab</span>
								</a>
								
								</div>
												</div>
												<div>
													<div className="nav-fold">
														<a href="#/app/page/profile"> 
															<span className="pull-left w-40 img-circle blue-grey-800"> 
																	최
																</span> <span className="clear hidden-folded p-x"> <span className="block _500">최지웅</span> <small className="block text-muted"><i className="fa fa-circle text-success m-r-sm"></i>online</small></span></a>
													</div>
												</div>
												<div>
													<div>
								<ul className="nav">
									<li><a href="./main">
										<span className="nav-icon">
										</span> 
									<i className="nav-label"><b className="label label-sm primary">12</b></i> 
									<span className="nav-text">환자리스트</span></a></li>
								</ul>
								</div>
												</div>
												<div>
													<nav>
														<div>
								<ul className="nav">
									<li><div className="b-b b m-v-sm"></div></li>
									<li className="no-bg"><a href="./logout"><span className="nav-icon"><i className="material-icons"></i></span> <span className="nav-text">Logout</span></a></li>
								</ul></div>
													</nav>
												</div>
											</div>
										</div>
			);
	}
}

export default LeftPanel;