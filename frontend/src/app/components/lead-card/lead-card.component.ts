import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { MatCardActions, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.scss'],
  imports: [CommonModule, MatIconModule, MatCardModule, MatCardContent, MatCardHeader, MatCardActions, MatDividerModule, MatButtonModule],
})
export class LeadCardComponent implements OnInit {
  @Input() lead: any;
  @Output() acceptLead = new EventEmitter<number>();
  @Output() declineLead = new EventEmitter<number>();

  constructor(private leadService: LeadService, library: FaIconLibrary) {}
  ngOnInit(): void {}

  accept(leadId: number) {
    this.acceptLead.emit(leadId);
  }

  decline(leadId: number) {
    this.declineLead.emit(leadId);
  }
}
