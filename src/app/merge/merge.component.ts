import { Component, OnInit } from '@angular/core';
import { mapTo } from 'rxjs/operators';
import { interval, merge } from 'rxjs';


@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  ngOnInit() {
    // multiple observable can be merge to one observable
    const first = interval(1000);
    const second = interval(2000);
    const third = interval(3000);
    const result = merge(first.pipe(mapTo('FIRST!')),
    second.pipe(mapTo('SECOND!')),
    third.pipe(mapTo('THIRD'))
    );
    const subscribe = result.subscribe(val => console.log(val));
  }

}
