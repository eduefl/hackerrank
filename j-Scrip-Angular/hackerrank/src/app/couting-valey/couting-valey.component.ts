import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couting-valey',
  templateUrl: './couting-valey.component.html',
  styleUrls: ['./couting-valey.component.css']
})
export class CoutingValeyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  countingValleys(steps, path)
  {
    let nLev = 0;
    let nret = 0;
    let lDown = false;

    for (const iterator of path) {
      nLev = nLev + (iterator === 'D' ? -1 : 1);
      nret = nret + ((nLev === 0 && lDown) ? 1 : 0);
      lDown = nLev < 0 ;
    }

    console.log(nret);

    return nret;





  }

}
