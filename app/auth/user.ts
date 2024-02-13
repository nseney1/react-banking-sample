
export class BaseUser {
	
	username: string;
	password: string;
	
	constructor(username: string, password: string) { 
		this.username = username;
		if (password) {
			this.password = password;
		} else { 
			this.password = "";
		}
	}


}

