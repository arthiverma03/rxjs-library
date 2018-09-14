import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-throwerror',
  templateUrl: './throwerror.component.html',
  styleUrls: ['./throwerror.component.css']
})
export class ThrowerrorComponent implements OnInit {

 

  ngOnInit() {
    const source = throwError('unexpected error');
    const subscribe = source.subscribe({
      next: val => console.log(val),
      complete: () => console.log('Complete!'),
      error: val => console.log(`Error: ${val}`)
    });
  }


}
