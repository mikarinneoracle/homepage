import { Component } from '@angular/core';

import { Free } from './free';
import { FreeSvc } from './free.svc';
import { Pro } from './pro';
import { ProSvc } from './pro.svc';
import { Enterprise } from './enterprise';
import { EnterpriseSvc } from './enterprise.svc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homepage';
  
  free: Free = {price: { monthly: 0, users: 0, storage: 0, support: '' }, options: {}};
  pro: Pro = {price: { monthly: 0, users: 0, storage: 0, support: '' }, options: {}};
  enterprise: Enterprise = {price: { monthly: 0, users: 0, storage: 0, support: '' }, options: {}};

  constructor(private freeSvc: FreeSvc, private proSvc: ProSvc, private enterpriseSvc: EnterpriseSvc) { }

  ngOnInit() {
    this.getFree();
    this.getPro();
    this.getEnterprise();
  }

  getFree(): void {
    this.freeSvc.getFree()
    .subscribe(free => this.free = free);
  }
  
  getPro(): void {
    this.proSvc.getPro()
    .subscribe(pro => this.pro = pro);
  }
  
  getEnterprise(): void {
    this.enterpriseSvc.getEnterprise()
    .subscribe(enterprise => this.enterprise = enterprise);
  }
}
