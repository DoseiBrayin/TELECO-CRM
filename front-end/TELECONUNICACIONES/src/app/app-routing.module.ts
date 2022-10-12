import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexUsuarioComponent} from './index-usuario/index-usuario.component';
import { RequestUsuarioComponent} from './request-usuario/request-usuario.component';
import { EditUsuarioComponent} from './edit-usuario/edit-usuario.component';
import { IndexAdminComponent} from './index-admin/index-admin.component';
import { EditAdminComponent} from './edit-admin/edit-admin.component';
import { RequestAdminComponent} from './request-admin/request-admin.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index-usuario', component: IndexUsuarioComponent },
  { path: 'request-usuario', component: RequestUsuarioComponent},
  { path: 'edit-usuario', component: EditUsuarioComponent},
  { path: 'index-admin', component: IndexAdminComponent},
  { path: 'edit-admin', component: EditAdminComponent},
  { path: 'request-admin', component: RequestAdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
