import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from '@app/modules/shop/pages/shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: ShopPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {
}
