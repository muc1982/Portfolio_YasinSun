import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header/header.component';
import { HeroContainerComponent } from './hero-section-components/hero-container/hero-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroContainerComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <div class="content">
        <app-hero-container></app-hero-container>
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
      padding: 0 140px;
      position: relative;
    }
  `]
})
export class AppComponent {
  title = 'prufung-app';
}