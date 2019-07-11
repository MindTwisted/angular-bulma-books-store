import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  constructor(public loaderService: LoaderService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
