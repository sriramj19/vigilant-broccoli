import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Stock } from './dashboard.model';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    constructor(private dashboardServ: DashboardService) {

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.fetchFeaturedStock();
        this.fetchMonthlySales();
        this.fetchYearlySales();
        this.fetchStockWiseSales();
        this.fetchSalesTypeWiseSale();
    }

    /**Line Chart Data */
    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true
    };

    private fetchMonthlySales() {
        this.dashboardServ.getMonthlySales().subscribe((data: any) => {
            if (data) {
                this.lineChartData = data.values;
                this.lineChartLabels = data.xlabel;
            }
        }, (err: any) => {
            console.log(err)
        })
    }
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    public lineChartColors: Array<any>;
    /*************** */


    /**bar chart data */
    public barChartLabels: string[] = [];
    public barChartData: any[] = [];

    private fetchYearlySales() {
        this.dashboardServ.getYearlySales().subscribe((data: any) => {
            if (data) {
                this.barChartData = data.values;
                this.barChartLabels = data.xlabel;
            }
        }, (err: any) => {
            console.log(err)
        })
    }
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    /**************** */

    /**Doughnut chart starts */
    public doughnutChartLabels: string[] = [];
    public doughnutChartData: number[] = [];
    private fetchSalesTypeWiseSale() {
        this.dashboardServ.getSaleTypeWiseSales().subscribe((data: any) => {
            if (data) {
                this.doughnutChartData = data.values;
                this.doughnutChartLabels = data.label;
            }
        }, (err: any) => {
            console.log(err)
        })
    }
    public doughnutChartType: string = 'doughnut';
    /*************** */

    /** Pie chart starts*/
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];
    private fetchStockWiseSales() {
        this.dashboardServ.getStockWiseSales().subscribe((data: any) => {
            this.pieChartData = data.values;
            this.pieChartLabels = data.label;
        }, (err: any) => {
            console.log(err)
        })
    }
    public pieChartType: string = 'pie';
    /************** */

    /**Table data */
    displayedColumns = [];
    dataSource = [];
    private fetchFeaturedStock() {
        this.dashboardServ.getFeaturedStock().subscribe((data: any) => {
            if (data) {
                this.displayedColumns = data.columns;
                this.dataSource = data.data;
            }
        }, (err: any) => {
            console.log(err);
        })
    }
    /********* */
}
