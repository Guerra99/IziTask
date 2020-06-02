import { Component, OnInit } from '@angular/core';
import { SelectPure } from 'select-pure';

@Component({
  selector: 'app-novo-time',
  templateUrl: './novo-time.component.html',
  styleUrls: ['./novo-time.component.scss']
})
export class NovoTimeComponent implements OnInit {

  list: ['a', 'b', 'c', 'd', 'e'];
  constructor() { }

  ngOnInit(): void {
  }

}
