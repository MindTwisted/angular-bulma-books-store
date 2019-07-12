import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit, OnDestroy {

  public isVisible = false;
  private handleScroll = e => this.isVisible = e.pageY > 500;

  constructor() {
  }

  public ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  public ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public scrollTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
