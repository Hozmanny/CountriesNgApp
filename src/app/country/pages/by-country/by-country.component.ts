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
  sugPaises: Country[] = [];
  showSugest: boolean = false;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }
  buscar(term: string){
    this.errorExists = false;
    this.showSugest = false;
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
    this.showSugest = true;
    console.log(termino);
    this.term = termino;
    // crear sugerencias

    this.countryService.searchCountry(termino)
      .subscribe(paises => {
        this.sugPaises = paises.splice(0,3);
      }, (err) => this.sugPaises = [])
  }

  searchSugest(term: string) {
    this.buscar(term);
  }

}
