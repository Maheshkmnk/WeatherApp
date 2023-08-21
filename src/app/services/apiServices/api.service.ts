import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getData(city:string):Observable<any>{
  // let  UrlForWeather1= `http://api.weatherstack.com/current?access_key=placeYourKeyHere&query=${city}`
   let UrlForWeather =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="placeYourKeyHere"&units=metric`
    return this.http.get(UrlForWeather);
    return this.http.get('assets/user.json');
  }
}
