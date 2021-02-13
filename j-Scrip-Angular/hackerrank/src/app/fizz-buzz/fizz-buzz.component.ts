import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fizzBuzz(n) {
    let nMod3 = 0;
    let nMod5 = 0;
    let cResult = '';
    let aRet = new Array();
    for (let index = 1; index <= n; index++) {
      cResult = "";
      nMod5 = index % 5;
      nMod3 = index % 3;

      if (nMod3 === 0) {
        cResult = cResult.concat('Fizz');
      }
      if (nMod5 === 0) {
        cResult = cResult.concat('Buzz');
      }
      if (cResult.length === 0 || !cResult.trim()) {
        cResult = index.toString();
      }
      aRet.push(cResult);


      console.log(cResult);
    }

    return aRet;
  }


}
