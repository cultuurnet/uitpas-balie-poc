import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntenPage } from './punten.page';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PuntenPage,
  },
  {
    path: 'omruilen',
    loadChildren: './omruilen/omruilen.module#OmruilenPageModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntenPage]
})
export class PuntenPageModule {}
