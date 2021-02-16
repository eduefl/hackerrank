import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-rotation',
  templateUrl: './left-rotation.component.html',
  styleUrls: ['./left-rotation.component.css']
})
export class LeftRotationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rotLeft(a, d)
  {
    let aRet = a;
    for (let index = 0; index < d; index++) {
      console.log(index)
      aRet = this.spin(aRet);
    }
    console.log("LeftRotationComponent -> constructor -> aRet", aRet)

    return aRet;
  }

  spin(aArray)
  {
    let nTrans = 0;
    nTrans = aArray.shift();
    aArray.push(nTrans);
    return aArray;

  }

}
