import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-scroll-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-scroll-arrow.component.html',
  styleUrls: ['./hero-scroll-arrow.component.scss']
})
export class HeroScrollArrowComponent {
  scrollToNextSection(): void {
    const nextSection = document.getElementById('why-me-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}