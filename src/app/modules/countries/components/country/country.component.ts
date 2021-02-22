import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Country } from '@data/interfaces';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent implements OnInit {
  @Input() country?: Country;

  constructor() {}

  ngOnInit(): void {}
}
