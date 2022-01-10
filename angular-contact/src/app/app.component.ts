import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-contact';
  responsivity = true;
  toggle = false;

  toggleResponsivity(width : number) {
    if (width <= 960) {
      this.responsivity = false;
      console.log('atingi o tamanho');
    } else {
      this.responsivity = true;
    }
  }

  ngOnInit(): void {
    this.toggleResponsivity(window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    event.target.innerWidth;
    console.log(event.target.innerWidth);
    this.toggleResponsivity(window.screen.width)
    
  }

  constructor() {}
}
