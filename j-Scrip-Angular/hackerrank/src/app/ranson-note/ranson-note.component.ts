import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranson-note',
  templateUrl: './ranson-note.component.html',
  styleUrls: ['./ranson-note.component.css']
})
export class RansonNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkMagazine(magazine, note) {
    let aMagazine = new Array();
    let aNote = new Array();
    let nAscan = 0;
    let lRet = true;


    aMagazine = magazine.split(' ');
    aNote = note.split(' ');
    for (const cWord of aNote) {
      nAscan = -1;
      nAscan = aMagazine.findIndex(x => x === cWord);//ascan
      if (nAscan === -1) {
        lRet = false;
        break;
      } else {
        aMagazine.splice(nAscan, 1);
      }

    }
    console.log((lRet ? 'Yes' : 'No'));

  }

}
