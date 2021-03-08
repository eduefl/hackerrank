import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort-counting-inversions',
  templateUrl: './merge-sort-counting-inversions.component.html',
  styleUrls: ['./merge-sort-counting-inversions.component.css']
})
export class MergeSortCountingInversionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line: align
  ncount  = 0;

  MergeSort(arr)
  {
    let a1;
    let a2;
    let nmeio = 0
    let aRet = new Array();

    if (arr.length === 1)
    {
      aRet = arr;
    }
    else{
      nmeio= Math.floor(arr.length/2)
      a1 = arr.slice(0, nmeio);
      a2 = arr.slice(nmeio, arr.length);
      a1 = this.MergeSort(a1);
      a2 = this.MergeSort(a2);
      aRet = this.mesclado(a1, a2,nmeio);
    }
    return aRet;
  }

  mesclado(a1,a2, nMeio)
  {
    let c = new Array();
    let nInc = nMeio
    while(a1.length > 0 && a2.length > 0  )
    {
      if(a1[0]> a2[0])
      {
        c.push(a2.shift());
        this.ncount += nInc;
      }else{
        c.push(a1.shift());
        nInc--;
      }
    }
    while(a1.length > 0)
    {
      c.push(a1.shift());

    }
    while(a2.length > 0)
    {
      c.push(a2.shift());
    }
    return c;
  }

  countInversions(arr)
  {
    this.ncount  = 0
    this.MergeSort(arr);
    console.log(this.ncount);

  }

}
