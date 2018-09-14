import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  
  ngOnInit() {
    // concat with two basic observable
    //emit vale of sourceOne the complete and then conact with sourcetwo
    const sourceOne = of(1, 2,3);
    const sourceTwo = of(4, 5, 6);
    const example = sourceOne.pipe(concat(sourceTwo));
    const subscribe = example.subscribe(val =>
      console.log('Example: Basic concat:', val));

      // concat with static method.
      const sourceThree = of(1, 2,3);
      const sourceFour = of(4, 5, 6);
      const result = concat(sourceThree, sourceFour);
      const subscribs  = example.subscribe(val =>
        console.log('Example: Basic concat:', val));
  }

  
}
