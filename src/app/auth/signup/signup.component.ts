import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userServ: UserService
  ) { }


  userSignup() {
    console.log(this.user);
    this.userServ.postSignup(this.user)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate(['../login'],  {relativeTo: this.route });
    },
    (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }



}
