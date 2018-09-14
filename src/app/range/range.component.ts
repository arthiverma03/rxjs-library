import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {


  ngOnInit() {
    const source = range(1, 5);
    const result = source.subscribe( val => console.log(val));
  }

}
