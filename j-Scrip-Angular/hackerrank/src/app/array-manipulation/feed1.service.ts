import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Feed1Service {

  constructor() { }
  getCursos(){
    return ['java','Vida','angular','kakaroto verme meldito', 'mais um '] ;
   }
   montatest()
   {
     let aret = new Array()

     aret.push([1400906,9889280,90378]);
     return aret;

   }


}
