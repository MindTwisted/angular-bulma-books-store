import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { AutocompleteInputComponent } from './components/autocomplete-input/autocomplete-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageTitleComponent,
    AutocompleteInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageTitleComponent,
    AutocompleteInputComponent
  ]
})
export class SharedModule {
}
