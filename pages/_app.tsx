import App from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react';
import Layout from '@/components/layout';
import './_app.css';
class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}
	constructor(props) {
		super(props)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Provider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		)
	}
}

export default MyApp;