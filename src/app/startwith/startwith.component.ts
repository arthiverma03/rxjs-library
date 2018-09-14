import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-startwith',
  templateUrl: './startwith.component.html',
  styleUrls: ['./startwith.component.css']
})
export class StartwithComponent implements OnInit {


  ngOnInit() {

const source = of(2, 3, 4);
//start with 0
const example = source.pipe(startWith(1));
//output: 0,1,2,3
const subscribe = example.subscribe(val => console.log(val));
  }

}
