import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fraudulent-activity-notifications',
  templateUrl: './fraudulent-activity-notifications.component.html',
  styleUrls: ['./fraudulent-activity-notifications.component.css']
})
export class FraudulentActivityNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countsort(expenditure)
  {
    let aIndex = new Array(201).fill(0);
    expenditure.forEach(element => {
      aIndex[element]++;
    });
    for (let index = 1; index < aIndex.length; index++) {
      aIndex[index] = aIndex[index] + aIndex[index-1];
    }
    let acountsort = new Array(aIndex[(aIndex.length-1)]);
    expenditure.forEach(element => {
      acountsort[aIndex[element]-1] = element;
      aIndex[element]--;
    });


    console.log(acountsort);
    console.log(aIndex);
    console.log(expenditure);

  }
  activityNotificationsZeta(expenditure, d)
  {
    let nRet = 0
    const dic = {};
    let nMediaX2 = 0
    for (let index = 0; index < d; index++) {
      if (dic[expenditure[index]]) {
        dic[expenditure[index]]++;
      } else {
        dic[expenditure[index]] = 1;
      }
    }
    for (let index = d; index < expenditure.length; index++) {
      nMediaX2 = this.getmediaX2Aplha(d,dic);
      if(expenditure[index]>=nMediaX2)
      {
        nRet++;
      }

      if (dic[expenditure[index]]) {
        dic[expenditure[index]]++;
      } else {
        dic[expenditure[index]] = 1;
      }

      dic[expenditure[index-d]]--;
    }
    console.log(nRet);
    return nRet

  }

  activityNotificationsAlpha(expenditure, d)
  {
    let nRet = 0
    let aIndex = new Array(201).fill(0);
    let nMediaX2 = 0
    for (let index = 0; index < d; index++) {
      aIndex[expenditure[index]]++;
    }
    for (let index = d; index < expenditure.length; index++) {
      nMediaX2 = this.getmediaX2(d,aIndex);
      if(expenditure[index]>=nMediaX2)
      {
        nRet++
      }

      aIndex[expenditure[index]]++;
      aIndex[expenditure[index-d]]--;

    }

    console.log(nRet);
    return nRet

  }

  getmediaX2Aplha(nD, dic)
  {
    let nRet  = 0;
    let it1 = 0
    let it2 = 0
    let nWatch = 0

    if (nD % 2 == 0)
    {
      // par
      // tslint:disable-next-line: forin
      for (const key in dic) {
        nWatch += dic[key];
        if(it1 === 0 && nWatch >= nD/2)
        {
          it1 = parseInt(key,10);
        }
        if(nWatch >= nD/2+1){
          it2 = parseInt(key,10);
          break;
        }
      }
      nRet = it1 + it2;

    } else
    {
      // tslint:disable-next-line: forin
      for (const key in dic) {
        nWatch += dic[key];
        if(nWatch >= nD/2)
        {
          it1 = parseInt(key, 10);
          break
        }
      }
      nRet = it1 *2;
    }

    return nRet;


  }


  getmediaX2(nD, aData)
  {
    let nRet  = 0;
    let it1 = 0
    let it2 = 0
    let nCount = 0


    if (nD % 2 == 0)
    {
      for (let index = 0; index < aData.length; index++) {
        nCount += aData[index];
        if(it1 === 0 && nCount >= nD/2){
          it1= index;
        }
        if(nCount >= nD/2 +1){
          it2= index;
          break ;
        }
      }
      nRet = it1 + it2;
      //par
    }else{
      //impar
      for (let index = 0; index < aData.length; index++) {
        nCount += aData[index];
        if(nCount >= nD/2){
          it1= index;
          break
        }
      }
      nRet = it1 *2;
    }

    return nRet;

  }


  activityNotifications(expenditure, d) {
    let nSum = 0;
    let aMedia = [];
    let nMedian = 0;
    let nRet = 0;
    let nindMed = 0
    const nMUlt = 2;

    for (let nIndex = d; nIndex < expenditure.length; nIndex++) {
      if(nIndex>=d) {
        aMedia = expenditure.slice(nIndex-d,nIndex).sort(function(a, b) {
          return a - b;
        });
        if (aMedia.length % 2 == 0)
        {
          //par
          nindMed = ((aMedia.length)/2)
          nMedian = (aMedia[nindMed] + aMedia[nindMed - 1]) / 2
        }
        else{
          nindMed = ((aMedia.length - 1) / 2);
          nMedian = aMedia[nindMed];
        }
        if ((expenditure[nIndex]) >= nMedian * nMUlt)
        {
          nRet++;
        }
      }

    }
    console.log(nRet);
    return nRet;

  }

}
