import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitconBrlComponent } from './bitcon-brl/bitcon-brl.component';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin-brl', component: BitconBrlComponent},
  {path: 'repo', component: RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
