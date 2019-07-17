import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopFilterComponent } from './components/shop-filter/shop-filter.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    BookItemComponent,
    ShopFilterComponent
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
