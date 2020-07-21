import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logo_FYG: string = 'assets/images/F&G_logo.png';
}
