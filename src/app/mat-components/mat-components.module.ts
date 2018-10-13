import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule
} from '@angular/material';

const matComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule
];


@NgModule({
  imports: matComponents,
  exports: matComponents
})
export class MatComponentsModule { }
