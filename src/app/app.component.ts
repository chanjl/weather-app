import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpenweatherService } from './services/openweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  constructor(private openWeatherSvc: OpenweatherService, private route: Router) { }

  ngOnInit() {
    this.openWeatherSvc.getWeather('Singapore')
      .subscribe((data: any) => {
        console.log(data);
      });
  }     
}
