import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavigationBarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavigationBarComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
