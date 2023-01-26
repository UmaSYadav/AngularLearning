import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
    {path:'Home', component:HomeComponent},
    {path:'About', component:AboutComponent},
    {path:'Blogs', component:BlogsComponent},
    {path:'Contact', component:ContactsComponent},
    {path:'Product/:name', component:ProductComponent},
    //{path:'**', component:PageNotFoundComponent}//on this its overriding all other routings
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
