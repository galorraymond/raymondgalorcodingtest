import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styles: [],
})
export class ScrollTopComponent implements OnInit {
  pageYoffset: number;

  @HostListener('window:scroll', ['$event']) onScroll(): void {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) {
    this.pageYoffset = 0;
  }

  ngOnInit(): void {}

  scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }
}
