import { Component } from '@angular/core';
import { LeadListComponent } from './components/lead-list/lead-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    LeadListComponent,
  ]
})
export class AppComponent {
  title = 'frontend';
}
