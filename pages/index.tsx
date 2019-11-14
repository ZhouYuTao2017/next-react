
import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
class App extends Component {

	render() {
		return (
			<>
				<Head>
					<title>首页</title>
				</Head>
				<div>Hello World12</div>
				<Link href={{pathname:'/about',query:{name:'123'}}}>about</Link>
			</>
		)
	}
}
export default App;