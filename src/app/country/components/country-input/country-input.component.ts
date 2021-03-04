import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {
  term: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeHolder: string = '';
  debouncer: Subject<string> = new Subject();
  buscar(){
    this.onEnter.emit(this.term);
  }
  constructor() { }

  ngOnInit(): void {
    // se dispara una unica vez cuando el componente es creasdo
    this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe( value => {
        // console.log('debouncer', value);
        this.onDebounce.emit(value);
      })
  }

  pressKey( ) {
    this.debouncer.next(this.term);
  }

}
