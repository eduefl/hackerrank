import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specia-string-again',
  templateUrl: './specia-string-again.component.html',
  styleUrls: ['./specia-string-again.component.css']
})
export class SpeciaStringAgainComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  substrCountAlpha(s)
  {
    let result = 0;
    let nUnicLastStr = 1 // O ultimo caracter nao sera varrido sozinho mas precisa ser contado
    let nUniCHr = 0; // gurado os palindromos com o mesmo caracter incluindo os caracteres unicos
    let nStrcomp = 0 ;
    let n = s.length;
    for (let i = 0; i < n - 1; i++) { // Janela(range) fechando da essquerda pra direita (comeco range maior e vai fechando) . . .
        let j = i + 1;
        let count = 1; // Cada caracter separado ja e contado como um palindromo.
        // console.log(s[i])
        while (s[i] == s[j] && j < n) { // (anda cada caracter na janela se igual)
            // A cada novo caracter igual mais um palindromo pra conta
            count++;
            // console.log(s.substring(i, j+1));
            j++; // proximo na janela
        }
        nUniCHr += count; //Somo os palindromos com um caratceres unicos
        j++;
        // quando sai do loop significa que o proximo e diferente (potencial intruso)
        while (s[i] == s[j] && count > 0) {
            // Verifico se depois do intruso tenho uma quantidade igual aos caratcteres padrao ate agora
            // ja encontrados em I como tenho a quantidade de carateres achados no count preciso correr ate
            // zerar essa variavel. se eu nao zerar ela e poque nao e um palindromo
            //caso depois do intruso tenha mais um diferente tambem nao teho um palindromo
            // example: aaabaaa, count = 3 here
            // so count is that enough "a" after the difference
            count--;
            j++;
        }
        if (count == 0) // caso tenha zerado o contador tenho mais um palindromo com um intruso no meio
        {
          nStrcomp++;
          //console.log(s.substring(i, j));
        }
    }
      result = (nUnicLastStr+nUniCHr+nStrcomp) // somo as strings unicas mais o ultimo unico que nao varri mais as string compostas
    //console.log(s[s.length-1])
    console.log(result)
    return result;
}
  substrCount(s)
  {
    let fim = s.length;
    let nRet = 0;

    for (let ini = 0; ini < s.length; ini++) {
      fim = s.length;
      while (fim > ini)
      {
        if((fim-ini) === 1)
        {
          nRet++;
        }
        else
        {
          nRet += this.checkStr(s.substring(ini, fim));
        }
        //console.log(s.substring(ini, fim));
        fim--;
      }

    }
    console.log(nRet);
  }

  checkStr(cStr)
  {
    let lCheck = true
    let nPos = 0
    let nMeio = 0
    let nRet = 0;


    if ( cStr.length % 2 == 0)
    {
      //impar
      while (lCheck && nPos< cStr.length-1) {
        if (cStr[nPos] !== cStr[nPos+1])
        {
          lCheck = false
        }
        nPos++
      }


    }
    else
    {
      nMeio = Math.trunc(cStr.length/2)
      //impar
      while (lCheck && nPos< cStr.length-1) {
        if (nPos+1 == nMeio)
        {
          if (cStr[nPos] !== cStr[nPos+2])
          {
            lCheck = false
          }

          nPos = nPos+2;
        }else{
          if (cStr[nPos] !== cStr[nPos+1])
          {
            lCheck = false
          }
          nPos++
        }
      }

    }
    nRet = lCheck ? 1 : 0;
    if (lCheck)
    {
      // console.log(cStr);
    }

    return nRet;

  }

}
