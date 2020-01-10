import App from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react';
import Layout from '@/components/layout';
import States from '@/stores/state';
import Actions from '@/stores/action';
import initializeStore from '@/stores/store';
import './_app.css';
class MyApp extends App {
	[x:string]:any;
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		const mobxStore = initializeStore();
    ctx.mobxStore = mobxStore;
		return { pageProps ,initialMobxState: mobxStore,}
	}
	constructor(props) {
		super(props)
		const isServer = !process.browser;
    this.stores = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
    this.actions = new Actions(this.stores);
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Provider {...this.stores} {...this.actions}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		)
	}
}

export default MyApp;