import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {

  constructor(private route: Router, protected localStorage: LocalStorage) { 

  }

  ngOnInit() {
    this.localStorage.getItem<string[]>('cityList').subscribe((data)=>{
      console.log(data);
      if (data != null) 
        this.cityList = data;
      else this.cityList = ['Singapore', 'Kuala Lumpur', 'Tokyo', 'Bangkok', 'Hong Kong']});
      
      //clear all data
      //this.localStorage.clear().subscribe(()=>{});
  }

  @ViewChild('cityForm')
  cityForm: NgForm;
  cityList: string[] = ['Singapore', 'Kuala Lumpur', 'Tokyo', 'Bangkok', 'Hong Kong'];

  processForm() {
    let name: string = "";
    name = this.cityForm.value["name"];
    if (name != null && name != "" && this.cityList.indexOf(name) < 0) { //city is not in the list so add to list
      this.cityList.push(name);
      this.localStorage.setItem('cityList', this.cityList).subscribe(()=>{});
    }
    this.cityForm.resetForm();
  }

  selectCity(name: string) {
    console.log(name);
    this.route.navigate(['/display', name]);
  }

  view(data:any) {
    console.log(data);
  }
}
