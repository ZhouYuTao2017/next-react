import React,{Component} from 'react';
import {Button} from 'antd';
import './index.css'
class AntdTest extends Component{
	render(){
		return(
			<>
			<div styleName='box'>1313131</div>
			<Button type="primary" loading>
          Loading
        </Button>
			</>
		)
	}
}
export default AntdTest