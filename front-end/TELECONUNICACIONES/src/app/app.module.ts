import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexUsuarioComponent } from './index-usuario/index-usuario.component';
import { RequestUsuarioComponent } from './request-usuario/request-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { IndexAdminComponent } from './index-admin/index-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexUsuarioComponent,
    RequestUsuarioComponent,
    EditUsuarioComponent,
    IndexAdminComponent,
    EditAdminComponent,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,MatDialogModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
