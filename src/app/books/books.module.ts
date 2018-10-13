import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatComponentsModule } from '../mat-components/mat-components.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    MatComponentsModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateComponent,
    ViewComponent,
    EditComponent
  ]
})
export class BooksModule { }
