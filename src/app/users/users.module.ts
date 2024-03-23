import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserInformationComponent } from './pages/user-information/user-information.component';
import { DynamicTableComponent } from './pages/dynamic-table/dynamic-table.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from '../app-routing.module';
// import { ListModule } from 'primeng/list';

@NgModule({
  declarations: [
    UserInformationComponent,
    DynamicTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    ButtonModule,
    InputTextModule,
    TableModule,
    CardModule,
    PanelModule
  ]
})
export class UsersModule { }
