import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-strings',
  templateUrl: './two-strings.component.html',
  styleUrls: ['./two-strings.component.css']
})
export class TwoStringsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  twoStrings(s1, s2) {
    let aS1 = new Array();
    let aS2 = new Array();
    let axS1 = new Array();
    let axS2 = new Array();

    let nScan = 0;
    let nPos = 0;
    let lFind = false;
    let clast = '';

    axS1 = s1.split('').sort();
    axS2 = s2.split('').sort();
    if (axS2.length < axS1.length) {
      aS1 = axS2;
      aS2 = axS1;

    } else {
      aS1 = axS1;
      aS2 = axS2;
    }

    while (!lFind && aS1.length > 0) {
      nPos = aS1.length - 1
      if (clast === aS1[nPos]) {
        clast = aS1.pop()
      } else {
        nScan = aS2.findIndex(x => x === aS1[nPos]); // ascan

        if (nScan > -1) {
          lFind = true;
        } else {
          clast = aS1.pop();
        }

      }

    }
    console.log((lFind ? 'YES' : 'NO'));



  }

}
