import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error404/error404.module').then(m => m.Error404Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
