import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserInformationComponent } from './pages/user-information/user-information.component';
import { DynamicTableComponent } from './pages/dynamic-table/dynamic-table.component';

import { AppRoutingModule } from '../app-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';

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
    CardModule,
    InputTextModule,
    PanelModule,
    ProgressSpinnerModule,
    TableModule,
  ]
})
export class UsersModule { }
