import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { CountryDetailRoutingModule } from './country-detail-routing.module';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
  declarations: [CountryDetailComponent],
  imports: [CommonModule, SharedModule, CountryDetailRoutingModule],
})
export class CountryDetailModule {}
