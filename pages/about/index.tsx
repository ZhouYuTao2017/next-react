import React,{Component} from 'react';
import {inject,observer} from 'mobx-react';
import Img from '@img/MyHeroCollege.jpg';
import clock from '@svg/clock.svg';
import './index.css';

interface Props{
	user:string;
	setUser:()=>void;
}
@inject((stores:any)=>({
	user:stores.AboutStore.user,
	setUser:stores.AboutAction.setUser
}))
@observer
class About extends Component<Props>{
	render(){
		const pages={
			a:1
		}
		return(
			<>	
			<h1>1111</h1>
				<svg>
				<use xlinkHref={clock} />
				</svg>
				<div styleName='box' {...pages}>about</div>
				{this.props.user}
				<button onClick={this.props.setUser}>点击</button>
			</>
		)
	}
}
export default About