import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sherlock',
  templateUrl: './sherlock.component.html',
  styleUrls: ['./sherlock.component.css']
})
export class SherlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Complete the sherlockAndAnagrams function below.
  sherlockAndAnagrams(s: string) {
    let ax = {} //objeto : mais eficas e elegante que ascan
    let aDebug = new Array();
    let cSubStr = ''
    let nRet = 0

    for (let i = 1; i < s.length; i++) { // quantos caracteres vai pegar
      ax = {}
      for (let j = 0; j + i <= s.length; j++) {
        cSubStr = s.substr(j, i); // take a piece of the string
        if (cSubStr) {//check if it is a valid string
          cSubStr = cSubStr.split('').sort().join(''); // transform in array sort alphabeticaly and turn in to string again
          if (ax[cSubStr]) {
            nRet = nRet + ax[cSubStr]
            ax[cSubStr]++
          }
          else {
            ax[cSubStr] = 1
          }
        }
      }
      aDebug.push(ax);




    }
    console.log(" file: sherlock.component.ts ~ line 40 ~ SherlockComponent ~ sherlockAndAnagrams ~ aDebug", aDebug)

    console.log(nRet);

    return nRet



  }


}
