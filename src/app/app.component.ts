import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from '@app/core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  constructor(public loaderService: LoaderService, private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
