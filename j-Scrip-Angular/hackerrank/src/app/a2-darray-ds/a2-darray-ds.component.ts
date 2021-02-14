import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a2-darray-ds',
  templateUrl: './a2-darray-ds.component.html',
  styleUrls: ['./a2-darray-ds.component.css']
})
export class A2DArrayDsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hourglassSum(arr)
  {
    let nRet = 0
    nRet = this.setHourGlass(arr, 0, 0);
    for (let index = 0; index < arr.length-2; index++) {
      for (let j = 0; j < arr[index].length-2; j++) {
        nRet = (this.setHourGlass(arr, index, j) > nRet ? this.setHourGlass(arr, index, j) : nRet);
      }
    }

    console.log("A2DArrayDsComponent -> constructor -> nRet", nRet)
    return nRet;

  }

  setHourGlass(arr,i,j)
  {
    let nRet = 0 ;
    for (let index = 0; index < 3; index++) {
      nRet = nRet + arr[i][j+index]
    }
    nRet = nRet+ arr[i+1][j+1]

    for (let index = 0; index < 3; index++) {
      nRet = nRet + arr[i+2][j+index]
    }

    return nRet;



  }



}
