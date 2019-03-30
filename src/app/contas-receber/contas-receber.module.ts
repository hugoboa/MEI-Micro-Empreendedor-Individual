import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContasReceberPage } from './contas-receber.page';

const routes: Routes = [
  {
    path: '',
    component: ContasReceberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContasReceberPage]
})
export class ContasReceberPageModule {}
