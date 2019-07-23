import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookItemComponent } from '@app/modules/shop/components/book-item/book-item.component';
import { BooksListComponent } from '@app/modules/shop/components/books-list/books-list.component';
import { LoadMoreComponent } from '@app/modules/shop/components/load-more/load-more.component';
import { ShopFilterComponent } from '@app/modules/shop/components/shop-filter/shop-filter.component';
import { ShopPageComponent } from '@app/modules/shop/pages/shop-page/shop-page.component';
import { ShopRoutingModule } from '@app/modules/shop/shop-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ShopPageComponent,
    BookItemComponent,
    ShopFilterComponent,
    BooksListComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    FormsModule
  ]
})
export class ShopModule {
}
