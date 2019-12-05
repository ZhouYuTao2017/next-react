import React,{Component} from 'react';
import Img from '@img/MyHeroCollege.jpg';
import Clock from '@svg/clock.svg';
import './index.css';
class About extends Component{
	render(){
		const pages={
			a:1
		}
		return(
			<>	
			<h1>1111</h1>
				<Clock />
				<div styleName='box' {...pages}>about</div>
				<img src={Img} alt=""/>

			</>
		)
	}
}
export default About