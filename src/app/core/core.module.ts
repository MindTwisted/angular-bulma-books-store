import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { LoaderComponent } from '@app/core/components/loader/loader.component';
import { NavigationBarComponent } from '@app/core/components/navigation-bar/navigation-bar.component';
import { ScrollTopComponent } from '@app/core/components/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    LoaderComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavigationBarComponent,
    LoaderComponent,
    ScrollTopComponent
  ]
})
export class CoreModule {
}
