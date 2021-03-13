import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sherlock-valid-string',
  templateUrl: './sherlock-valid-string.component.html',
  styleUrls: ['./sherlock-valid-string.component.css']
})
export class SherlockValidStringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test14() {
    let cteste = "lalalalala"
    this.isValid(cteste);

  }




  isValid(s) {
    let dic = {};
    let dicB = {};
    let aFInal = [];
    let cRet = ''


    for (const cChar of s) {
      if (dic[cChar]) {
        dic[cChar]++;
      } else {
        dic[cChar] = 1;
      }
    }
    console.log(dic);

    // tslint:disable-next-line: forin
    for (const key in dic) {
      if (dicB[dic[key]]) {
        dicB[dic[key]]++;
      } else {
        dicB[dic[key]] = 1;
      }
    }
    console.log(dicB);


    aFInal = Object.keys(dicB);
    console.log(aFInal);

    if (aFInal.length > 2) {
      cRet = "NO";
    }
    else if (aFInal.length === 1)
      cRet = "YES";
    else {
      if (dicB[aFInal[0]] === 1 || dicB[aFInal[1]] === 1) {
        if (((aFInal[1] - 1) === (parseInt(aFInal[0])))) {
          cRet = "YES";
        }
        else {
          if ((parseInt(aFInal[0]) === 1 && dicB[aFInal[0]] === 1 || parseInt(aFInal[1]) === 1 && dicB[aFInal[1]] === 1)) {
            cRet = "YES";
          } else {
            cRet = "NO";
          }
        }
      } else {
        cRet = "NO";
      }

    }
    console.log(cRet)
    return cRet;
  }

}
