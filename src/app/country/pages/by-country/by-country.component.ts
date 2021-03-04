import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  errorExists: boolean = false;
  paises: Country[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }
  buscar(term: string){
    this.errorExists = false;
    this.term = term;

    this.countryService.searchCountry(term)
      .subscribe( (country) => {
        console.log(country);
        this.paises = country;
      }, (err) => {
        this.errorExists = true;
        this.paises = [];
        console.log('error:');
        console.info(err);
      });
  }
  sugerencias(termino: string) {
    this.errorExists = false;
    console.log(termino);
    // crear sugerencias
  }

}
