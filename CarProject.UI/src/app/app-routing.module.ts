import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcarComponent } from './addcar/addcar.component';
import { AppComponent } from './app.component';
import { CarlistComponent } from './carlist/carlist.component';
import { SafetyComponent } from './safety/safety.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: CarlistComponent },
  { path: 'safety', component: SafetyComponent },
  { path: 'add', component: AddcarComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
