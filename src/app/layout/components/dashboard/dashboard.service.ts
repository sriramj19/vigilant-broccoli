import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient) {

    }

    public baseUrl: string = 'http://10.0.0.181:3000/'

    public getMonthlySales(): Observable<any> {
        return this.http.get<any>(this.baseUrl + "sales/monthly");
    }

    public getYearlySales(): Observable<any> {
        return this.http.get<any>(this.baseUrl + "sales/yearly");
    }

    public getStockWiseSales(): Observable<any> {
        return this.http.get<any>(this.baseUrl + "sales/stock-type");
    }

    public getSaleTypeWiseSales(): Observable<any> {
        return this.http.get<any>(this.baseUrl + "sales/type");
    }

    public getFeaturedStock(): Observable<any> {
        return this.http.get<any>(this.baseUrl + "stock/featured");
    }
}