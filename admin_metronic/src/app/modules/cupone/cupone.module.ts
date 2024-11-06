import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuponeRoutingModule } from './cupone-routing.module';
import { CuponeComponent } from './cupone.component';
import { AddNewCuponeComponent } from './add-new-cupone/add-new-cupone.component';
import { EditNewCuponeComponent } from './edit-new-cupone/edit-new-cupone.component';
import { DeleteNewCuponeComponent } from './delete-new-cupone/delete-new-cupone.component';
import { ListCuponeComponent } from './list-cupone/list-cupone.component';


@NgModule({
  declarations: [CuponeComponent, AddNewCuponeComponent, EditNewCuponeComponent, DeleteNewCuponeComponent, ListCuponeComponent],
  imports: [
    CommonModule,
    CuponeRoutingModule
  ]
})
export class CuponeModule { }
