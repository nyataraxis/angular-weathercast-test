import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  DxDataGridModule, DxChartModule, DxSelectBoxModule,
  DxTextBoxModule,
  DxTemplateModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';
import { GridCellDataPipe } from './weathers/weathers.component';
import { WeathersComponent } from './weathers/weathers.component';


@NgModule({
  declarations: [
    AppComponent,
    WeathersComponent,
    GridCellDataPipe
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
    MatInputModule,
    MatTableModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule
  ],
  providers: [
  	WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
