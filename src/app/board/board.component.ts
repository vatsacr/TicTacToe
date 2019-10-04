import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  DIMENSIONS:Array<number> = [];
  constructor() { }
  ngOnInit() {
    this.DIMENSIONS = Array(9).fill(0).map((e,i)=>i+1)
  }

  setBorderTop(dimension:number){
    return dimension === 1 || dimension === 2 || dimension === 3?'none':''
  }


}
