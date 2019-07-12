import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AppRoutingModule } from '../app-routing.module';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

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
export class CoreModule { }
