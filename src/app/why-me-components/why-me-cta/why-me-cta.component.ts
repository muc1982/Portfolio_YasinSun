import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-me-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me-cta.component.html',
  styleUrls: ['./why-me-cta.component.scss']
})
export class WhyMeCtaComponent {
  scrollToContactSection(): void {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}