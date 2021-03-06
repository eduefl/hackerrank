import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequency-queries',
  templateUrl: './frequency-queries.component.html',
  styleUrls: ['./frequency-queries.component.css']
})
export class FrequencyQueriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  freqQueryAlpha(queries) {
    const dic = {};
    const freq = {};
    let aRet = new Array();
    let lAchou = false;

    for (const query of queries) {
      switch (query[0]) {
        case 1:
          if (dic[query[1]]) {
            freq[dic[query[1]]]--;
            dic[query[1]]++;
          } else {
            dic[query[1]] = 1;
          }
          if (freq[dic[query[1]]]) {
            freq[dic[query[1]]]++;
          } else {
            freq[dic[query[1]]] = 1;
          }
          break;
        case 2:
          if (dic[query[1]]) {
            freq[dic[query[1]]] --;
            dic[query[1]]--;
            freq[dic[query[1]]] ++;
          }
          break;
        case 3:
          lAchou = (freq[query[1]]>0)
          if (lAchou)
          {
            aRet.push(1);
          }
          else{
            aRet.push(0);
         }
      }

    }
    console.log(aRet);
    return aRet;


  }


  freqQuery(queries) {
    let aWork = new Array();
    let nIndex = -1;
    let aRet = new Array();


    for (const query of queries) {
      switch (query[0]) {
        case 1:
          aWork.push(query[1]);
          break;
        case 2:
          nIndex = aWork.indexOf(query[1]);
          if (nIndex !== -1) {
            aWork.splice(nIndex, 1);
          }
          break;
        case 3:
          aRet.push(this.checkSeq(aWork, query[1]));
          break;
        default:
          alert("I don't know such values");
      }
    }

    console.log(aRet);
    return aRet;

  }
  checkSeq(aWork, qtd) {
    let aAux = new Array();
    let lExit = false;
    let nSel = 0;
    let nIndex = -1;
    let nRet = -1;
    let cReal = '';
    let cExpected = '';

    aAux = JSON.parse(JSON.stringify(aWork)).sort(function (a, b) {
      return a - b;
    });
    nIndex = 0;
    if ((qtd > aAux.length) || (aAux.length <= 0)) {
      nRet = 0;
    }    else {
      nSel = aAux[0];
      nIndex = aAux.indexOf(nSel);
      while (!lExit) {
        cReal = aAux.slice(nIndex, nIndex + qtd).join("")
        cExpected = aAux[nIndex].toString().repeat(qtd);
        if (cReal === cExpected) {
          nRet = 1;
          lExit = true
        } else {
          nIndex = aAux.findIndex(x => x > aAux[nIndex]);
          if (nIndex === -1) {
            nRet = 0;
            lExit = true
          }

        }
      }
    }
    return nRet;
  }


}
