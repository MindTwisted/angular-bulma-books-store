import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopRoutes } from './routes/routes';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShopPageComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(shopRoutes),
    SharedModule
  ]
})
export class ShopModule {
}
