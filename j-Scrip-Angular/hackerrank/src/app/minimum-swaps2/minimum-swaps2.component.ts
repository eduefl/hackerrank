import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minimum-swaps2',
  templateUrl: './minimum-swaps2.component.html',
  styleUrls: ['./minimum-swaps2.component.css']
})
export class MinimumSwaps2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  minimumSwapsAlpha(arr)
  {
    let nsize = 0
    let npos = 0
    let nRet = 0
    let posTransf = 0;
    while (arr.length > 1) {
      nsize = arr.length;
      npos = nsize - 1;
      if (arr[npos] === nsize) {
        arr.pop();
      }
      else
      {
        posTransf = arr.findIndex(x => x === nsize);
        [arr[npos], arr[posTransf]] = [arr[posTransf], arr[npos]]
        nRet ++
      }
    }
    console.log(nRet);
    return nRet;

  }
  minimumSwaps(arr: number[]) {
    let nsize = 0
    let npos = 0
    let nRet = 0
    let aAux = new Array();
    let posTransf = 0;
    while (arr.length > 1) {
      nsize = arr.length;
      npos = nsize - 1;
      if (arr[npos] === nsize) {
        arr.pop();
      } else {
        nRet = nRet + this.bRec(arr[npos], arr, nsize);
        arr.pop();
        if (arr.length > 1)
        {
          aAux = this.sortCopy(arr);
          for (let index = 0; index < aAux.length; index++) {
            posTransf = arr.findIndex(x => x === aAux[index]);
            arr[posTransf] = index+1;
          }
        }

      }
    }
    console.log(nRet);
    return nRet;

  }
  sortCopy(arr) {
    return arr.slice(0).sort(function(a, b) {
      return a - b;
    });
  }


  bRec(v, arr, parade) {
    let nret = 0
    let nPos = v - 1
    let posRemove = 0
    let Nit = arr[nPos];

    if (Nit !== parade) {
      nret = nret + this.bRec(Nit, arr, parade)
    }

    nret = nret + 1;
    posRemove = arr.findIndex(x => x === Nit);
    arr.splice(posRemove, 1)
    return nret;


  }

}
