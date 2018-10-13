import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/books/book.service';
import { MatComponentsModule } from '../../mat-components/mat-components.module';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user: any = {};
  message = 'success';
  action = 'close';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private bookServ: BookService,
    private snackBar: MatSnackBar
  ) { }

  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition

    });
  }

  createBook(form) {
    this.bookServ.bookPost(this.user)
      .subscribe((data) => {
        this.openSnackBar();
        form.resetForm();
      });
  }

  ngOnInit() {
  }

}
