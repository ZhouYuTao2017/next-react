import AboutStore from './states/about';

class RootStore{
	[x:string]:any;
	constructor(initialStore?: any){
		this.AboutStore=new AboutStore();
	}
}
export default RootStore;