import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {

  constructor(private route: Router) { 

  }

  ngOnInit() {

  }

  @ViewChild('cityForm')
  cityForm: NgForm;
  cityList: string[] = ['Singapore', 'Kuala Lumpur', 'Tokyo', 'Bangkok', 'Hong Kong'];

  processForm() {
    let name: string = "";
    name = this.cityForm.value["name"];
    if (this.cityList.indexOf(name) < 0) { //city is not in the list so add to list
      this.cityList.push(name);
    }
    this.cityForm.resetForm();
  }

  selectCity(name: string) {
    console.log(name);
    this.route.navigate(['/display', name]);
  }
}
