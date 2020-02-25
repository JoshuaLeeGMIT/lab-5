import { Component, OnInit } from '@angular/core';

import { Interest } from '../services/interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {
  total: number;
  years: number;

  constructor(private i: Interest) { }

  calcInt(): void {
    this.total = this.i.calcInt(this.years);
  }

  ngOnInit(): void {
  }

}
