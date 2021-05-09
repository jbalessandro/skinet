import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutDetailsComponent } from './produt-details/produt-details.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: ':id', component: ProdutDetailsComponent,  data: { breadcrumb: { alias: 'productDetails' }}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
