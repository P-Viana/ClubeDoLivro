import { Component, signal } from '@angular/core';
import { Routes } from '@angular/router';
import { Topper } from './Pages/topper/topper';
import { Footer } from './Pages/footer/footer';
import { Asside } from './Pages/asside/asside';
import { Section1 } from './Pages/section one/section1';
import { SectionWhoWeAre } from './Pages/section-who-we-are/section-who-we-are';
import { GoalOfWeek } from './Pages/goal-of-week/goal-of-week';
import { SectionHowWork } from './Pages/section-how-work/section-how-work';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    Topper,
    Footer, 
    Asside, 
    Section1,
    SectionWhoWeAre,
    GoalOfWeek,
    SectionHowWork
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Clube-do-livro');
}
