import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
selector: 'app-users-page',
templateUrl: './users-page.component.html',
styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {

	public users: User[] = [
		{ firstName: 'John', surname: 'Doe'},
		{ firstName: 'Jane', surname: 'Doe'},
		{ firstName: 'Joe', surname: 'Bloggs'},
	];

	constructor() {
	}

}