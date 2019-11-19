import React,{Component} from 'react';
import Img from '@/img/MyHeroCollege.jpg';
import './index.css';
class About extends Component{
	render(){
		const pages={
			a:1
		}
		return(
			<>	
				<div styleName='box' {...pages}>about</div>
				<img src={Img} alt=""/>
			</>
		)
	}
}
export default About