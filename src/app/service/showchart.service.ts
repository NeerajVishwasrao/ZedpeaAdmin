import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class showchartservice{
   private s_chart=new BehaviorSubject<any>(null);
    private locationUrl="/assets/analysisdatabase.json"

    constructor(private http: HttpClient) {

        
  }

  fetchchart():Observable<any>{
    console.log("getting data in service")
    return this.http.get<any>("/assets/analysisdatabase.json")
}

  

    getChart(): Observable<any> {
        return this.s_chart.asObservable();
    }
}
