import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http :HttpClient) { }

  getBreweries(){
    return this.http.get("https://api.openbrewerydb.org/breweries");
  }

  getDetailsByCity(data:any){
    let httpParams =new HttpParams ({
      fromObject:{
        by_city:data
      }
    });
    return this.http.get("https://api.openbrewerydb.org/breweries" ,{params:httpParams})
  }

  getDetailsByState(data:any){
    let httpParams =new HttpParams ({
      fromObject:{
        by_state:data 
        
      }
    });
    return this.http.get("https://api.openbrewerydb.org/breweries" ,{params:httpParams})
    
  }

  getDetailsByBreweryType(data:any){
    let httpParams =new HttpParams ({
      fromObject:{
        by_type:data
      }
    });
    return this.http.get("https://api.openbrewerydb.org/breweries" ,{params:httpParams})
  }
}
