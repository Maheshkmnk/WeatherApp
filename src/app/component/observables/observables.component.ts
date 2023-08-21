import { Component, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/apiServices/api.service';
import {map, filter, merge} from 'rxjs/operators'

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  data$!: Observable<any>;
  users!:Observable<any>;
  city:string="kakinada";
  weatherData!:any;

  constructor(private http:HttpClient, private apiService:ApiService){}
  
  ngOnInit(): void{
    this.apiService.getData(this.city).subscribe((data) => {
      console.log("data",data)
      this.weatherData=data;
    });
  //  this.users = this.apiService.getData();
}

fetchWeather(){
  console.log(this.city)
  this.ngOnInit();
  
}
  // getData(): Observable<any>{
  //   return this.http.get('assets/user.json');
  //   // http://localhost:9999/api/allproducts
  // }
}
