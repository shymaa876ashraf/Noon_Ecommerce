import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandComponent } from './adminpanel/brand/brand.component';
import { OfferComponent } from './adminpanel/offer/offer.component';
import { SupplierComponent } from './adminpanel/supplier/supplier.component';
import { MaincategoryComponent } from './maincategory/maincategory.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { AppModule } from 'src/app/app.module';
import { ProductComponent } from './adminpanel/product/product.component';
import { ImageComponent } from './adminpanel/image/image.component';
import { AdvertisementComponent } from './adminpanel/advertisement/advertisement.component';


const routes:Routes=[
  {path:'panel',component:AdminpanelComponent,
  children:[
    {path:'brand',component:BrandComponent},
    {path:'maincategory',component:MaincategoryComponent},
    {path:'offer',component:OfferComponent},
    {path:'supplier',component:SupplierComponent},
    {path:'category',component:CategoryComponent},
    {path:'subcategory',component:SubcategoryComponent},
    {path:'offer',component:OfferComponent},
    {path:'supplier',component:SupplierComponent},
    {path:'supplier',component:SupplierComponent},
    {path:'product',component:ProductComponent},
    {path:'image',component:ImageComponent},
    {path:'advertisement',component:AdvertisementComponent},  
    {path:'advertisement',component:AdvertisementComponent},
    {path:'offer',component:OfferComponent}, 
  ]
},
   {path:'',redirectTo:'panel',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AdminpanelComponent,
    BrandComponent,
    OfferComponent,
    SupplierComponent,
    MaincategoryComponent,
    CategoryComponent,
    SubcategoryComponent,
    SupplierComponent,
    ProductComponent,
    ImageComponent,
    OfferComponent,
    SupplierComponent,
    AdvertisementComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
