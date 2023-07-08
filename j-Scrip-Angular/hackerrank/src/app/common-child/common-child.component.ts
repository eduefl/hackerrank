import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-child',
  templateUrl: './common-child.component.html',
  styleUrls: ['./common-child.component.css']
})
export class CommonChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(a: string, b: string) {
    alert(this.commonChild(a,b))
  }

  commonChild(s1: string, s2: string) {
    // Write your code here
    let nTam = 0
    let a1 = []
    let b1 = []
    let aDad = []
    let ax = {}
    let bx = {}

    ax = this.decompoe(s1, aDad, ax)
    bx = this.decompoe(s2, aDad, ax)
    for (let nkIndex = s1.length; nkIndex > 0; nkIndex--) {
      if(ax[nkIndex].length < bx[nkIndex])
      {
        a1 = ax[nkIndex]
        b1 = bx[nkIndex]
      }
      else{
        a1 = bx[nkIndex]
        b1 = ax[nkIndex]
      }

      if (this.comparearrays(ax[nkIndex], bx[nkIndex])) {
        return nkIndex
      }
    }
    return 0

  }
  comparearrays(a1, b1): boolean {
    for (let index = 0; index < a1.length; index++) {

      if (b1.includes(a1[index])) {
        return true
      }

    }
    return false

  }


  decompoe(cPar, aDad, ax) {
    let cVar = ""
    let cvartmp = ""
    let avar = []
    let atmp = []
    let aret = {}
    for (let nkIndex = 0; nkIndex < cPar.length; nkIndex++) {
      for (let nJIndex = 1; nJIndex < cPar.length; nJIndex++) {
      if (nkIndex > 0) {
        avar = cPar.split("")
        atmp = avar.splice(nkIndex, nJIndex)
        cvartmp = avar.join("")
      } else {
        cvartmp = cPar
      }
      for (let njIndex = 0; njIndex < cvartmp.length; njIndex++) {
        cVar = cvartmp.substring(njIndex, cvartmp.length)
        for (let index = 1; index <= cVar.length; index++) {
          if (!ax[cVar.substring(0, index)]) {
            aDad.push(cVar.substring(0, index))
            ax[cVar.substring(0, index)] = true
            if (!aret[(cVar.substring(0, index)).length]) {
              aret[(cVar.substring(0, index)).length] = []
            }
            aret[(cVar.substring(0, index)).length].push(cVar.substring(0, index))
          }
        }
      }
    }
    }
    return aret
  }

  builssbstr(cVar: string, nTamMax: number, nTam: number) {
    let aret = []
    let atmp = []
    let avar = []
    let nInicial = 0
    let neIndice = cVar.length - nTamMax

    for (let index = nInicial; index <= nTamMax; index++) {
      avar = cVar.split("")
      atmp = avar.splice(index, neIndice)
      aret.push(avar.join(""))
    }

    return aret
  }


}

