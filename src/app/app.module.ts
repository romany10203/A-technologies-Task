import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NewMaoredComponent } from './new-maored/new-maored.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ListMaoredComponent } from './list-maored/list-maored.component';
import { ItemMaoredComponent } from './item-maored/item-maored.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    NewMaoredComponent,
    ListMaoredComponent,
    ItemMaoredComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    MatSlideToggleModule,
    FormsModule,
    TranslateModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
