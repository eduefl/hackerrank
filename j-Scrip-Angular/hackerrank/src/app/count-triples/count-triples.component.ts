import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-triples',
  templateUrl: './count-triples.component.html',
  styleUrls: ['./count-triples.component.css']
})
export class CountTriplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countTripletsZeta(arr, r)
  {
  var map2 = {};
  var map3 = {};
  var count = 0;
  for (var i = 0; i < arr.length; ++i) {
      var n = arr[i];
      if (map3[n]) {
          count += map3[n];
      }
      if (map2[n]) {
          map3[n * r] = map3[n * r] ? map3[n * r] + map2[n] : map2[n];
      }
      map2[n * r] = map2[n * r] ? map2[n * r] + 1 : 1;
  }
  console.log(count)
  return count;
  }
  countTripletsAlpha(arr, r) {
    const dic = {};
    const par = {};
    const nret = {};
    const npos = -1;
    const npos2 = -1;
    let nRet = 0


    for (let index = 0; index < arr.length ; index++) {

      if (dic[arr[index]]) {
        dic[arr[index]]++;
      } else {
        dic[arr[index]] = 1;
      }


    }
    console.log(arr)
    console.log(dic)

    console.log(Object.keys(dic).length);
    if (Object.keys(dic).length === 1)
    {
      https://www.todamateria.com.br/analise-combinatoria/                Combinações
      for (const key in dic) {
        const value = dic[key];
        //console.log("?? ~ file: count-triples.component.ts ~ line 41 ~ CountTriplesComponent ~ countTripletsAlpha ~ value", value)

        nRet = this.sFact2(value,value-3)/this.sFact(3)
      }


      //console.log(dic);
    }
    else
    {
      for (const key in dic) {
        const value = dic[key];
        let x = Number(key) * r
        if (dic[x]) {
          //console.log(key,'---->',x);
          let y = Number(x) * r
          if (dic[y]) {
            //console.log(key,'---->',x,'---->',y);
            //console.log(dic[key],'---->',dic[x],'---->',dic[y]);
            nRet = nRet+(dic[key] * dic[x] * dic[y])

          }


        }
        // do something with "key" and "value" variables
      }
    }
    console.log(nRet);

    return nRet;






  }
  sFact(num)
  {
      var rval=1;
      for (var i = 2; i <= num; i++)
          rval = rval * i;
      return rval;
  }


  sFact2(num,par)
  {
      var rval=num;
      for (var i = num-1; i >1 ; i--)
      {
        if(i === par)
        {
          break
        }
          rval = rval * i;
      }
      return rval;
  }

   countTriplets(arr, r) {
     let nRet = 0;

     for (let index = 0; index <= arr.length - 3; index++) {
      nRet = nRet + this.contador(arr, index, index + 1, r, 1);
     }
     console.log(nRet);

     return nRet;


}

contador(aArray, nSelect, nStart, nMult, nstep) {
  let npos = -1;
  let nRet = 0;

  npos = aArray.indexOf(aArray[nSelect] * nMult, nStart);

  if (nstep === 3) {
    // aArray.splice(nSelect, 1)
    return 1;
  } else {
    while (npos > -1) {
      nRet = nRet + this.contador(aArray, npos, npos + 1, nMult, nstep + 1);
      npos = aArray.indexOf(aArray[nSelect] * nMult, npos + 1);
    }
  }
  return nRet;


}
  // This methode safely copies deeply nested objects/arrays! not by reference
  // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

  safecopyArray(aArr) {
    let aret = new Array();
    //console.log(JSON.stringify(aArr));
    aret = JSON.parse(JSON.stringify(aArr));

    return aret;
  }




}
