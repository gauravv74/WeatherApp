import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Root } from '../Models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }
  getWeatherData(cityName :String) : Observable<Root>
{
   return  this.http.get<Root>(environment.weatherApiBaseUrl+'/'+cityName ,
    {
      headers :new HttpHeaders()
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    })
  }
}
