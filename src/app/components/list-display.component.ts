import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OpenweatherService } from '../services/openweather.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit {
  result = {
    name: "",
    temp: "0",
    desc: ""
  };

  @ViewChild('weatherForm')
  weatherForm: NgForm;

  constructor(public openWeatherSvc: OpenweatherService, 
    private activatedRoute: ActivatedRoute,
    private location: Location) {}

  cityName:string;

  ngOnInit() {
    //this.openWeatherSvc.sharedData = "changed";
    //console.log(this.openWeatherSvc.sharedData);

    this.cityName = this.activatedRoute.snapshot.params.cityName;
    console.log(this.cityName);
    this.result.name = this.cityName;
    this.openWeatherSvc.getWeather(this.cityName).subscribe((data: any) => {
      console.log(data);
      this.result.temp = (data.main.temp - 273).toFixed(2);
      this.result.desc = data.weather[0].description;
    });
  }

  back() {
    this.location.back();
  }
}
