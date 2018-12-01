import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _deletedItem?: number;
  placeholder: string = 'Delete the record';

  @Input() get input() {
    return this._deletedItem;
  }

  set input(val: number) {
    this._deletedItem = val;
  }

  delteRow() {
    this.changed.emit(this.input);
    this._deletedItem = null;
  }

  @Output() changed: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
