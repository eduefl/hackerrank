import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buble-sort',
  templateUrl: './buble-sort.component.html',
  styleUrls: ['./buble-sort.component.css']
})
export class BubleSortComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  countSwaps(a)
  {
    let cutOut = ""
    let nSwap = 0


    for (let i = 0; i < a.length; i++) {

      for (let j = 0; j < a.length - 1; j++) {
          // Swap adjacent elements if they are in decreasing order
          if (a[j] > a[j + 1]) {
            cutOut= a.splice(j+1, 1)[0];
            a.splice(j, 0, cutOut);
            nSwap++
              }
      }

  }
    console.log("Array is sorted in ", nSwap," swaps."  )
    console.log("First Element: ", a[0]  )
    console.log("Last Element: ", a[a.length-1] )

  }

}
