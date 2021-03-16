import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  activateRegion(region: string) {
    this.activeRegion = region;
    // hacer el llamado al servicio
  }

  getCssClass(region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  search(region: string): any {
    if (region === this.activeRegion) {
      return
    }
    this.countries = [];
    this.countryService.searchRegion(region)
      .subscribe( (country) => {
        console.log(country)
        this.countries = country;
      })
  }

}
