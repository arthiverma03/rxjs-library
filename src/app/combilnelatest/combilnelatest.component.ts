import { Component, OnInit } from '@angular/core';
import { timer, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combilnelatest',
  templateUrl: './combilnelatest.component.html',
  styleUrls: ['./combilnelatest.component.css']
})
export class CombilnelatestComponent implements OnInit {

  ngOnInit() {
    const $timerOne = timer(1000, 4000);
    const $timerTwo = timer(2000, 5000);
    const $timerThree = timer(3000, 6000);

    // combine all const in combinelatest
    const combined = combineLatest($timerOne, $timerTwo, $timerThree);

    const subscribe = combined.subscribe( ([$timerOne, $timerTwo, $timerThree]) => {
      /*
        Example:
      timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0;
      timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
      timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
    */
      console.log(
        `Timer One Latest: ${$timerOne},
       Timer Two Latest: ${$timerTwo},
       Timer Three Latest: ${$timerThree}`
      );
    });

  }

}
