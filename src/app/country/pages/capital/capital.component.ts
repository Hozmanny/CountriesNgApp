import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  errorExists: boolean = false;
  term: string = '';
  paises: Country[] = []
  constructor(private _countryService: CountryService) { }

  ngOnInit(): void {
  }

  buscar(term: string) {
    this.errorExists = false;
    this.term = term;

    this._countryService.searchCapital(term)
      .subscribe( (country) => {
        console.log(country);
        this.paises = country;
      }, (error) => {
        this.errorExists = true;
        this.paises = [];
        console.log('error: ');
        console.info(error);
      });
  }

  sugerencias(term: string) {
    this.errorExists = false;
    console.log(term);
    // crear sugerencias
  }

}
