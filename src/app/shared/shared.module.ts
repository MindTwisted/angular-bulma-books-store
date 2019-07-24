import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteInputComponent } from '@app/shared/components/autocomplete-input/autocomplete-input.component';
import { PageTitleComponent } from '@app/shared/components/page-title/page-title.component';
import { ClickOutsideCloseDirective } from './directives/click-outside-close.directive';

@NgModule({
  declarations: [
    PageTitleComponent,
    AutocompleteInputComponent,
    ClickOutsideCloseDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageTitleComponent,
    AutocompleteInputComponent,
    ClickOutsideCloseDirective
  ]
})
export class SharedModule {
}
