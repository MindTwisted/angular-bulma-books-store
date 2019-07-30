import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteInputComponent } from '@app/shared/components/autocomplete-input/autocomplete-input.component';
import { PageTitleComponent } from '@app/shared/components/page-title/page-title.component';
import { ClickOutsideDirective } from '@app/shared/directives/click-outside.directive';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    PageTitleComponent,
    AutocompleteInputComponent,
    ClickOutsideDirective,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageTitleComponent,
    AutocompleteInputComponent,
    ClickOutsideDirective,
    InputComponent
  ]
})
export class SharedModule {
}
