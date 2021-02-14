import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeated-string',
  templateUrl: './repeated-string.component.html',
  styleUrls: ['./repeated-string.component.css']
})
export class RepeatedStringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  repeatedString(s: string, n) {
    let nRet = 0;
    let normalTimes = 0;
    let nMiss = 0;

    normalTimes = Math.floor(n/s.length);
    nRet = normalTimes * this.countA(s);
    nMiss =  n - normalTimes * s.length;
    nRet = nRet + this.countA(s.substring(0 , nMiss));
    console.log("RepeatedStringComponent -> repeatedString -> nRet", nRet)
    return nRet;

  }

  countA(cStr)
  {
    let nRet = 0
    for (const char of cStr) {
      nRet = nRet + (char === 'a' ? 1 : 0);
    }
    return nRet;

  }

}
