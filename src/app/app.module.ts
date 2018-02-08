import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { ProductsComponent } from './shop/products/products.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ModelFormComponent } from './form/model-form/model-form.component';


@NgModule(
  {
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductsComponent,
    TemplateFormComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
