import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryDetailComponent } from './country-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CountryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryDetailRoutingModule {}
