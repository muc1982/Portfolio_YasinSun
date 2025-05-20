import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = 'de'; // Standard-Sprache auf Deutsch

  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
    console.log(`Sprache zu ${lang} gewechselt`);
    // Hier kommt später die Implementierung der Sprachänderung
  }

  scrollToSection(section: string): void {
    // Implementierung zum Scrollen zum Hero-Bereich
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}