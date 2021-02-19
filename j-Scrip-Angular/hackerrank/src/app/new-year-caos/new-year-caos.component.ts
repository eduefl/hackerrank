import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-year-caos',
  templateUrl: './new-year-caos.component.html',
  styleUrls: ['./new-year-caos.component.css']
})
export class NewYearCaosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  minimumBribes(q: []) {
    let aAux = new Array()
    let nRet = 0;
    let nDif = 0;
    let lcaos = false;
    let nIndie = 0;
    aAux = this.newOrder(q);

    for (let index = 0; index < aAux.length; index++) {
      nIndie = aAux.findIndex(x => x === q[index]);//ascan
      if (nIndie > index) {
        nDif = (nIndie - index);
        if (nDif <= 2) {
          nRet = nRet + nDif;
          aAux = this.Change(index, nDif, aAux);
        } else {
          lcaos = true;
          break;
        }
      }

    }
    if (lcaos) {
      console.log('Too chaotic');

    } else {
      console.log(nRet);
    }

  }
  minimumBribesalpha(q: []) {
    let nsize = q.length;
    let nlast = q[nsize - 1];
    let nSuborno = 0;
    let lcaotic = false;
    while (q.length > 0) {
      nsize = q.length;
      nlast = q[nsize - 1]
      if (nsize === nlast) {
        q.pop()
      }
      else if (nsize === q[nsize - 2]) {
        q.splice(nsize - 2, 1);
        nSuborno++;
      }
      else if (nsize === q[nsize - 3]) {
        q.splice(nsize - 3, 1);
        nSuborno = nSuborno + 2;
      } else {
        lcaotic = true
        break
      }
    }
    if(lcaotic)
    {
      console.log('Too chaotic');
    }else{
    console.log(nSuborno);
    }
  }

  Change(i, xFacotr, aPar) {
    let pA = 0;
    let pB = 0;
    let aRet = aPar;

    for (let index = i + xFacotr; index > i; index--) {
      pA = aRet[index];
      pB = aRet[index - 1];
      aRet[index] = pB;
      aRet[index - 1] = pA
    }
    return aRet;
  }

  newOrder(aOrig) {
    let aRet = new Array();
    let n = 1;
    aOrig.forEach(element => {
      aRet.push(n)
      n = n + 1;
    });
    return aRet;

  }

  tstMinBrb(aCases) {

    for (const cases of aCases) {
      this.minimumBribesalpha(cases); // imporved function working with the power of mathematics
      //this.minimumBribes(cases); // woriking function using array manipulation crash with big numbers
    }

  }


}
