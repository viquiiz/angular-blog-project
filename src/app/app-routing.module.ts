import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'content/:date',
  component:ContentComponent,
  pathMatch:'full'
},
{
  path:'**',
  component:ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
