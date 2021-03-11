import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lilis-homework',
  templateUrl: './lilis-homework.component.html',
  styleUrls: ['./lilis-homework.component.css']
})
export class LilisHomeworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lilysHomework(arr)
  {
    let nAux = 0;
    let ncount = 0;
    let ncountRev = 0;
    let nRet = 0

    let aOrder  = new Array(arr.length).fill(0);
    let sRever = new Array(arr.length).fill(0);


    const dic = {};
    for (let index = 0; index < arr.length; index++) {
      dic[arr[index]] = index;
    }

    for (const key in dic) {
      if (Object.prototype.hasOwnProperty.call(dic, key)) {
        aOrder[nAux] = arr[dic[key]]
        nAux++
        sRever[arr.length-nAux] = arr[dic[key]]
      }
    }

    ncount = this.contaswap(arr,aOrder,dic);
    ncountRev = this.contaswap(arr,sRever,dic);


    nRet = ncount < ncountRev ? ncount : ncountRev;

    console.log(nRet);

    return nRet;


      }

  contaswap(aOrig,aCompar,dic)
  {
    let aFake = new Array();
    let nRet = 0;
    let nAux = 0
    //console.log(JSON.stringify(aArr));
    aFake = JSON.parse(JSON.stringify(aOrig));
    let Dic = JSON.parse(JSON.stringify(dic));

    for (let index = 0; index < aFake.length; index++) {
      if(aFake[index] !== aCompar[index])
      {
        nAux = aFake[index]
        aFake[index] = aCompar[index]
        aFake[Dic[aCompar[index]]] = nAux;
        Dic[nAux] = Dic[aCompar[index]]
        Dic[aCompar[index]] = index;
        nRet++;
      }

    }

    return nRet;

  }








}


E2_EMIS1
