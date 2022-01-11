import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  responsivity;
  toggle;

  toggleResponsivity(width: number) {
    if (width <= 960) {
      this.responsivity = false;
    } else {
      this.responsivity = true;
    }
  }

  ngOnInit(): void {
    this.responsivity = true;
    this.toggle = false;
    this.toggleResponsivity(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    event.target.innerWidth;
    this.toggleResponsivity(event.target.innerWidth);
  }

  constructor() {}
}
