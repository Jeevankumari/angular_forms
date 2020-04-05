import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { UsersListComponent } from './users/users-list.component';
import { SingleUserComponent } from './users/single-user.component';

const routes: Routes = [
  { path : 'create', component: CreateEmployeeComponent },
  { path: 'list', component: UsersListComponent },
  { path: 'user/:id', component: SingleUserComponent },
  { path: "", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
