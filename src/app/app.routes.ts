import { Routes } from '@angular/router';
import { WhyMeComponent } from './features/why-me/why-me/why-me.component';
import { SkillsComponent } from './features/skills/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects/projects.component';
import { ContactComponent } from './features/contact/contact/contact.component';

export const routes: Routes = [
  { path: 'why-me', component: WhyMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/why-me', pathMatch: 'full' },
  { path: '**', redirectTo: '/why-me' }
];