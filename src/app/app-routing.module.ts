import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { PlanosComponent } from './planos/planos.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'planos', component: PlanosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
