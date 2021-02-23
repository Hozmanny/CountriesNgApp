import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';



@NgModule({
  declarations: [CapitalComponent, ByCountryComponent, ByRegionComponent, ShowCountryComponent],
  imports: [
    CommonModule
  ],
  exports: [CapitalComponent, ByCountryComponent, ByRegionComponent, ShowCountryComponent]
})
export class CountryModule { }
