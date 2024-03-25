import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './users/pages/dynamic-table/dynamic-table.component';
import { UserInformationComponent } from './users/pages/user-information/user-information.component';
import { userInformationGuard } from './guards/user-information.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DynamicTableComponent,
  },
  {
    path: 'user-information',
    component: UserInformationComponent,
    canActivate: [userInformationGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
