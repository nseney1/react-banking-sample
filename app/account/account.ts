
export class Account {

	username: string;
	accountType: string;
	amount: number;

	constructor(username: string, accountType: string, amount: number) {
		this.accountType = accountType;
		this.amount = amount;
		this.username = username
	}

}

