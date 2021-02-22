import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { Region } from '@data/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('selectAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(
          '.3s ease-out',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0px)' }),
        animate(
          '.3s ease-in',
          style({ opacity: 0, transform: 'translateY(-100px)' })
        ),
      ]),
    ]),
  ],
})
export class SelectComponent implements OnInit {
  isSelectOpen?: boolean;
  placeholderText = 'Filter by Region';

  @Output() regionOnChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() checkOnChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set isActive(event) {
    this.isSelectOpen = event;
  }

  regions: Region[] = [
    { text: 'All', value: 'all' },
    { text: 'Africa', value: 'africa' },
    { text: 'America', value: 'americas' },
    { text: 'Asia', value: 'asia' },
    { text: 'Europe', value: 'europe' },
    { text: 'Oceania', value: 'oceania' },
  ];

  constructor() {}

  ngOnInit(): void {}

  detectCheckChange(): void {
    this.checkOnChange.emit(this.isSelectOpen);
  }

  select(region: Region): void {
    this.placeholderText = region.text;
    this.regionOnChange.emit(region.value);
  }
}
