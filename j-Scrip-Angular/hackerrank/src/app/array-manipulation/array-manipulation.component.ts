import { Component, OnInit } from '@angular/core';
import { Feed1Service } from './feed1.service';

@Component({
  selector: 'app-array-manipulation',
  templateUrl: './array-manipulation.component.html',
  styleUrls: ['./array-manipulation.component.css']
})
export class ArrayManipulationComponent implements OnInit {

  constructor(private feed1Service: Feed1Service) { }

  ngOnInit() {
  }
  arrayManipulationX()
  {
    let a = this.feed1Service.montatest();
    let nRet= 0
    //this.amanolpla(10000000,a)
    nRet = this.amanolpla(10,[[1,5,3],[4,8,7],[6,9,1]])
    console.log("ArrayManipulationComponent -> constructor -> nRet", nRet)
    nRet = this.amanolpla(3,[[1,2,100],[2,5,100],[3,4,100]])
    console.log("ArrayManipulationComponent -> constructor -> nRet", nRet);
    nRet = this.amanolpla(10,[[2 ,6 ,8],[3 ,5 ,7],[1 ,8 ,1],[5 ,9 ,15]]);
    console.log("ArrayManipulationComponent -> constructor -> nRet", nRet)
    //nRet = this.amanolpla(10000000,a);
    //console.log("ArrayManipulationComponent -> constructor -> nRet", nRet)


  }
  arrayManipulationY()
  {
    let nRet= 0
    let a = this.feed1Service.montatest();
    nRet = this.aNemo(10,[[1,5,3],[4,8,7],[6,9,1]])
    console.log("ArrayManipulationComponent -> constructor -> nRet", nRet)
    nRet = this.aNemo(3,[[1,2,100],[2,5,100],[3,4,100]])
    console.log("ArrayManipulationComponent -> constructor -> nRet", nRet);
    nRet = this.aNemo(10,[[2 ,6 ,8],[3 ,5 ,7],[1 ,8 ,1],[5 ,9 ,15]]);
    console.log("ArrayManipulationComponent -> constructor -> nRet", nRet)
    nRet = this.aNemo(10000000,a);
    console.log("ArrayManipulationComponent -> constructor -> nRet", nRet)
  }
  initSpace(n) {
    let aret = new Array();
    for (let index = 0; index < n; index++) {
      aret.push(0);
    }
    return aret;
  }


  aNemo(n, queries)
  {
    let aX = this.initSpace(n+1)
    let nAtu = 0
    let nRet = 0

    for (const instru of queries) {
      aX[instru[0]-1] = aX[instru[0]-1]+ instru[2]
      aX[instru[1]] = aX[instru[1]]- instru[2]
    }

    aX.forEach(element => {
      nAtu = nAtu + element;
      nRet = (nAtu>nRet?nAtu:nRet)
    });
    return nRet;

  }

  amanolpla(n, queries)
  {
    let nX = 0
    let nRet = 0
    let aret = new Array();
    for (let index = 0; index < n; index++) {
      nX = 0 ;
      for (const instru of queries) {
        nX = nX+ (this.isBetween(index+1, instru[0],instru[1])?instru[2]:0 )
        nRet = (nX>nRet?nX:nRet)
      }
    }
    return nRet;
  }


   isBetween(n, a, b) {
    return (n - a) * (n - b) <= 0
 }
  arrayManipulation(n, queries) {
    let aWorkSpace = new Array();
    let nRet = 0;

    aWorkSpace = this.initSpace(n);
    nRet = this.transpiler(aWorkSpace, queries)
    console.log(nRet);
    return nRet;
  }

  transpiler(aWs, aInstr) {
    let nMax = 0
    for (const instruc of aInstr) {
      nMax = this.executor(aWs, instruc[0], instruc[1], instruc[2], nMax)
    }
    return nMax;
  }

  executor(aWs, a, b, k, nMax) {
    for (let index = a - 1; index < b; index++) {
      aWs[index] = aWs[index] + k;
      nMax = (aWs[index] > nMax ? aWs[index] : nMax)
    }

    return nMax;
  }


}


