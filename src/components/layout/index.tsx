import React from 'react';
import './index.css';

class Layout extends React.Component{
	render(){
		const {children} = this.props;
		return(
			<>
				{children}
				<div>footer1</div>
			</>
		)
	}
}

export default Layout;