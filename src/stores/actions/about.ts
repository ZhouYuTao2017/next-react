import {action} from 'mobx';
class AboutAction{
	[x:string]:any;
	constructor({ AboutStore }: any) {
    this.AboutStore = AboutStore;
  }

	@action
	setUser=()=>{
		this.AboutStore.user='123'
	}
}
export default AboutAction;