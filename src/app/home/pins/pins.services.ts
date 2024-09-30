import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PinsApiService {
  private readonly COUNTRIES_API = `${environment.baseUrl}/countries`;

  constructor(private http: HttpClient) {}

  public getCountries$() {
    return this.http.get<string>(this.COUNTRIES_API);
  }
}