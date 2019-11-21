import App from 'next/app'
import React from 'react'
import Layout from '../src/components/layout';
import './_app.css'
class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}
	constructor(props){
		super(props)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Layout>
				<Component { ...pageProps } />
			</Layout>
		)
	}
}

export default MyApp;