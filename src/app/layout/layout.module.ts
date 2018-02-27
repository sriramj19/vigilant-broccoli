import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        HttpClientModule,
        ChartsModule,
        MatCardModule,
        MatTableModule
    ],
    declarations: [
        LayoutComponent,
        DashboardComponent,
        SidebarComponent,
        HeaderComponent
    ]
})
export class LayoutModule { }
