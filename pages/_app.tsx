import App from 'next/app'
import React from 'react'

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
		return <Component { ...pageProps } />
	}
}

export default MyApp;