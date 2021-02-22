import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import { Country } from '@data/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.api}/all?fields=name;capital;population;flag;region`);
  }

  searchByRegion(param: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.api}/region/${ param }?fields=name;capital;population;flag;region`);
  }

  searchByCountry(param: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.api}/name/${ param }`);
  }
}
