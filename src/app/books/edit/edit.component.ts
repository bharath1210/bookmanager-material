import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/books/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bookList: any = {};
  bookId: string;
  constructor(
    private bookServ: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  editBook() {

    this.bookServ.bookEdit(this.bookList)
      .subscribe((data) => {
        Swal(
          'Success',
          'Book Data Updated!',
          'success'
        );
        this.bookList = data;
      });
      this.router.navigate(['../../view'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.bookServ.bookGetById(this.bookId)
      .subscribe(result => {
        this.bookList = result;
      });
  }


}
