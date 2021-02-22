import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { CountryService } from '@data/api';
import { Country } from '@data/interfaces';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  country?: Country;
  paramsSubscription?: Subscription;
  countrySubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountryService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.getCountry(params.country);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.countrySubscription.unsubscribe();
  }

  getCountry(country: string): void {
    this.countrySubscription = this.countriesService
      .searchByCountry(country)
      .pipe()
      .subscribe((countries) => {
        if (countries.length === 1) {
          this.country = countries[0];
        }
      });
  }
}
