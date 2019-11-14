import React,{Component} from 'react';
import './index.css';
class About extends Component{
	render(){
		const pages={
			a:1
		}
		return(
			<>	
				<div styleName='box' {...pages}>about</div>
			</>
		)
	}
}
export default About