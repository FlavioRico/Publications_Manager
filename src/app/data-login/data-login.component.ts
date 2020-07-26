import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-data-login',
  templateUrl: './data-login.component.html',
  styleUrls: ['./data-login.component.css']
})
export class DataLoginComponent implements OnInit {
  id: number;
  phone: number;
  route: string;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login(){
    const user = {id: this.id, phone: this.phone};
    this.loginService.logInUser(user).subscribe( data => {
      console.log('el data es:', data);
    });
    console.log(this.id, this.phone);
  }
}
