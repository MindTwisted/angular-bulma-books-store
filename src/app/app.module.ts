import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationBarComponent,
        IndexPageComponent,
        ShopPageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', component: IndexPageComponent},
            {path: 'shop', component: ShopPageComponent}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
