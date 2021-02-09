import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheDirtLabelComponent } from './the-dirt-label/the-dirt-label.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { HomecontentComponent } from './homecontent/homecontent.component';

@NgModule({
  declarations: [
    AppComponent,
    TheDirtLabelComponent,
    MainnavComponent,
    HomecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
