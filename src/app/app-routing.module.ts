import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'materials', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'work', component: HomeComponent },
  { path: 'pro', component: HomeComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
