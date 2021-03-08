import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-comparator',
  templateUrl: './sorting-comparator.component.html',
  styleUrls: ['./sorting-comparator.component.css']
})
export class SortingComparatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  comparator(aStudents)
  //faster
  {
    start()
    let adic =[]
    let cJson = "["
    aStudents.forEach(element => {
      cJson += '{';
      cJson += '"nome": ';
      cJson += '"';
      cJson += element[0] ;
      cJson += '"';
      cJson += ',"score": ';
      cJson += element[1] ;
      cJson += '},';
    });
    cJson = cJson.slice(0, -1);
    cJson += ']';
    //console.log(cJson);
    adic = JSON.parse(cJson);
    //console.log(adic);

    adic.sort(function (a, b) {
      if (a.score < b.score) {
        return 1;
      }else  if (a.score > b.score) {
        return -1;
      }
      else{
        if (a.nome > b.nome){
          return 1;
        }else  if (a.nome < b.nome) {
          return -1;
        }
        else
        {
          return 0;

        }
      }
    });
    console.log(adic);
    end();


  }
  comparatorAlpha(aStudents)
  {
    start()
    //console.log(aStudents);
    aStudents.sort(function (a, b) {
      //console.log(a,b)
      if (a[1] < b[1]) {
        //console.log(a,b)
        return "1";
      }else  if (a[1] > b[1]) {
        //console.log(a,b)
        return  "-1" ;
      }
      else{
        if (a[0] > b[0]){
          //console.log(a,b)
          return 1;
        }else  if (a[0] < b[0]) {
          //console.log(a,b)
          return -1;
        }
        else
        {
          //console.log(a,b)
          return 0;

        }
      }
    });
    console.log(aStudents);
    end();

  }

}


var startTime, endTime;

function start() {
  startTime = new Date();
  
};

function end() {
  endTime = new Date();
  console.log(startTime)
  console.log(endTime)
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  
  // get seconds
  //var seconds = Math.round(timeDiff);
  console.log(timeDiff + " seconds");
}
