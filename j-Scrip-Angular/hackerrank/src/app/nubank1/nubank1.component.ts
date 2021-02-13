import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nubank1',
  templateUrl: './nubank1.component.html',
  styleUrls: ['./nubank1.component.css']
})
export class Nubank1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  decode(encodedString) {
    let cStrOrder = '';
    let aWords = new Array();
    let cCandidate = '';
    let cEncodNospace = '';
    let cWord = '';
    cEncodNospace = encodedString.trim();
    cStrOrder = this.reverseStr(cEncodNospace);
    aWords = this.splitWords(cStrOrder);
    for (let i = 0; i < aWords.length; i++) {
      for (let j = 0; j < aWords[i].length; j++) {
        cCandidate = cCandidate.concat(aWords[i].charAt(j))
        if (this.vldChar(cCandidate)) {
          cWord = cWord.concat(String.fromCharCode(Number(cCandidate)));
          cCandidate = '';
        }
      }
      cWord = cWord.concat(' ');
    }
    cWord = cWord.trim();
    console.log(cWord);
    return cWord;
  }

  vldChar(cCandidate) {
    let lRet = false;

    if (((Number(cCandidate) >= 65) && (Number(cCandidate) <= 90)) || ((Number(cCandidate) >= 97) && (Number(cCandidate) <= 122))) {
      lRet = true;
    }

    return lRet;
  }

  splitWords(cStrOrder) {
    let aRet = new Array();
    aRet = cStrOrder.split('32');
    return aRet;
  }



  reverseStr(encodedString) {
    let aEncStr = new Array();
    let aRevStr = new Array();
    let cRet = '';

    aEncStr = encodedString.split('');
    aRevStr = aEncStr.reverse();
    cRet = aRevStr.join('');
    return cRet;
  }

}
