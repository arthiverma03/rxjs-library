import { Component, OnInit } from '@angular/core';
import { withLatestFrom, map } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-latestvalue',
  templateUrl: './latestvalue.component.html',
  styleUrls: ['./latestvalue.component.css']
})
export class LatestvalueComponent implements OnInit {


  ngOnInit() {

    const first = interval(1000);
    const second = interval(2000);
     const result = first.pipe(withLatestFrom(second),
     map(([first, second]) => {
      return `First Source (5s): ${first} Second Source (1s): ${second}`;
    })
     );
     const subscribe = result.subscribe(val => console.log(val));
  }

}
