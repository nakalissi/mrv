import { Component, Input, OnInit } from '@angular/core';
import { LeadService } from '../../services/lead.service';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.scss'],
})
export class LeadCardComponent implements OnInit {
  @Input() lead: any;

  constructor(private leadService: LeadService) {}
  ngOnInit(): void {
    console.log('this.lead', this.lead);
  }

  accept() {
    this.leadService.acceptLead(this.lead.id).subscribe(() => this.lead.status = 'accepted');
  }

  decline() {
    this.leadService.declineLead(this.lead.id).subscribe(() => this.lead.status = 'declined');
  }
}
