import { Component } from '@angular/core';
import { LeadListComponent } from './components/lead-list/lead-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    MatGridListModule,
    LeadListComponent,
  ]
})
export class AppComponent {
  title = 'frontend';
}
