import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BitconBrlComponent } from './bitcon-brl/bitcon-brl.component';
import { GithubComponent } from './github/github.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'bitcoin-brl', component: BitconBrlComponent},
  {path: 'github', component: GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
