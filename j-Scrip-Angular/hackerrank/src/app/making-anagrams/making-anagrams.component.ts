import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-making-anagrams',
  templateUrl: './making-anagrams.component.html',
  styleUrls: ['./making-anagrams.component.css']
})
export class MakingAnagramsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  makeAnagram(a, b)
  {
    let dicA = {};
    let dicB = {};

    let NRemove = 0

    for (const iterator of a) {
      if (dicA[iterator]) {
        dicA[iterator]++;
      } else {
        dicA[iterator] = 1;
      }

    }

    for (const element of b) {
      if (dicB[element]) {
        dicB[element]++;
      } else {
        dicB[element] = 1;
      }

    }



    // tslint:disable-next-line: forin
    for (const key in dicA) {
      if(dicB[key])
      {
        if(dicB[key]> dicA[key])
        {
          dicB[key] = dicB[key] - dicA[key];
          dicA[key] = 0;

        }
        else
        {
          dicA[key] = dicA[key] - dicB[key];
          dicB[key] = 0;
        }
      }
      NRemove = NRemove + dicA[key];

    }

    // tslint:disable-next-line: forin
    for (const key in dicB) {
        NRemove = NRemove + dicB[key];
      }

    return NRemove



  }

}
