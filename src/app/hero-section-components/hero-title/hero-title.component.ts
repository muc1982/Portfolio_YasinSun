import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.scss']
})
export class HeroTitleComponent {}