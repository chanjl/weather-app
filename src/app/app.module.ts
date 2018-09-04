import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListAddComponent } from './components/list-add.component';
import { ListDisplayComponent } from './components/list-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OpenweatherService } from './services/openweather.service';

@NgModule({
  declarations: [
    AppComponent,
    ListAddComponent,
    ListDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ OpenweatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
