import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    HeaderComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
