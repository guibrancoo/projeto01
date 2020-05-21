import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitconBrlComponent } from './bitcon-brl/bitcon-brl.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin-brl', component: BitconBrlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
