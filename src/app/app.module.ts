import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProductComponent } from './components/product/product.component';
import { UsersModule } from './users/users.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogsComponent,
    ContactsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AdminRoutingModule,
    EmployeeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
