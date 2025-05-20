import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-contact.component.html',
  styleUrls: ['./hero-contact.component.scss']
})
export class HeroContactComponent {
  scrollToContactSection(): void {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}