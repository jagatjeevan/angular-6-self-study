import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-customers',
  templateUrl: './filter-customers.component.html',
  styleUrls: ['./filter-customers.component.scss']
})
export class FilterCustomersComponent implements OnInit {
  private _filter: string;
  placeholder: string = 'Name / City / Order total';

  @Input() get input() {
    return this._filter;
  }

  set input(val: string) {
    this._filter = val;
    this.changed.emit(this.input); // Raise the changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }

}
