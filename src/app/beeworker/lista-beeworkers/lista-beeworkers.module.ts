import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaBeeworkersPageRoutingModule } from './lista-beeworkers-routing.module';

import { ListaBeeworkersPage } from './lista-beeworkers.page';
import { BeeworkerAvatarModule } from '../beeworker-avatar/beeworker-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaBeeworkersPageRoutingModule,
    BeeworkerAvatarModule
  ],
  declarations: [ListaBeeworkersPage]
})
export class ListaBeeworkersPageModule {}
