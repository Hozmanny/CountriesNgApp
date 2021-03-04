import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {
  country!: Country;
  // todo lo necesario para suscribirse a los cambios en el URL
  constructor(
    private activatedRoute: ActivatedRoute,
    private _countryService: CountryService  
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log(id);
    //     this._countryService.getCountryByAlpha(id)
    //       .subscribe( country => {
    //         console.log(country)
    //       });
    //   });
    this.activatedRoute.params
      .pipe(
        switchMap( (params) => this._countryService.getCountryByAlpha(params.id) ),
        tap(console.log)
      )
      .subscribe( country => {
        // console.log(country);
        this.country = country;
      })
  }

}
