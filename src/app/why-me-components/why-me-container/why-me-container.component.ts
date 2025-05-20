import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyMeImageComponent } from '../why-me-image/why-me-image.component';
import { WhyMeIntroComponent } from '../why-me-intro/why-me-intro.component';
import { WhyMeDescriptionComponent } from '../why-me-description/why-me-description.component';
import { WhyMeCtaComponent } from '../why-me-cta/why-me-cta.component';

@Component({
  selector: 'app-why-me-container',
  standalone: true,
  imports: [
    CommonModule,
    WhyMeImageComponent,
    WhyMeIntroComponent,
    WhyMeDescriptionComponent,
    WhyMeCtaComponent
  ],
  templateUrl: './why-me-container.component.html',
  styleUrls: ['./why-me-container.component.scss']
})
export class WhyMeContainerComponent {}