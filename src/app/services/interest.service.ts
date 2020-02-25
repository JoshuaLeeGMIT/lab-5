import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Interest {
  compound: number = 1;
  loan: number = 5000;
  rate: number = 0.01;

  constructor() { }

  calcInt(years: number): number {
    let total: number;

    for (let i: number = 0; i < years; ++i)
      total = this.loan * Math.pow((1 + this.rate / this.compound), (this.compound * i));

    return total;
  }
}
