import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};

  constructor(
    private loginServ: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  userLogin() {
    this.loginServ.postLogin(this.login)

      .subscribe((data: any) => {
        localStorage.setItem('tokenId', data.token);
        this.router.navigate(['../../books/view'], {relativeTo: this.route});
      },
        (error) => {
          console.log(error);
        });
  }

  ngOnInit() {
  }



}
