import {action} from 'mobx';
class AboutAction{
	[x:string]:any;
	constructor({ AboutStore }: any) {
    this.AboutStore = AboutStore;
  }

	@action
	setUser=()=>{

	}
}
export default AboutAction;