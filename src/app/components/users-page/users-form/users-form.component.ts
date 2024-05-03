import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
selector: 'app-users-form',
templateUrl: './users-form.component.html',
styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent {

	public form: FormGroup = new FormGroup({
		firstName: new FormControl(null),
		surname: new FormControl(null),
	});

	constructor() {
	}

	onSubmit() {
	}
}