import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {
  user;
  id: number;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log("Debug en data user: ", this.id);
    }
    );
    this.fetchUser();
  }
  fetchUser(){
    this.loginService.getDataUser(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
}
