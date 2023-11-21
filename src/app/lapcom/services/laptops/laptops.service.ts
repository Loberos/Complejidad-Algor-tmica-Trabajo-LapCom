import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Laptop} from "../../model/laptop";


@Injectable({
  providedIn: 'root'
  })

export class LaptopsService {
  private apiUrl = 'https://josehp29.pythonanywhere.com/api';
  private apiUrl2 = 'https://josehp29.pythonanywhere.com/api/laptops';


  constructor(private http: HttpClient) {}

  getLaptopById(id: number): Observable<Laptop> {
    return this.http.get<Laptop>(`${this.apiUrl}/laptops/${id}`);
  }

  getRecommendationsById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/laptops/${id}/recommendation`);
  }

  getLaptopsByFilter(params: any): Observable<any> {
    let parameter=[];
    if(params.brand!=""){parameter.push(`brand=${params.brand}`);}
    if(params.priceMin!=null){parameter.push(`priceMin=${params.priceMin}`);}
    if(params.priceMax!=null){parameter.push(`priceMax=${params.priceMax}`);}
    if(params.typeStorage!=""){parameter.push(`typeStorage=${params.typeStorage}`);}
    if(params.cpu!=""){parameter.push(`cpu=${params.cpu}`);}
    if(params.gpu!=""){parameter.push(`gpu=${params.gpu}`);}
    if(params.order!=""){parameter.push(`order=${params.order}`);}
    let cadena="";
    for(let i=0; i<parameter.length;i++){if (i>0){cadena+="&";}cadena+=parameter[i];}
    return this.http.get<any[]>(`${this.apiUrl}/laptops/filter?${cadena}`);
  }

  filterLaptops(laptopId: number, params: any): Observable<any> {
    const queryParams = Object.entries(params)
      .filter(([key, value]) => value)
      .map(([key]) => `${key}=True`)
      .join('&');

    const urlWithParams = `${this.apiUrl2}/${laptopId}/recommendation/filter?${queryParams}`;
    
    console.log(urlWithParams)
    return this.http.get(urlWithParams);
  }

}
