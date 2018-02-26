import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card'

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ChartsModule,
        MatCardModule
    ],
    declarations: [
        LayoutComponent,
        DashboardComponent,
        SidebarComponent,
        HeaderComponent
    ]
})
export class LayoutModule { }
