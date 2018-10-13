import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  @Input() snav;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

 async logout() {
    const isOk = await Swal({
      title: 'Are you sure?',
      text: 'You want to Logout!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Leave'
    });

    if (!isOk.value) {
      return;
    }
    localStorage.setItem('tokenId', '');
    this.router.navigate(['../../account/login'], {relativeTo: this.route});
  }

  ngOnInit() {
  }

  toggleSideNav() {
    this.snav.toggle();
  }
}
