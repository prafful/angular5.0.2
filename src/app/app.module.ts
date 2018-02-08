import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { ProductsComponent } from './shop/products/products.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ModelFormComponent } from './form/model-form/model-form.component';
import { ConsumeService1Component } from './consume-service1/consume-service1.component';
import { UserServiceService } from './service/user-service.service';
import { ConsumeService2Component } from './consume-service2/consume-service2.component';
import { HttpServiceComponent } from './http/http-service/http-service.component';



@NgModule(
  {
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductsComponent,
    TemplateFormComponent,
    ModelFormComponent,
    ConsumeService1Component,
    ConsumeService2Component,
    HttpServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'mycatalog',
        component:CatalogComponent
      },
      {
        path:'myproducts',
        component:ProductsComponent

      },
      {
        path:'template-form',
        component:TemplateFormComponent
      },
      {
        path:'model-form',
        component:ModelFormComponent
      },
      {
        path:'service1',
        component:ConsumeService1Component
      },
      {
        path:'service2',
        component:ConsumeService2Component
      },
      {
        path:'http-service',
        component:HttpServiceComponent
      }
    ])
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
