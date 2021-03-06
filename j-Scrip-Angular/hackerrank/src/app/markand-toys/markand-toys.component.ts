import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markand-toys',
  templateUrl: './markand-toys.component.html',
  styleUrls: ['./markand-toys.component.css']
})
export class MarkandToysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  maximumToys(prices, k) {
    let lExit = false;
    let nConnt = 0;
    let nIndex = 0;


    prices.sort(function(a, b) {
      return a - b;
    });
    nIndex = 0;
    nConnt = 0;
    while (!lExit && nIndex <= prices.length)
    {
      if((nConnt + prices[nIndex]) <= k)
      {
        nConnt = nConnt+ prices[nIndex];
        nIndex++;
      }
      else{
        lExit = true;
      }

    }

    console.log(nIndex);
    return nIndex;


  }

}
