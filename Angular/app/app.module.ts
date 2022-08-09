import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent }  from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductinfoComponent } from './productinfo/productinfo.component';

import { ChangepassComponent } from './changepass/changepass.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { VerifyuserComponent } from './verifyuser/verifyuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component'; 
import { FormsModule } from '@angular/forms';








const routes: Routes = [{path:"register" ,component:RegisterComponent},{path:"login",component:LoginComponent},{path:"productinfo",component:ProductinfoComponent},{path:"changepass",component:ChangepassComponent},{path:"productlist",component:ProductlistComponent},
{path:"forgetpass",component:ForgetpassComponent},{path:"verify",component:VerifyuserComponent},
{path:"dashboard",component:DashboardComponent},{path:"admin",component:AdminComponent}];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
    ,LoginComponent,ProductinfoComponent, ChangepassComponent, ProductlistComponent, 
    ForgetpassComponent, VerifyuserComponent, DashboardComponent, AdminComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),HttpClientModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
