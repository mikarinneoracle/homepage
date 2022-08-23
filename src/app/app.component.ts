import { Component } from '@angular/core';

import { Free } from './free';
import { FreeSvc } from './free.svc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homepage';
  
  free: Free = {price: { monthly: 0, users: 0, storage: 0, support: '' }, options: {}};

  constructor(private freeSvc: FreeSvc) { }

  ngOnInit() {
    this.getFree();
  }

  getFree(): void {
    this.freeSvc.getFree()
    .subscribe(free => this.free = free);
  }
}
