import { Component, OnInit } from '@angular/core';
import { Root } from './Models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherData?: Root;
  cityName :String ="pune";
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";

  }
  onSubmit()
  {
this.getWeatherData(this.cityName);
this.cityName = "";
  }
  private getWeatherData(cityName :String)
  {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: response => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}
