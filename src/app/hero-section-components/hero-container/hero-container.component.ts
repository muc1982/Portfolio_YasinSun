import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroTitleComponent } from '../hero-title/hero-title.component';
import { HeroContactComponent } from '../hero-contact/hero-contact.component';
import { HeroImageComponent } from '../hero-image/hero-image.component';
import { HeroScrollArrowComponent } from '../hero-scroll-arrow/hero-scroll-arrow.component';

@Component({
  selector: 'app-hero-container',
  standalone: true,
  imports: [
    CommonModule,
    HeroTitleComponent,
    HeroContactComponent,
    HeroImageComponent,
    HeroScrollArrowComponent
  ],
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.scss']
})
export class HeroContainerComponent {
  // Hier kann später gemeinsame Logik hinzugefügt werden
}