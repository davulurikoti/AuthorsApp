import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorsListComponent } from './authors/authors-list.component';
import { CovertDashToSpaces } from './shared/convertDashToSpace.pipe';
import { StarComponent } from './shared/star.component';
import { FooterComponent } from './shared/footer.component';

@NgModule({
  declarations: [
    AppComponent,AuthorsListComponent,CovertDashToSpaces,StarComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
