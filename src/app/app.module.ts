import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheDirtLabelComponent } from './the-dirt-label/the-dirt-label.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { Inkpressions } from './inkpressions.service';

@NgModule({
  declarations: [
    AppComponent,
    TheDirtLabelComponent,
    MainnavComponent,
    HomecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [Inkpressions],
  bootstrap: [AppComponent]
})
export class AppModule { }
