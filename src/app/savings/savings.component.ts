import { Component, OnInit } from '@angular/core';

import { Interest } from '../services/interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  total: number;
  years: number;

  constructor(private i: Interest) { }

  calcInt(): void {
    this.total = this.i.calcInt(this.years);
  }

  ngOnInit(): void {
  }

}
