import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import { CountryService } from '@data/api';
import { Country } from '@data/interfaces';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.6s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.6s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  isActive?: boolean;

  constructor(
    private countriesService: CountryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  ngOnDestroy(): void {}

  countryTrackBy(index: number, country: Country): string {
    return country.name;
  }

  scrollOnChange(): void {
    this.isActive = false;
  }

  getAllCountries(): void {
    this.countries = [];

    this.countriesService
      .getCountries()
      .pipe()
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  getCountriesByText(param: string): void {
    if (!param) {
      this.getAllCountries();
      return;
    }

    this.countries = [];

    this.countriesService
      .searchByCountry(param)
      .pipe()
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  getCountriesByRegion(region: string): void {
    if (region === 'all') {
      this.getAllCountries();
      return;
    }

    this.countries = [];
    this.countriesService
      .searchByRegion(region)
      .pipe()
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  goToCountryDetail(country: string): void {
    this.router.navigate(['', country.toLowerCase()]);
  }
}
