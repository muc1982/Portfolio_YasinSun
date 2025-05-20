import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { HeroContainerComponent } from './hero-section-components/hero-container/hero-container.component';
import { WhyMeContainerComponent } from './why-me-components/why-me-container/why-me-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    HeroContainerComponent, 
    WhyMeContainerComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <div class="content">
        <app-hero-container></app-hero-container>
        <app-why-me-container></app-why-me-container>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      background-color: #0B042D;
      min-height: 100vh;
      color: white;
    }
    .content {
      max-width: 1440px;
      margin: 0 auto;
      position: relative;
    }
  `]
})
export class AppComponent {
  title = 'portfolio-app';
}