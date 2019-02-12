import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	regForm : FormGroup;
	submitted = false;
	constructor(private formBuilder : FormBuilder) { }

	ngOnInit() {
		this.regForm = this.formBuilder.group({
			fname: ['', Validators.required],
			lname: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: ['', [Validators.required, Validators.pattern("[0-9]{0,10}"), Validators.minLength(10), Validators.maxLength(10)]],
			brief: ['', Validators.required]
		});
	}

	get f(){
		return this.regForm.controls;
	}

	onSubmit(){
		this.submitted = true;

		if (this.regForm.invalid) {
			return;
		}

		
		console.log('Success');
		console.log(this.regForm);
	}

}
