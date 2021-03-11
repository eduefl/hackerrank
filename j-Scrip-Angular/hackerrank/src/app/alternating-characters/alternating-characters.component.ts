import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alternating-characters',
  templateUrl: './alternating-characters.component.html',
  styleUrls: ['./alternating-characters.component.css']
})
export class AlternatingCharactersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alternatingCharacters(s) {
    let nRet = 0
    let cAtual =""

    for (const cChar of s) {
      if(cAtual === cChar )
      {
        nRet++
      }
      else{
        cAtual = cChar

      }

    }

    console.log(nRet);

    return nRet;



  }

}
