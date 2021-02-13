import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-by-match',
  templateUrl: './sales-by-match.component.html',
  styleUrls: ['./sales-by-match.component.css']
})
export class SalesByMatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sockMerchant(n, ar) {
    let cItem = "";
    let npos = 0;
    let nret = 0
    while (ar.length > 0) {
      cItem = ar.shift()
      npos = ar.indexOf(cItem)
      if (npos > -1) {
        ar.splice(npos, 1);
        nret++;
      }
    }
    console.log(nret);
    return nret;
  }
}
