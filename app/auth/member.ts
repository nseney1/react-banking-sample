import {BaseUser} from './user'

export class Member extends BaseUser {
	
	firstName: string;
	lastName: string;
	
	mobile: string;
	preferences: { text_subscription: boolean, email_subscription: boolean}
	
	constructor(username: string, password: string) {
		super(username, password);
		this.firstName = "";
		this.lastName = "";
		this.mobile = "";
		this.preferences = { text_subscription: false, email_subscription: false };
	} 

}

