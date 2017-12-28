import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import {MatInputModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';
import { WeathersComponent } from './weathers/weathers.component';


@NgModule({
  declarations: [
    AppComponent,
    WeathersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
  	WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
