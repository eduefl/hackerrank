import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumping-on-the-clouds',
  templateUrl: './jumping-on-the-clouds.component.html',
  styleUrls: ['./jumping-on-the-clouds.component.css']
})
export class JumpingOnTheCloudsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  JumpingOnTheClouds(c) {
    let nRet = 0
    while (c.length >1 ) {
      if (c[2] === 0 && c.length >= 2) {
          c.splice(0, 2);
        } else {
          c.splice(0, 1);
        }
      nRet++;
    }
    console.log("JumpingOnTheCloudsComponent -> JumpingOnTheClouds -> nRet", nRet)

    return nRet
  }

}
