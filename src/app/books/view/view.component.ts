import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BookService } from '../../services/books/book.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  searchCtrl = new FormControl('');
  bookList: MatTableDataSource<any>;
  displayedColumns: string[] = ['s.no', 'ISBN', 'Author', 'Title', 'Year', 'action'];
  constructor(
    private bookServ: BookService,
    private router: Router,
  ) {
    this.searchCtrl.valueChanges.subscribe(this.applyFilter.bind(this));
    this.bookDataList();

  }

  applyFilter(value = '') {
    const filterValue = value.trim().toLowerCase();
    this.bookList.filter = filterValue;
  }

  bookDataList() {
    this.bookServ.bookGet()
      .subscribe((data: any[]) => {
        this.bookList = new MatTableDataSource(data);
        this.bookList.paginator = this.paginator;
      });
  }

  async deleteBook(book) {
    const id = book._id;
    const isOk = await Swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (!isOk.value) {
      return;
    }
    await this.bookServ.bookDelete(id);
    const index = this.bookList.data.indexOf(book);
    this.bookList.data.splice(index, 1);
    this.bookList = new MatTableDataSource<any>(this.bookList.filteredData);
    this.bookList.paginator = this.paginator;
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }

}
