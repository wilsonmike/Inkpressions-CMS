import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { TheDirtLabelComponent } from './the-dirt-label/the-dirt-label.component';

const routes: Routes = [
  { path: 'home', component: HomecontentComponent },
  { path: 'dirt', component: TheDirtLabelComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: AppComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
