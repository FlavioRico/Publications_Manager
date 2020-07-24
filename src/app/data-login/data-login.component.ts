import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-login',
  templateUrl: './data-login.component.html',
  styleUrls: ['./data-login.component.css']
})
export class DataLoginComponent implements OnInit {
  email: string;
  phone: number;
  route: string;
  id: number = 2;
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login(){
    console.log(this.email, this.phone);
    // const conditionUser = this.email == this.users[0].email;
    // const conditionPhone = this.phone == this.users[0].phone;
    // if (conditionUser && conditionPhone){
    //   this.route = '/profile';
    //   console.log(this.route);
    // }else{
    //   this.route = '/**';
    //   console.log(this.route);
    // }
  }

}
