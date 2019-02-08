import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['.error{ border-color: red}', '.success{ border-color: green}']
})
export class LoginComponent implements OnInit {
  user: any = {};
  city = '';
  constructor() { }
  onSubmit() {
    
   
    if(this.city){
      console.log(this.user);
      console.log("city:"+this.city);
    }
  }
  ngOnInit() {
  }

}

