import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'f0de6a752a286d7ed276284f5c445202';

  constructor(private http: HttpClient) { }

  getWeather(city : string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
  }
}
