import AboutAction from './actions/about';
class Actions{
	[x:string]:any;
	constructor(rootStore:any){
		this.AboutAction=new AboutAction(rootStore);
	}
}
export default Actions;