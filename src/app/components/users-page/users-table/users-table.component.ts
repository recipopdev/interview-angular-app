import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
selector: 'app-users-table',
templateUrl: './users-table.component.html',
styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

	@Input({ required: true }) users: User[] = [];

	constructor() {
	}

}